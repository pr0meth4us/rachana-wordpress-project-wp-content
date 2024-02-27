<?php
function register_styles(): void
{
    $version = wp_get_theme()->get('Version');

	wp_enqueue_style('cgds_util', get_template_directory_uri()."/assets/css/cgds.util.css", array(), $version);
    wp_enqueue_style('cgds', get_template_directory_uri()."/assets/css/cgds.css", array('cgds_util'), $version);
	wp_enqueue_style('custom_css', get_template_directory_uri()."/assets/css/custom.css", array(), $version);

	wp_enqueue_style('bootstrap_icon', "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css", array(),'1.9.1');
}

add_action('wp_enqueue_scripts', 'register_styles');
