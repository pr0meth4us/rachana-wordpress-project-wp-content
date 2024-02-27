<?php

function register_navbar_color_setting( $wp_customize ) {

	$wp_customize->add_setting( 'navbar_bg_color', array(
		'default' => '#fff',
		'transport' => 'refresh',
	) );

}
add_action( 'customize_register', 'register_navbar_color_setting' );

function register_navbar_color_control( $wp_customize ) {

	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'navbar_bg_color', array(
		'label' => __( 'Navbar Background Color', 'theme_text_domain' ),
		'section' => 'colors',
		'settings' => 'navbar_bg_color',
	) ) );

}
add_action( 'customize_register', 'register_navbar_color_control' );