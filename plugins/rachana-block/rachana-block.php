<?php
/**
 * Plugin Name: Rachana Block
 * Description: a drag and drop adaptation of Rachana (Cambodia Government Design System)
 * Version: 1.0
 * Author: DiTr - Rachana Team
 * Text Domain: rachana-block
 */

if (!defined('ABSPATH')) {
    exit;
}

function register_layout_category($categories)
{
    $categories[] = array(
        'slug' => 'rachana-block-category',
        'title' => 'Rachana Blocks',
    );
    $categories[] = array(
        'slug' => 'rachana-dynamic',
        'title' => 'Rachana Dynamic Blocks',
    );
    return $categories;
}
add_filter('block_categories_all', 'register_layout_category');

function wp_scripts_rachana_wordpress_block_init()
{
    $blocks = array(
        'table' => 'render_table_block',
        'button' => 'render_button_block',
        'card' => 'render_card_block',
        'text-card' => 'render_text_card_block',
        'slide-show' => 'render_slide_show_block',
        'alert' => 'render_alert_block',
        'page-portal' => 'render_page_portal_block',
        'news-block' => 'render_news_block',
        'announcement-block' => 'render_announcement_block',
        'test' => 'render_test_block',
    );

    foreach ($blocks as $block_name => $render_callback) {
        register_block_type(__DIR__ . '/build/' . $block_name, array(
            'render_callback' => $render_callback,
        ));
    }
}
add_action('init', 'wp_scripts_rachana_wordpress_block_init');