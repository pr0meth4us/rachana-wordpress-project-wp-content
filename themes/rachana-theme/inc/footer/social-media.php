<?php
/**
 * Register social media settings in the Customizer.
 *
 * @param WP_Customize_Manager $wp_customize The Customizer object.
 * @param string $section_id The section ID to add the settings to.
 */
function register_social_media_settings($wp_customize, $section_id)
{
    $wp_customize->add_setting('social_media_label', array(
        'default' => 'Social Media Links',
        'transport' => 'refresh',
    ));

    $wp_customize->add_control('social_media_label', array(
        'label' => __('', 'rachana-theme'),
        'section' => $section_id,
        'type' => 'text',
        'settings' => 'social_media_label',
        'priority' => 1,
        'input_attrs' => array(
            'style' => 'font-size: 2em; margin-bottom: 10px;',
        ),
    ));

    $social_media_platforms = array(
        'facebook' => 'Facebook',
        'linkedIn' => 'LinkedIn',
        'telegram' => 'Telegram',
        'tiktok' => 'TikTok',
        'youtube' => 'YouTube',
        'x' => 'X',
    );

    foreach ($social_media_platforms as $platform_slug => $platform_name) {
        $wp_customize->add_setting($platform_slug . '_link', array(
            'default' => '',
            'transport' => 'refresh',
        ));

        $wp_customize->add_control($platform_slug . '_link', array(
            'label' => __($platform_name . ' Link', 'rachana-theme'),
            'section' => $section_id,
            'type' => 'url',
            'priority' => 2,
        ));
    }
}
