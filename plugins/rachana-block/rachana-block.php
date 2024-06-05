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

    $categories[] = array(
        'slug'  => 'rachana-dynamic',
        'title' => 'Rachana Dynamic Blocks',
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
    register_block_type(__DIR__.'/build/slide-show');
    register_block_type(__DIR__.'/build/alert');
    register_block_type(__DIR__.'/build/page-portal');
    register_block_type(__DIR__.'/build/news-block');

}
add_action('init', 'wp_scripts_rachana_wordpress_block_init');