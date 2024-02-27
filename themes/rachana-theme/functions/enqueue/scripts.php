<?php
function register_scripts(): void
{
    $version = wp_get_theme()->get('Version');
    wp_enqueue_script('custom_js', get_template_directory_uri()."/assets/js/scripts.js", array('bootstrap'), $version,true);
    wp_enqueue_script('bootstrap_js', "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", array(),'5.2.3', true);
    wp_enqueue_script('lightbox_js', "https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.js", array(),'2.1.0', true);
}

add_action('wp_enqueue_scripts', 'register_scripts');