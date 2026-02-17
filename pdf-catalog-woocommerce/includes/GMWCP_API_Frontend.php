<?php

class GMWCP_API_Frontend {
    public $total_products;

    public function __construct() {
        add_action('rest_api_init', array($this, 'register_routes'));
    }

    public function register_routes() {
        register_rest_route('gmwcp-pdf/v1', '/products', array(
            'methods' => 'GET',
            'callback' => array($this, 'gmwcp_get_woocommerce_products'),
            'args' => $this->get_endpoint_args(),
            'permission_callback' => '__return_true',
        ));
        register_rest_route('gmwcp-pdf/v1', '/setting', array(
            'methods' => 'GET',
            'callback' => array($this, 'gmwcp_get_setting'),
            'args' => array(),
            'permission_callback' => '__return_true',
        ));
    }
    public function convert_image_to_base64($image_path) {
        $file_extension = strtolower(pathinfo($image_path, PATHINFO_EXTENSION));

        // Check if the file is a WebP image
        if ($file_extension === 'webp') {
            // Attempt to use GD library
            if (function_exists('imagecreatefromwebp') && function_exists('imagepng')) {
                // Create an image resource from the WebP file
                $webp_image = @imagecreatefromwebp($image_path);
                if ($webp_image) {
                    // Start output buffering
                    ob_start();
                    // Output the image as PNG
                    imagepng($webp_image);
                    // Get the image data from the buffer
                    $png_data = ob_get_clean();

                    // Free memory
                    imagedestroy($webp_image);

                    // Convert the PNG data to a base64 string
                    return 'data:image/png;base64,' . base64_encode($png_data);
                }
            }

            // Attempt to use Imagick
            if (class_exists('Imagick')) {
                try {
                    $imagick = new Imagick();
                    $imagick->readImage($image_path); // Read the WebP image
                    $imagick->setImageFormat('png'); // Convert to PNG

                    // Get the PNG data as a string
                    $png_data = $imagick->getImageBlob();

                    // Destroy the Imagick object
                    $imagick->clear();
                    $imagick->destroy();

                    // Convert the PNG data to a base64 string
                    return 'data:image/png;base64,' . base64_encode($png_data);
                } catch (Exception $e) {
                    error_log('Imagick conversion failed: ' . $e->getMessage());
                }
            }

            // If neither GD nor Imagick could process the WebP file, log an error
            error_log('Neither GD nor Imagick could process the WebP file.');
            return null;
        }

        // Return the original path for non-WebP images
        return $image_path;
    }


    public function get_endpoint_args() {
        return array(
            'page' => array(
                'validate_callback' => function($param, $request, $key) {
                    return is_numeric($param) && $param >= 1;
                },
                'sanitize_callback' => 'absint',
                'default' => 1,
            ),
            'per_page' => array(
                'validate_callback' => function($param, $request, $key) {
                    return is_numeric($param) && $param >= 1;
                },
                'sanitize_callback' => 'absint',
                'default' => 10,
            ),
            'taxonomy' => array(
                'sanitize_callback' => 'sanitize_text_field',
            ),
            'taxonomy_value' => array(
                'sanitize_callback' => 'sanitize_text_field',
            ),
            'product_id' => array(
                'validate_callback' => function($param, $request, $key) {
                    return is_numeric($param) && $param > 0;
                },
                'sanitize_callback' => 'absint',
            ),
        );
    }

    public function gmwcp_get_setting($data) {
        global $gmpcp_translation, $gmpcp_arr;
        $arr = array();
        $setting = array();
        $setting['gmwcp_show_hide'] = $gmpcp_arr['gmwcp_show_hide'];
        $setting['gmpcp_pagebreak'] = $gmpcp_arr['gmpcp_pagebreak'];
        $setting['gmpcp_image_width'] = $gmpcp_arr['gmpcp_image_width'];
        $setting['gmpcp_header_text'] = $gmpcp_arr['gmpcp_header_text'];
        $setting['gmpcp_hf_background_color'] = $gmpcp_arr['gmpcp_hf_background_color'];
        $setting['gmpcp_hf_item_background_color'] = $gmpcp_arr['gmpcp_hf_item_background_color'];
        $setting['gmpcp_footer_text'] = $gmpcp_arr['gmpcp_footer_text'];
        $setting['gmpcp_background_color'] = $gmpcp_arr['gmpcp_background_color'];
        $setting['gmpcp_item_background_color'] = $gmpcp_arr['gmpcp_item_background_color'];

        $arr['translation'] = $gmpcp_translation;
        $arr['setting'] = $setting;

        return rest_ensure_response($arr);
    }

    public function gmwcp_get_woocommerce_products($data) {
        nocache_headers();
        $data['per_page']=100;
        global $gmpcp_arr;
        $gmwcp_exclude_out_of_stock = $gmpcp_arr['gmwcp_exclude_out_of_stock'];
        $products = array();
        $fields = get_posts(array(
            'post_type'   => 'gmwcp_custom_field', // Custom post type
            'post_status' => 'publish', // Only published posts
            'numberposts' => -1 // Retrieve all posts
        ));

        // Map the retrieved fields to a more usable format
        $gmwcp_custom_field_data = array_map(function($field) {
            return array(
                'id'       => $field->ID,
                'title'    => $field->post_title,
                'gmwcpkey'     => get_post_meta($field->ID, 'gmwcpkey', true),
                
            );
        }, $fields);
        $gmpcp_arr['front_api_gmwcp_custom_field']=$gmwcp_custom_field_data;
        if (isset($data['product_id']) && !empty($data['product_id'])) {
            $product_id = absint($data['product_id']);
            $product = $this->gmwcp_get_product_by_id($product_id);

            if (!$product) {
                return new WP_Error('invalid_product_id', __('Invalid product ID.'), array('status' => 404));
            }

            $formatted_product = $this->gmwcp_format_product_data($product);
            $products[] = $formatted_product;
            $response = rest_ensure_response($products);
            $response->header('X-WP-TotalPages', 1);
        } else {
            $order_by = $gmpcp_arr['gmwcp_shop_orderby'];
            $order    = $gmpcp_arr['gmwcp_shop_order'];
            $args = array(
                'post_type' => 'product',
                'posts_per_page' => $data['per_page'],
                'paged' => $data['page'],
                'order'          => $order,
            );
            if ( $order_by === 'price' ) {
                $args['meta_key'] = '_price';
                $args['orderby']  = 'meta_value_num'; // Important: numeric sorting
            } elseif ( $order_by === 'title' ) {
                $args['orderby'] = 'title';
            } else {
                $args['orderby'] = 'date'; // fallback or any default you prefer
            }

            if (!empty($data['s'])) {
                $args['s'] =$data['s'];
            }
            if (!empty($data['taxonomy'])) {
                $args['tax_query'][] = array(
                    'taxonomy' => $data['taxonomy'],
                    'field' => 'slug',
                    'terms' => $data['taxonomy_value'],
                );
            }
            if (isset($gmpcp_arr['gmpcp_exclude_category'])) {
                $args['tax_query'][] = array(
                    'taxonomy' => 'product_cat',
                    'field' => 'id',
                    'terms' => $gmpcp_arr['gmpcp_exclude_category'],
                    'operator' => 'NOT IN',
                );
            }

            $products = $this->gmwcp_get_products_by_query($args);
            $total_products = $this->total_products;
            $total_pages = ceil($total_products / $data['per_page']);

            $response = rest_ensure_response($products);
            $response->header('X-WP-TotalPages', $total_pages);
        }

        return $response;
    }

    public function gmwcp_get_product_by_id($product_id) {
        return wc_get_product($product_id);
    }

    public function gmwcp_get_products_by_query($args) {
        global $gmpcp_arr;
        $gmwcp_exclude_out_of_stock = $gmpcp_arr['gmwcp_exclude_out_of_stock'];
        $products = array();
        $args['meta_query'] = array(
            array(
                'key'     => '_gmwcp_exclude_product_single',
                'compare' => 'NOT EXISTS',
            ),
        );
       
        if ($gmwcp_exclude_out_of_stock == 'yes') {
            $args['tax_query'][] = array(
                'taxonomy' => 'product_visibility',
                'field'    => 'name',
                'terms'    => array('outofstock'),
                'operator' => 'NOT IN',
            );
            $args['meta_query'][] = array(
                'key'     => '_stock_status',
                'value'   => 'instock',
                'compare' => '='
            );
        }

        $query = new WP_Query($args);
        $this->total_products = $query->found_posts;

        if ($query->have_posts()) {
            while ($query->have_posts()) {
                $query->the_post();
                $product_id = get_the_ID();
                $product = wc_get_product($product_id);
                $formatted_product = $this->gmwcp_format_product_data($product);
                $products[] = $formatted_product;
            }
            wp_reset_postdata();
        }

        return $products;
    }

    public function gmwcp_format_product_data($product) {
        global $gmpcp_arr;
        //print_r($gmpcp_arr['front_api_gmwcp_custom_field']);
        $gallery_image_ids = $product->get_gallery_image_ids();
        $gallery_images = array();
        foreach ($gallery_image_ids as $image_id) {
            $thumbnail = wp_get_attachment_image_src($image_id, [300, 300]); // Get thumbnail URL

            if($thumbnail[0]!=''){
                $gallery_images[] = array(
                    'src' => $thumbnail[0], // Thumbnail URL
                    'alt' => get_post_meta($image_id, '_wp_attachment_image_alt', true),
                );
            }
        }

        $product_cat = wp_get_post_terms($product->get_id(), 'product_cat', array('fields' => 'names'));
        $product_tag = wp_get_post_terms($product->get_id(), 'product_tag', array('fields' => 'names'));
        $product_description = wpautop($product->get_description());

        $allowed_tags = array(
            'strong' => array(),
            'h1' => array(),
            'h2' => array(),
            'h3' => array(),
            'h4' => array(),
            'h6' => array(),
            'p' => array(),
            'div' => array(),
        );
        $thumbnail_url = get_the_post_thumbnail_url($product->get_id(), 'woocommerce_thumbnail');
        if (!$thumbnail_url) {
            $thumbnail_url = wc_placeholder_img_src('full');
        }
        $full_url = get_the_post_thumbnail_url($product->get_id(), 'woocommerce_thumbnail');
        if (!$full_url) {
            $full_url = wc_placeholder_img_src('full');
        }
        $formatted_product = array(
            'id' => $product->get_id(),
            'name' => $product->get_name(),
            'short_description' => $product->get_short_description(),
            'price' => get_option('woocommerce_currency') . ' ' . number_format(
                                                                                (float) $product->get_price(),
                                                                                wc_get_price_decimals(),
                                                                                wc_get_price_decimal_separator(),
                                                                                wc_get_price_thousand_separator()
                                                                            ),
            'regular_price' => get_option('woocommerce_currency') . ' ' . number_format(
                                                                                (float) $product->get_regular_price(),
                                                                                wc_get_price_decimals(),
                                                                                wc_get_price_decimal_separator(),
                                                                                wc_get_price_thousand_separator()
                                                                            ),
            'sale_price' => get_option('woocommerce_currency') . ' ' . number_format(
                                                                                (float) $product->get_sale_price(),
                                                                                wc_get_price_decimals(),
                                                                                wc_get_price_decimal_separator(),
                                                                                wc_get_price_thousand_separator()
                                                                            ),
            'permalink' => get_permalink($product->get_id()),
            'sku' => $product->get_sku(),
            'stock_status' => $product->get_stock_status(),
            'stock_quantity' => $product->get_stock_quantity(),
            'categories' => wp_get_post_terms($product->get_id(), 'product_cat', array('fields' => 'names')),
            'tags' => wp_get_post_terms($product->get_id(), 'product_tag', array('fields' => 'names')),
            'brands' => wp_get_post_terms($product->get_id(), 'product_brand', array('fields' => 'names')),
            'images' => array(
                'thumbnail' => $this->convert_image_to_base64($thumbnail_url),
                'full' => $this->convert_image_to_base64($full_url),
            ),
            'gallery_images' => $gallery_images,
            'producat_cat' => $product_cat,
            'producat_cat_id' => wp_get_post_terms($product->get_id(), 'product_cat', array('fields' => 'ids')),
            'producat_tag' => $product_tag,
            'weight' => $product->get_weight() . ' ' . get_option('woocommerce_weight_unit'),
            'dimensions' => $product->get_length() . 'x' . $product->get_width() . 'x' . $product->get_height() . ' ' . get_option('woocommerce_dimension_unit'),
            'description' => $product_description
        );

        $formatted_attributes = array();
        $attributes = $product->get_attributes();
        foreach ($attributes as $attr => $attr_deets) {
            $attribute_label = wc_attribute_label($attr);
            if (isset($attributes[$attr]) || isset($attributes['pa_' . $attr])) {
                $attribute = isset($attributes[$attr]) ? $attributes[$attr] : $attributes['pa_' . $attr];
                if ($attribute['is_taxonomy']) {
                    $formatted_attributes[$attribute_label] = implode(', ', wc_get_product_terms($product->get_id(), $attribute['name'], array('fields' => 'names')));
                } else {
                    $formatted_attributes[$attribute_label] = $attribute['value'];
                }
            }
        }
        $formatted_product['attributes'] = $formatted_attributes;
        foreach($gmpcp_arr['front_api_gmwcp_custom_field'] as $key_gmwcp_custom_field_data=>$val_gmwcp_custom_field_data){
            $formatted_product['gmwcp_custom_field'][$val_gmwcp_custom_field_data['gmwcpkey']]=  array(
                "label"=>$val_gmwcp_custom_field_data['title'],
                "value"=>get_post_meta($product->get_id(), $val_gmwcp_custom_field_data['gmwcpkey'], true)
            );
        }

        return $formatted_product;
    }
}
