<?php
/**
 * Plugin Name: Egov Block 2
 * Plugin URI: https://github.com/
 * Description: A WordPress gutenberg plugin.
 * Author: sokmean-mptc
 * Author URI: https://sokmean.com/
 * Version: 0.0.1
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

function egov_block_2_activate() {
	EB2\Base\Activate::activate();
}
register_activation_hook( __FILE__, "egov_block_2_activate" );

function egov_block_2_deactivate() {
	EB2\Base\Deactivate::deactivate();
}
register_deactivation_hook( __FILE__, "egov_block_2_deactivate" );

if( class_exists( "EB2\\Init" ) ) {
	EB2\Init::registerServices();
}