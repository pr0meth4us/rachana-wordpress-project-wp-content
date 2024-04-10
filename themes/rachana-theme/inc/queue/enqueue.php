<?php
function enqueue_rachna_scripts(): void {
    wp_enqueue_script('bootstrap-js', 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js', array('jquery'), '5.2.3', true);
    wp_enqueue_script('validator', get_stylesheet_directory_uri() . '/assets/js/validators.js', array());
}
add_action('wp_enqueue_scripts', 'enqueue_rachna_scripts');

function enqueue_rachana_styles(): void {
    wp_enqueue_style('cgds', 'https://cdn.jsdelivr.net/npm/@dgtdept/rachana/css/cgds.css', array(), '1.0');
    wp_enqueue_style('bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css', array(), '5.2.3');
    wp_enqueue_style('bootstrap-icons', 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css', array('bootstrap'), '1.10.3');
    wp_enqueue_style('body', get_stylesheet_directory_uri() . '/assets/css/body.css', array(), '1.0');
    wp_enqueue_style('color', get_stylesheet_directory_uri() . '/assets/css/root-colors.css', array(), '1.0');
    wp_enqueue_style('high', get_stylesheet_directory_uri() . '/assets/css/styles-overwrite.scss', array(), '1.0');
    wp_enqueue_style('custom', get_stylesheet_directory_uri() . '/assets/css/custom.scss', array(), '1.0');
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@0,100..700;1,100..700&display=swap', array(), '1.0');
}
add_action('wp_enqueue_scripts', 'enqueue_rachana_styles');

function enqueue_rachna_admin_scripts() {
    wp_enqueue_script('icons', get_stylesheet_directory_uri() . '/assets/js/icons-editor.js', array(), '1.0', true);
}
add_action('admin_enqueue_scripts', 'enqueue_rachna_admin_scripts', 999);

function enqueue_customizer_scripts($wp_customize) {
    wp_enqueue_script('icons', get_stylesheet_directory_uri() . '/assets/js/icons-editor.js', array('jquery'), '1.0', true);
    wp_enqueue_script('customizer-links-script', get_template_directory_uri() . '/assets/js/customizer-links.js', array('jquery'), '1.0', true);
    wp_enqueue_script('links', get_stylesheet_directory_uri() . '/assets/js/format-links.js', array('jquery'), '1.0', true);
}
add_action('customize_controls_enqueue_scripts', 'enqueue_customizer_scripts');

