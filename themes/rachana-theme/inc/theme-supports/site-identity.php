<?php
function site_identity($wp_customize): void
{
    $wp_customize->add_setting('show_title', array(
        'default' => true,
        'transport' => 'refresh',
    ));

    $wp_customize->add_control('show_title_control', array(
        'label' => __('Show Title', 'rachana-theme'),
        'section' => 'title_tagline',
        'type' => 'checkbox',
        'settings' => 'show_title',
    ));

    $wp_customize->add_setting('logo_width', array(
        'default'           => 150,
        'sanitize_callback' => 'absint',
    ));

    $wp_customize->add_control('logo_width', array(
        'label'       => __('Logo Width', 'rachana-theme'),
        'section'     => 'title_tagline',
        'type'        => 'number',
    ));

}
add_action('customize_register', 'site_identity');

function theme_support(): void
{
    add_theme_support('title-tag');
    add_theme_support('custom-logo');
    add_theme_support('post-thumbnails');
}

add_action('after_setup_theme', 'theme_support');

