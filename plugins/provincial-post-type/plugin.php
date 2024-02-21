<?php
/**
 * Plugin Name: Provincial Post Type
 * Plugin URI: https://github.com/
 * Description: Custom Postype For Provincial Support
 * Author: sokmean-mptc
 * Author URI: https://sokmean.com/
 * Version: 1.0.0
 * Text Domain: egov
 * Domain Path: /languages
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package Egov
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once plugin_dir_path( __FILE__ ) . "vendor/autoload.php";

function provincial_post_type_activate() {
	PPT\Base\Activate::activate();
}
register_activation_hook( __FILE__, "provincial_post_type_activate" );

function provincial_post_type_deactivate() {
	PPT\Base\Deactivate::deactivate();
}
register_deactivation_hook( __FILE__, "provincial_post_type_deactivate" );

if( class_exists( "PPT\Init" ) ) {
	PPT\Init::registerServices();
}