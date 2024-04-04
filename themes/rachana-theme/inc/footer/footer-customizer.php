<?php
/**
 * Register footer settings in the Customizer.
 *
 * @param WP_Customize_Manager $wp_customize The Customizer object.
 */
function register_footer_settings($wp_customize)
{
    $wp_customize->add_section('footer_section', array(
        'title' => __('Footer', 'rachana-theme'),
        'priority' => 30,
    ));
    register_social_media_settings($wp_customize, 'footer_section');
    register_contact_info_settings($wp_customize, 'footer_section');
    register_footer_third_column_settings($wp_customize, 'footer_section');
}

add_action('customize_register', 'register_footer_settings');
