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

//function rachana_wp_block_plugin_register_styles() {
//    $blocks_directory = plugin_dir_path(__FILE__) . 'build/';
//    $block_directories = scandir($blocks_directory);
//
//    foreach ($block_directories as $block_directory) {
//        if ($block_directory === '.' || $block_directory === '..') {
//            continue;
//        }
//
//        $block_json_path = $blocks_directory . $block_directory . '/block.json';
//        if (!file_exists($block_json_path)) {
//            continue;
//        }
//
//        $block_json_content = file_get_contents($block_json_path);
//        $block_json_data = json_decode($block_json_content, true);
//        $block_name = $block_json_data['name'];
//
//        wp_register_style($block_name . '-style', plugins_url("build/{$block_directory}/style-index.css", __FILE__));
//    }
//}
//
//add_action('init', 'rachana_wp_block_plugin_register_styles');
//
//function rachana_wp_block_plugin_enqueue_scripts() {
//    wp_enqueue_script('my-block-plugin-block-styles', plugins_url('block-styles.js', __FILE__), array('wp-blocks', 'wp-edit-post'), null, true);
//}
//
//add_action('enqueue_block_editor_assets', 'rachana_wp_block_plugin_enqueue_scripts');

function wp_scripts_rachana_wordpress_block_init()
{
    register_block_type(__DIR__.'/build/accordion');
    register_block_type(__DIR__.'/build/alert');
}
add_action('init', 'wp_scripts_rachana_wordpress_block_init');

function rachana_block_plugin_enqueue_scripts() {
    wp_enqueue_script('bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js', array('jquery'), '5.3.0', true);
}

add_action('wp_enqueue_scripts', 'rachana_block_plugin_enqueue_scripts');
