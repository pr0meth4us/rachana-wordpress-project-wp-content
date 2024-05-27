<?php
/**
 * Plugin Name: Rachana Block
 * Description: a drag and drop adaptation of Rachana (Cambodia Government Design System)
 * Version: 1.0
 * Author: DiTr - Rachana Team
 * Text Domain: rachana-block
 */

if (!defined('ABSPATH')){
    exit;
}

function register_layout_category( $categories ) {

    $categories[] = array(
        'slug'  => 'rachana-block-category',
        'title' => 'Rachana Blocks',
    );

    return $categories;
}

add_filter( 'block_categories_all', 'register_layout_category' );

function wp_scripts_rachana_wordpress_block_init()
{
    register_block_type(__DIR__.'/build/table');
    register_block_type(__DIR__.'/build/button');
    register_block_type(__DIR__.'/build/card');
    register_block_type(__DIR__.'/build/text-card');
    register_block_type(__DIR__.'/build/button');
    register_block_type(__DIR__.'/build/alert');
}
add_action('init', 'wp_scripts_rachana_wordpress_block_init');