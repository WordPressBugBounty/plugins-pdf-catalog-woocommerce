<?php

if ( ! defined( 'ABSPATH' ) ) exit;
class GMWCP_API {
    
    public function __construct() {
        // Register the REST API route on plugin activation
        add_action('rest_api_init', array($this, 'GMWCP_rest_api_init'));
    }

    public function GMWCP_rest_api_init() {
        // Register a custom route for saving settings
        register_rest_route('gmwcp/v1', '/save-settings', array(
            'methods' => 'POST',
            'callback' => array($this, 'GMWCP_save_multiple_settings'),
            'permission_callback' => array($this, 'GMWCP_permission_callback'),
        ));

        register_rest_route('gmwcp/v1', '/save-customfield', array(
            'methods' => 'POST',
            'callback' => array($this, 'GMWCP_save_custom_field'),
            'permission_callback' => array($this, 'GMWCP_permission_callback'),
        ));
        register_rest_route('gmwcp/v1', '/delete-customfield', array(
            'methods' => 'POST',
            'callback' => array($this, 'GMWCP_delete_custom_field'),
            'permission_callback' => array($this, 'GMWCP_permission_callback'),
        ));

        // Register a custom route for fetching settings (GET)
        register_rest_route('gmwcp/v1', '/get-settings', array(
            'methods' => 'GET',
            'callback' => array($this, 'GMWCP_get_settings'),
            'permission_callback' => array($this, 'GMWCP_permission_callback'),
        ));

        register_rest_route('gmwcp/v1', '/moreplugin', array(
            'methods' => 'GET',
            'callback' => array($this, 'GMWCP_moreplugin'),
            'permission_callback' => array($this, 'GMWCP_permission_callback'),
        ));
    }

    // Save multiple settings
    public function GMWCP_save_multiple_settings($request) {
         // Get nonce from request headers
        $nonce = $request->get_header('X-WP-Nonce');

        // Verify nonce
        if ( ! wp_verify_nonce( $nonce, 'wp_rest' ) ) {
            return new WP_REST_Response(array(
            'success' => false,
            'message' => 'Invalid nonce',
        ), 403); // Invalid nonce error
        }
        // Retrieve the settings array from the request body
        $settings = $request->get_param('settings');

        if (!is_array($settings)) {
            return new WP_Error('invalid_settings', 'Settings must be an array', array('status' => 400));
        }

        $response = array();

        // Loop through each setting and save it
        foreach ($settings as $option_name => $option_value) {
            // Sanitize the option name
            $option_name = sanitize_key($option_name);
           /* echo "<pre>";
            print_r($option_value);
            echo "</pre>";*/
            // Sanitize the option value based on your use case. Example:
            if (is_array($option_value)) {
                $option_value = array_map('sanitize_text_field', $option_value); // Sanitize array values
            } else {
                $option_value = sanitize_text_field($option_value); // Sanitize single value
            }

            // Save the option
            $result = update_option($option_name, $option_value);

            // Add the result to the response
            $response[$option_name] = $result ? 'saved' : 'failed';
        }

        return rest_ensure_response(array(
            'success' => true,
            'message' => 'Settings processed',
            'results' => $response,
        ));
    }

    // Save multiple settings
    public function GMWCP_save_custom_field($request) {
         // Get nonce from request headers
        $nonce = $request->get_header('X-WP-Nonce');

        // Verify nonce
        if ( ! wp_verify_nonce( $nonce, 'wp_rest' ) ) {
            return new WP_REST_Response(array(
                'success' => false,
                'message' => 'Invalid nonce',
            ), 403); // Invalid nonce error
        }
        $settings = $request->get_param('settings');
        // Sanitize and retrieve the data from the AJAX request
        $field_id = isset($settings['id']) && $settings['id'] != 'null' ? sanitize_text_field($settings['id']) : '';
        $field_name = sanitize_text_field($settings['title']);
        $field_gmwcpkey = sanitize_text_field($settings['gmwcpkey']);

        // Validate the required fields
        if (empty($field_name)) {
            return new WP_REST_Response(array(
                'success' => false,
                'message' => 'Field name is required.',
            ), 403);
        }
        if (empty($field_gmwcpkey) ) {
             return new WP_REST_Response(array(
                'success' => false,
                'message' => 'Field key is required.',
            ), 403);
        }

        // Prepare post data for insertion or update
        $post_data = array(
            'post_title'  => $field_name,
            'post_type'   => 'gmwcp_custom_field', // Your custom post type
            'post_status' => 'publish', // Set post status
        );

        if (!empty($field_id)) {
            // Update existing field
            $post_data['ID'] = $field_id; // Set the ID for updating
            $post_id = wp_update_post($post_data); // Update the post

            if (is_wp_error($post_id)) {
                wp_send_json_error('Error updating post: ' . $post_id->get_error_message()); // Handle update errors
            }
        } else {
            // Insert new field
            $post_id = wp_insert_post($post_data); // Insert the post
            if (is_wp_error($post_id)) {
                wp_send_json_error('Error saving post: ' . $post_id->get_error_message()); // Handle insert errors
            }
        }
        update_post_meta($post_id, 'gmwcpkey', $field_gmwcpkey);
        return rest_ensure_response(array(
            'success' => true,
            'message' => 'Settings processed',
        ));
    }
    // Save multiple settings
    public function GMWCP_delete_custom_field($request) {
         // Get nonce from request headers
        $nonce = $request->get_header('X-WP-Nonce');

        // Verify nonce
        if ( ! wp_verify_nonce( $nonce, 'wp_rest' ) ) {
            return new WP_REST_Response(array(
                'success' => false,
                'message' => 'Invalid nonce',
            ), 403); // Invalid nonce error
        }
        $settings = $request->get_param('settings');
        $field_id = sanitize_text_field($settings['id']);

        // Validate the required fields
        if (empty($field_id)) {
            return new WP_REST_Response(array(
                'success' => false,
                'message' => 'Field id is required.',
            ), 403);
        }

        // Delete the post (field) from the database
        $deleted = wp_delete_post($field_id, true); // true for force delete

        if ($deleted) {
            return rest_ensure_response(array(
                'success' => true,
                'message' => 'Field deleted successfully.',
            ));
            wp_send_json_success('Field deleted successfully.'); // Send success response if deleted
        } else {
            return rest_ensure_response(array(
                'success' => true,
                'message' => 'Error deleting field. Please try again.',
            ));
        }
    }

    // Retrieve settings
    public function GMWCP_get_settings($request) {
        global $gmpcp_arr,$gmpcp_translation;
         // Get nonce from request headers
        $nonce = $request->get_header('X-WP-Nonce');

        // Verify nonce
        if ( ! wp_verify_nonce( $nonce, 'wp_rest' ) ) {
            return new WP_REST_Response(array(
                'success' => false,
                'message' => 'Invalid nonce',
            ), 403); // Invalid nonce error
        }
        $response = array();

        // Retrieve each option and add it to the response array
        foreach ($gmpcp_arr as $key_option=>$value_option) {
            $response[$key_option] = $value_option;
        }
        // Fetch fields from the database
        $fields = get_posts(array(
            'post_type'   => 'gmwcp_custom_field', // Custom post type
            'post_status' => 'publish', // Only published posts
            'numberposts' => -1 // Retrieve all posts
        ));

        // Map the retrieved fields to a more usable format
        $data = array_map(function($field) {
            return array(
                'id'       => $field->ID,
                'title'    => $field->post_title,
                'gmwcpkey'     => get_post_meta($field->ID, 'gmwcpkey', true),
                
            );
        }, $fields);
        $response['custom_fields'] = $data;
        return rest_ensure_response($response);
    }

    // Permission callback: only allow admins
    public function GMWCP_permission_callback($request) {
        return current_user_can('manage_options'); // Allow only admins
    }

    public function GMWCP_moreplugin($request) {
        // Create an array of plugins
        $plugins = [
            [
                "name" => "Product Enquiry for WooCommerce",
                "url" => "https://wordpress.org/plugins/gm-woocommerce-quote-popup/",
                "shortdescription" => "The Product Enquiry for WooCommerce plugin adds an enquiry button to every WooCommerce Product Page.",
                "image" => "https://ps.w.org/gm-woocommerce-quote-popup/assets/icon-128x128.png"
            ],
            [
                "name" => "Short Description and Attributes Show Loop For Woocommerce",
                "url" => "https://wordpress.org/plugins/short-description-and-attribute-show-loop-for-woocommerce/",
                "shortdescription" => "To create a product loop in WooCommerce that displays a short description and selected product attributes, you can customize the WooCommerce template or use hooks.",
                "image" => "https://ps.w.org/gm-woocommerce-quote-popup/assets/icon-128x128.png"
            ],
            [
                "name" => "Add to Quote For Woocommerce",
                "url" => "https://wordpress.org/plugins/product-quote-cart-for-wc/",
                "shortdescription" => "feature to WooCommerce with a brief, one-line product description, you can either use a plugin or manually customize the WooCommerce product loop.",
                "image" => "https://ps.w.org/gm-woocommerce-quote-popup/assets/icon-128x128.png"
            ]
            ,
            [
                "name" => "Product Shortcode – Widget – Block for Woocommerce ",
                "url" => "https://wordpress.org/plugins/gm-woo-product-list-widget/",
                "shortdescription" => "in WooCommerce for displaying products with descriptions, you can leverage the built-in WooCommerce shortcodes or customize them to suit your needs.",
                "image" => "https://ps.w.org/gm-woocommerce-quote-popup/assets/icon-128x128.png"
            ]
            ,
            [
                "name" => "Show Variations On Shop & Category WooCommerce",
                "url" => "https://wordpress.org/plugins/woo-show-single-variations-shop-category/",
                "shortdescription" => "you can show product variations directly on the shop and category pages.",
                "image" => "https://ps.w.org/gm-woocommerce-quote-popup/assets/icon-128x128.png"
            ]
            ,
            [
                "name" => "Variation Dropdown to Radio For Woocommerce",
                "url" => "https://wordpress.org/plugins/gm-variations-radio-buttons-for-woocommerce/",
                "shortdescription" => "enhancing user experience. Customers can easily see and select variations at a glance.",
                "image" => "https://ps.w.org/gm-woocommerce-quote-popup/assets/icon-128x128.png"
            ]
            ,
            [
                "name" => "PDF Catalog Woocommerce",
                "url" => "https://wordpress.org/plugins/pdf-catalog-woocommerce/",
                "shortdescription" => "This plugin allows you to generate customizable catalogs featuring product images, descriptions, and prices.",
                "image" => "https://ps.w.org/gm-woocommerce-quote-popup/assets/icon-128x128.png"
            ]
            ,
            [
                "name" => "Restrict Payment Methods For WooCommerce",
                "url" => "https://wordpress.org/plugins/restrict-payment-methods-for-woocommerce/",
                "shortdescription" => "allows you to restrict payment methods, ensuring customers can only use suitable options at checkout.",
                "image" => "https://ps.w.org/gm-woocommerce-quote-popup/assets/icon-128x128.png"
            ],
            [
                "name" => "Display Product Variations Dropdown On Shop Page For Woocommerce",
                "url" => "https://wordpress.org/plugins/display-product-variations-dropdown-on-shop-page-for-woocommerce/",
                "shortdescription" => "Enhance your shop page by displaying product variation dropdowns directly on the product listings.",
                "image" => "https://ps.w.org/gm-woocommerce-quote-popup/assets/icon-128x128.png"
            ]
        ];
         return rest_ensure_response($plugins);
    }
}

// Initialize the API class
new GMWCP_API();
