<?php

/**
 * Register header and footer logo settings.
 *
 * @param WP_Customize_Manager $wp_customize The Customizer object.
 * @param string $section_id The ID of the Customizer section.
 * @param string $setting_id The ID of the Customizer setting.
 * @param string $label The label for the logo control.
 */
function register_logo_settings($wp_customize, $section_id, $setting_id, $label)
{
    $wp_customize->add_setting($label."_label", array(
        'default' => $label,
        'transport' => 'refresh',
    ));

    $wp_customize->add_control($label."_label", array(
        'label' => __('', 'rachana-theme'),
        'section' => $section_id,
        'type' => 'text',
        'settings' => $label."_label",
        'priority' => 0,
        'input_attrs' => array(
            'style' => 'font-size: 2em; margin-bottom: 10px;',
        ),
    ));

    $wp_customize->add_setting($setting_id, array(
        'default' => '',
        'sanitize_callback' => 'absint',
    ));

    $wp_customize->add_control(new WP_Customize_Cropped_Image_Control($wp_customize, $setting_id, array(
        'label' => __($label, 'rachana-theme'),
        'section' => $section_id,
        'settings' => $setting_id,
        'flex_width' => true,
        'flex_height' => true,
        'button_labels' => array(
            'select' => __('Select logo', 'rachana-theme'),
            'change' => __('Change logo', 'rachana-theme'),
            'remove' => __('Remove logo', 'rachana-theme'),
            'default' => __('Default', 'rachana-theme'),
        ),
        'priority' => 1,
    )));

    $wp_customize->add_setting($setting_id . '_width', array(
        'default' => 110,
        'sanitize_callback' => 'absint',
    ));

    $wp_customize->add_control($setting_id . '_width', array(
        'label' => __('Logo Width', 'rachana-theme'),
        'section' => $section_id,
        'type' => 'number',
        'settings' => $setting_id . '_width',
        'priority' => 1,
    ));
}