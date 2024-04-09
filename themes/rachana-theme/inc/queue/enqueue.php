<?php
function enqueue_rachna_scripts(): void {
    wp_enqueue_script('bootstrap-js', 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js', array(), '5.2.3');
    wp_enqueue_script('validator', get_stylesheet_directory_uri() . '/assets/js/validators.js', array());
}
add_action('wp_enqueue_scripts', 'enqueue_rachna_scripts');

function enqueue_rachana_styles(): void {
    wp_enqueue_style('cgds', 'https://cdn.jsdelivr.net/npm/@dgtdept/rachana/css/cgds.css', array());
    wp_enqueue_style('bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css', array(), '5.2.3');
    wp_enqueue_style('bootstrap-icons', 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css', array('bootstrap'), '1.10.3');
    wp_enqueue_style('body', get_stylesheet_directory_uri() . '/assets/css/body.css', array());
    wp_enqueue_style('color', get_stylesheet_directory_uri() . '/assets/css/root-colors.css', array());
    wp_enqueue_style('high', get_stylesheet_directory_uri() . '/assets/css/styles-overwrite.scss', array());
    wp_enqueue_style('custom', get_stylesheet_directory_uri() . '/assets/css/custom.css', array());
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@0,100..700;1,100..700&display=swap');
}
add_action('wp_enqueue_scripts', 'enqueue_rachana_styles');