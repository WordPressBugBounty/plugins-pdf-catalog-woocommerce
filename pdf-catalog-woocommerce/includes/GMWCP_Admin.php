<?php
/**
* This class is loaded on the back-end since its main job is
* to display the Admin to box.
*/
class GMWCP_Admin {
	
	public function __construct () {
		add_action( 'admin_menu', array( $this, 'GMWCP_admin_menu' ) );
		add_action('admin_enqueue_scripts', array( $this, 'GMWCP_admin_script' ));
		add_filter( 'woocommerce_product_data_tabs', array( $this, 'GMWCP_custom_product_tabs' ) );
		add_filter( 'woocommerce_product_data_panels', array( $this, 'GMWCP_custom_product_panels' ) );
		add_action( 'woocommerce_process_product_meta', array( $this, 'GMWCP_custom_save' ) );
		add_action( 'init', array( $this, 'GMWCP_init' ) );
		if ( is_admin() ) {
			return;
		}
		
	}
	public function GMWCP_init () {
		$args = array(
				'label'               => 'gmwcp_custom_field',
				'show_ui'             => false,
				'show_in_menu'        => false,
				'show_in_nav_menus'   => false,
				'show_in_admin_bar'   => false,
				'menu_position'       => 5,
				'can_export'          => true,
				'has_archive'         => true,
				'exclude_from_search' => true,
				'publicly_queryable'  => true,
				);
	
		// Registering your Custom Post Type
		register_post_type( 'gmwcp_custom_field', $args );
	}
	public function GMWCP_admin_script ($hook) {
		
		if($hook=='toplevel_page_gmwcp-catalog'){
			wp_enqueue_style('wp-components');
			 wp_register_script(
	            'gmwcp-react-admin',
	            GMWCP_PLUGINURL.'/build/admin/admin.js', // Adjust the path if necessary
		        ['wp-element','wp-dom-ready','wp-components'], // Ensure this depends on WordPress's React
		        '1.0',
		        true

		        );

			global $gmpcp_translation;
	        wp_localize_script('gmwcp-react-admin', 'gmwcp_wp_ajax', [
	            'nonce' => wp_create_nonce('wp_rest'), 
	            'moreplugin' => rest_url('gmwcp/v1/moreplugin'),
	            'getsettings' => add_query_arg('rand', rand(), rest_url('gmwcp/v1/get-settings')),
	            'savedata' => rest_url('gmwcp/v1/save-settings'),
	            'savecustomfield' => rest_url('gmwcp/v1/save-customfield'),
	            'deletecustomfield' => rest_url('gmwcp/v1/delete-customfield'),
	            'gmwcpcategory' => get_terms( 'product_cat', array(
                        'hide_empty' => false,
                    ) ),
	            'gmwcproles' => wp_roles()->roles,
	            'gmpcp_translation' => $gmpcp_translation,
	            'site_url' => get_site_url()
	        ]);

			wp_enqueue_script('gmwcp-react-admin');

		    wp_enqueue_style(
		            'gmwcp-react-admin-style',
		            GMWCP_PLUGINURL.'/build/admin/admin.css',
		            array(),
		            1,
		        );

		}
		
	}
	
	public function GMWCP_admin_menu () {
		add_menu_page('Woo Catalog PDF', 'Woo Catalog PDF', 'manage_options', 'gmwcp-catalog', array( $this, 'GMWCP_page' ));
		
	}
	public function GMWCP_page() {
		
	?>
	<div class="wrap">
		<div class="headingmc">
			<h1 class="wp-heading-inline"><?php _e('Woo Catalog PDF', 'gmwcp'); ?></h1>
			 <div class="about-text">
		        <p>
					Thank you for using our plugin! If you are satisfied, please reward it a full five-star <span style="color:#ffb900">★★★★★</span> rating.                        <br>
		            <a href="https://wordpress.org/support/plugin/pdf-catalog-woocommerce/reviews/?filter=5" target="_blank">Reviews</a>
		            | <a href="https://www.codesmade.com/contact-us/" target="_blank">Support 24x7</a> <span style="font-weight: bold;">We will respond to your support request within 24 hours.</span>
		        </p>
		    </div>
		</div>
		<?php 
		echo '<div id="GMWCP-admin-root"></div>';
		?>
		
			
	</div>

	<?php
	}

	
	public function GMWCP_custom_product_tabs( $tabs) {
		$tabs['gmwcp_tab'] = array(
			'label'		=> __( 'Pdf Catalog', 'gmwcp' ),
			'target'  =>  'gmwcp_tab_content',
	        'priority' => 60,
	        'class'   => array()
		);
		return $tabs;
	}

	public function GMWCP_custom_product_panels() {
		global $post;
		?>
		<div id='gmwcp_tab_content' class='panel woocommerce_options_panel'>
			<div class='options_group'>
				<?php
					woocommerce_wp_checkbox( array(
						'id' 		=> '_gmwcp_exclude_product_single',
						'label' 	=> __( 'Exclude Pdf Catalog', 'gmwcp' ),
						'description'   => __( 'Enable this option to exclude single Pdf Catalog on shop & category pages.', 'gmwcp' ) 
					) );
				?>
				
		</div>
	</div>
		<?php
	}

	public function GMWCP_custom_save( $post_id ) {
	
		
		if(isset( $_POST['_gmwcp_exclude_product_single'] )){
			$gmwcp_exclude_product_single = isset( $_POST['_gmwcp_exclude_product_single'] ) ? 'yes' : 'no';
			update_post_meta( $post_id, '_gmwcp_exclude_product_single', $gmwcp_exclude_product_single );
		}else{
			delete_post_meta( $post_id, '_gmwcp_exclude_product_single' );
		}
		
		
	}

}


?>
