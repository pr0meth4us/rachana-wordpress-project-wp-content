<?php

function theme_customizer_sections($wp_customize): void {
	$wp_customize->add_section('social_media_section', array(
		'title'    => __('Social Media', 'theme_text_domain'),
		'priority' => 30,
	));

	$social_media_platforms = array(
		'facebook' => 'Facebook',
		'linkedIn' => 'LinkedIn',
		'telegram' => 'Telegram',
		'tiktok'   => 'TikTok',
		'youtube'  => 'YouTube',
		'x'  => 'X',
	);

	foreach ($social_media_platforms as $platform_slug => $platform_name) {
		$wp_customize->add_setting($platform_slug . '_link', array(
			'default'   => '',
			'transport' => 'refresh',
		));

		$wp_customize->add_control($platform_slug . '_link', array(
			'label'    => __($platform_name . ' Link', 'theme_text_domain'),
			'section'  => 'social_media_section',
			'type'     => 'text',
		));
	}
}

add_action('customize_register', 'theme_customizer_sections');
