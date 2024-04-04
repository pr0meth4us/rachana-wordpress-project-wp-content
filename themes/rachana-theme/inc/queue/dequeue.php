<?php
function dequeue_scripts_one_by_one(): void
{
    $scripts_to_dequeue = array(
    );

    foreach ($scripts_to_dequeue as $script) {
        wp_dequeue_script($script);
        wp_deregister_script($script);
    }
}
add_action('wp_enqueue_scripts', 'dequeue_scripts_one_by_one', 9999);
function dequeue_styles_one_by_one(): void
{
    $styles_to_dequeue = array(
        'common'
    );

    foreach ($styles_to_dequeue as $style) {
        wp_dequeue_style($style);
        wp_deregister_style($style);
    }
}
add_action('wp_enqueue_scripts', 'dequeue_styles_one_by_one', 9999);