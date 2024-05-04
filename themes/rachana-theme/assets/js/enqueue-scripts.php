<?php
function enqueue_rachana_scripts(): void {
    wp_enqueue_script('validator', get_stylesheet_directory_uri() . '/assets/js/validators.js', array());
    wp_enqueue_script('icons-editors', get_stylesheet_directory_uri() . '/assets/js/icons-editor.js', array());

}
add_action('wp_enqueue_scripts', 'enqueue_rachana_scripts');
