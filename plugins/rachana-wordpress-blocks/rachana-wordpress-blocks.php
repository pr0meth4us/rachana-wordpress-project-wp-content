<?php
/**
 * Plugin Name: Rachana WordPress Block
 * Description: a drag and drop adaptation of Rachana (Cambodia Government Design System)
 * Version: 1.0
 * Author: DiTr - SOEUNG Phearaneron
 * Text Domain: rachana-wordpress-block
 */

if (!defined('ABSPATH')){
    exit;
}


//function enqueue_rachana_editor_assets() {
//    $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');
//
//    wp_enqueue_script(
//        'editor-scripts',
//        plugins_url( 'build/index.js', __FILE__ ),
//        $asset_file['dependencies'],
//        $asset_file['version']
//    );
//
//    wp_enqueue_script(
//        'editor-styles',
//        plugins_url( 'build/index.css', __FILE__ ),
//        $asset_file['dependencies'],
//        $asset_file['version']
//    );
//}
//add_action( 'enqueue_block_editor_assets', 'enqueue_rachana_editor_assets' );

function wp_scripts_rachana_wordpress_block_init()
{
    register_block_type(__DIR__.'/build/accordion');
    register_block_type(__DIR__.'/build/alert');
}
add_action('init', 'wp_scripts_rachana_wordpress_block_init');
