<?php
function header_layout($wp_customize) {
    $wp_customize->add_section('header_layout_section', array(
        'title'       => __('Header Layout', 'rachana-theme'),
        'description' => __('Select the desired header layout', 'rachana-theme'),
        'priority'    => 120,
    ));

    $wp_customize->add_setting('header_layout', array(
        'default'           => '',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('header_layout_control', array(
        'type'        => 'select',
        'label'       => __('Header Layout', 'rachana-theme'),
        'section'     => 'header_layout_section',
        'settings'    => 'header_layout',
        'choices'     => array(
            'layout-1' => __('Header Layout 1 ', 'rachana-theme'),
            'layout-2' => __('Header Layout 2 ', 'rachana-theme'),
//            'layout-3' => __('Header Layout 3 ', 'rachana-theme'),
//            'layout-4' => __('Header Layout 4 ', 'rachana-theme'),
        ),
    ));
}
add_action('customize_register', 'header_layout');