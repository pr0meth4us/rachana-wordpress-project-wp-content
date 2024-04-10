<?php
function enqueue_rachna_scripts(): void {
    wp_enqueue_script('validator', get_stylesheet_directory_uri() . '/assets/js/validators.js', array());
}
add_action('wp_enqueue_scripts', 'enqueue_rachna_scripts');
