<?php
/**
 * This class is loaded on the back-end since its main job is 
 * to display the Admin to box. 
 */

class GMWCP_PDF {
	public function __construct () {
		add_action( 'wp', array( $this, 'woo_comman_single_button' )); 
	}
	public function woo_comman_single_button(){
		global $gmpcp_translation,$gmpcp_arr;
		$mode = 'production';
		if (isset($_REQUEST['action']) && $_REQUEST['action']=='catelog_single') {
			
	    	$arr = array();
	    	$arr['setting']=$gmpcp_arr;
	    	$arr['site_url']=get_site_url();
	    	$arr['rest_api_url']=get_rest_url();
	    	$updated_url=get_rest_url(null,'gmwcp-pdf/v1/products');
	    	if(isset($_REQUEST['product_id']) && $_REQUEST['product_id']!=''){
	    		$updated_url = add_query_arg( 'product_id', $_REQUEST['product_id'], $updated_url );
	    	}
	    	if(isset($_REQUEST['taxonomy']) && $_REQUEST['taxonomy']!=''){
	    		$updated_url = add_query_arg( 'taxonomy', $_REQUEST['taxonomy'], $updated_url );
	    	}
	    	if(isset($_REQUEST['taxonomy_value']) && $_REQUEST['taxonomy_value']!=''){
	    		$updated_url = add_query_arg( 'taxonomy_value', $_REQUEST['taxonomy_value'], $updated_url );
	    	}
			$arr['rest_api_product']=$updated_url;
			$arr['pluginurl']=GMWCP_PLUGINURL;
	    	$json_data = json_encode($arr);

			?>
			<!doctype html>
			<html lang="en">
			   <head>
			      <meta charset="utf-8"/>
			      <meta name="viewport" content="width=device-width,initial-scale=1"/>
			      <meta name="theme-color" content="#000000"/>
			      <title>Generate PDF</title>
			       <script>
			         window.GMWCP_PDF_DATA = <?php echo $json_data; ?>;
			      </script>
			      <link rel='stylesheet' href='<?php echo GMWCP_PLUGINURL;?>/css/style.css' media='all' />
			     
			   </head>
			   <body>

			      <noscript>You need to enable JavaScript to run this app.</noscript>
			      <div id="gmpwcp_catelog_single"></div>
			       
			     <!-- Load React and ReactDOM from CDN -->
				<script src="<?php echo GMWCP_PLUGINURL;?>/js/react.production.min.js"></script>
			    <script src="<?php echo GMWCP_PLUGINURL;?>/build/frontend/frontend.js" ></script>
			   </body>
			</html>
			<?php
			exit;
		}
		if (isset($_REQUEST['action']) && $_REQUEST['action']=='catelog_shop') {

	    	$arr = array();
	    	$arr['setting']=$gmpcp_arr;
	    	if($gmpcp_arr['gmwcp_shop_show_category_wise']=='yes'){
	    		$arr['product_cat'] = get_terms( 'product_cat', array(
                        'hide_empty' => false,
                    ) );
	    	}
	    	$arr['site_url']=get_site_url();
	    	$arr['rest_api_url']=get_rest_url();
	    	$updated_url=get_rest_url(null,'gmwcp-pdf/v1/products');
	    	if(isset($_REQUEST['product_id']) && $_REQUEST['product_id']!=''){
	    		$updated_url = add_query_arg( 'product_id', $_REQUEST['product_id'], $updated_url );
	    	}
	    	if(isset($_REQUEST['taxonomy']) && $_REQUEST['taxonomy']!=''){
	    		$updated_url = add_query_arg( 'taxonomy', $_REQUEST['taxonomy'], $updated_url );
	    	}
	    	if(isset($_REQUEST['taxonomy_value']) && $_REQUEST['taxonomy_value']!=''){
	    		$updated_url = add_query_arg( 'taxonomy_value', $_REQUEST['taxonomy_value'], $updated_url );
	    	}
			$arr['rest_api_product']=$updated_url;
			$arr['pluginurl']=GMWCP_PLUGINURL;
	    	$json_data = json_encode($arr);
			?>
			<!doctype html>
			<html lang="en">
			   <head>
			      <meta charset="utf-8"/>
			      <meta name="viewport" content="width=device-width,initial-scale=1"/>
			      <meta name="theme-color" content="#000000"/>
			      <title>Generate PDF</title>
			      <script>
			         window.GMWCP_PDF_DATA = <?php echo $json_data; ?>;
			      </script>
			     <link rel='stylesheet' href='<?php echo GMWCP_PLUGINURL;?>/css/style.css' media='all' />
			   </head>
			   <body>
			      <noscript>You need to enable JavaScript to run this app.</noscript>
			      <?php 
			      if($gmpcp_arr['gmwcp_shop_view']=='grid'){
			      	echo '<div id="gmpwcp_catelog_shop_grid"></div>';
			      }else{
			      	echo '<div id="gmpwcp_catelog_shop_list"></div>';
			      }
			      ?>
			      
			     <script src="<?php echo GMWCP_PLUGINURL;?>/js/react.production.min.js"></script>
			      <script src="<?php echo GMWCP_PLUGINURL;?>/build/frontend/frontend.js" ></script>
			   </body>
			</html>
			<?php
			exit;
		}
	}
	
}