<?php
$icons = array(
    'cart' => 'bi bi-cart',
    'github' => 'bi bi-github',
    'notification' => 'bi bi-bell-fill',
    'person' => 'bi bi-person-circle',
);

add_action('customize_register', 'custom_nav_icons_customizer');

function custom_nav_icons_customizer($wp_customize) {
    global $icons;

    $wp_customize->add_section('nav_icons', array(
        'title' => __('Navigation Icons', 'rachana-theme'),
        'priority' => 30,
    ));

    $wp_customize->add_setting('nav_icons_label', array(
        'default' => 'Navigation Icons',
        'transport' => 'refresh',
    ));

    $wp_customize->add_control('nav_icons_label', array(
        'label' => __('', 'rachana-theme'),
        'section' => 'nav_icons',
        'type' => 'text',
        'settings' => 'nav_icons_label',
        'priority' => 1,
    ));

    $priority = 2;
    $order = 1;
    foreach ($icons as $icon => $bs_class) {
        $wp_customize->add_setting("nav_icon_{$icon}", array(
            'default' => '',
            'transport' => 'refresh',
        ));

        $wp_customize->add_control("nav_icon_{$icon}", array(
            'label' => __(ucfirst($icon) . " link", 'custom-nav-icons'),
            'section' => 'nav_icons',
            'type' => 'url',
            'settings' => "nav_icon_{$icon}",
            'priority' => $priority,
        ));

        $wp_customize->add_setting("show_nav_icon_{$icon}", array(
            'default' => true,
            'transport' => 'refresh',
        ));


        $wp_customize->add_setting("icon_order_{$icon}", array(
            'default' => $order,
            'transport' => 'refresh',
        ));

        $wp_customize->add_control("icon_order_{$icon}", array(
            'label' => __('Order ' . $icon . ' Icon', 'custom-nav-icons'),
            'section' => 'nav_icons',
            'type' => 'number',
            'settings' => "icon_order_{$icon}",
            'priority' => $priority + 1,
        ));
        $wp_customize->add_control("show_nav_icon_{$icon}", array(
            'label' => __('Display ' . $icon . ' Icon', 'custom-nav-icons'),
            'section' => 'nav_icons',
            'type' => 'checkbox',
            'settings' => "show_nav_icon_{$icon}",
            'priority' => $priority + 2,
        ));


        $priority += 3;
        $order++;
    }
}
