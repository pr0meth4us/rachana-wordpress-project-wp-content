<?php
$default_colors = array(
    'body-color' => '#1D2939',
    'body-bg' => '#ffffff',
    'primary' => '#1C4076',
    'secondary' => '#3da3cf',
    'text-color-content' => '#344054',
    'navbar-link-hover-bg' => '#002266',
    'text-color-theme' => '#ffffff',
    'footer-link-hover-color' => '#f07d03',
);

function register_color_setting($wp_customize, $setting_name, $label, $default_color, $section = 'colors') {
    $wp_customize->add_setting($setting_name, array(
        'default' => $default_color ,
        'transport' => 'refresh',
    ));

    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, $setting_name, array(
        'label' => __($label, 'rachana-theme'),
        'section' => $section,
        'settings' => $setting_name,
    )));
}

function generate_custom_css() {
    global $default_colors;

    $colors = array();
    foreach ($default_colors as $setting_name => $default_color) {
        $colors[$setting_name] = get_theme_mod($setting_name, $default_color);
    }

    $custom_css = '';
    foreach ($colors as $key => $value) {
        $custom_css .= "--rachana-{$key}: {$value} !important;\n";
    }

    return $custom_css;
}

add_action('customize_register', function ($wp_customize) use ($default_colors) {
    $color_section_priority = 27;

    $wp_customize->add_section('colors', array(
        'title'    => __('Colors', 'rachana-theme'),
        'priority' => $color_section_priority,
    ));

    foreach ($default_colors as $setting_name => $default_color) {
        $label = ucwords(str_replace(array('_', '-'), ' ', $setting_name));
        register_color_setting($wp_customize, $setting_name, $label, $default_color, 'colors');
    }
});
?>
