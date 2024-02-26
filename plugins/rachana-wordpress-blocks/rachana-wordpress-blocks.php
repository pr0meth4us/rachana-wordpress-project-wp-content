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

function rachana_register_block_styles() {

    $dir = plugin_dir_path( __FILE__ );

    $blocks = scandir( $dir . '/build' );

    foreach ( $blocks as $block ) {

        if ( $block === '.' || $block === '..' ) continue;

        $style_path = "build/{$block}/style-index.css";

        wp_register_style(
            "$block-style",
            plugins_url( $style_path, __FILE__ ),
            array( 'wp-blocks' )
        );

    }

}
add_action( 'init', 'rachana_register_block_styles' );


function rachana_enqueue_block_styles() {

    $dir = plugin_dir_path( __FILE__ );

    $blocks = scandir( $dir . '/build' );

    foreach ( $blocks as $block ) {

        if ( $block === '.' || $block === '..' ) continue;

        wp_enqueue_style( "$block-style" );

    }

}
add_action( 'enqueue_block_assets', 'rachana_enqueue_block_styles' );
function rachana_wp_block_plugin_enqueue_scripts() {
    wp_enqueue_script('my-block-plugin-block-styles', plugins_url('block-styles.js', __FILE__), array('wp-blocks', 'wp-edit-post'), null, true);
}

add_action('enqueue_block_editor_assets', 'rachana_wp_block_plugin_enqueue_scripts');

function wp_scripts_rachana_wordpress_block_init()
{
    register_block_type(__DIR__.'/build/accordion');
    register_block_type(__DIR__.'/build/alert');
    register_block_type(__DIR__.'/build/card');

}
add_action('init', 'wp_scripts_rachana_wordpress_block_init');

function rachana_block_plugin_enqueue_scripts() {
    wp_enqueue_script('bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js', array('jquery'), '5.3.0', true);
}

add_action('wp_enqueue_scripts', 'rachana_block_plugin_enqueue_scripts');
