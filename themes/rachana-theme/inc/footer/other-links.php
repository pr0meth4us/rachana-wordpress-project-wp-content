<?php
/**
 * Register footer third column settings in the Customizer.
 *
 * @param WP_Customize_Manager $wp_customize The Customizer object.
 * @param string $section_id The section ID to add the settings to.
 */
function register_footer_third_column_settings($wp_customize, $section_id)
{
    $wp_customize->add_setting('footer_third_column_label', array(
        'default' => 'Add some more necessary links',
        'transport' => 'refresh',
    ));

    $wp_customize->add_control('footer_third_column_label', array(
        'label' => __('', 'rachana-theme'),
        'section' => $section_id,
        'type' => 'text',
        'settings' => 'footer_third_column_label',
        'priority' => 10,
        'input_attrs' => array(
            'style' => 'font-size: 2em; margin-bottom: 10px; margin-top: 40px;',
        ),
    ));

    $wp_customize->add_setting('footer_third_column_links', array(
        'default' => '',
        'sanitize_callback' => 'theme_slug_sanitize_footer_third_column_links',
    ));

    $wp_customize->add_control('footer_third_column_links_control', array(
        'label' => __('Add Custom Links', 'rachana-theme'),
        'description' => __('Add links and labels in the format: Label 1|URL 1, Label 2|URL 2, ...', 'rachana-theme'),
        'section' => $section_id,
        'type' => 'textarea',
        'settings' => 'footer_third_column_links',
        'priority' => 15,
        'input_attrs' => array(
            'placeholder' => __('label 1|www.url1.com, label 2|www.url2.com, ...', 'rachana-theme'),
        ),
    ));
}

function theme_slug_sanitize_footer_third_column_links($links)
{
    $sanitized_links = array();
    $links_array = explode(',', $links);

    foreach ($links_array as $link) {
        $link_parts = explode('|', $link);

        if (count($link_parts) == 2) {
            $label = trim($link_parts[0]);
            $url = esc_url_raw(trim($link_parts[1]));

            if (!empty($label) && !empty($url)) {
                $sanitized_links[] = array(
                    'label' => sanitize_text_field($label),
                    'url' => $url,
                );
            }
        }
    }

    return $sanitized_links;
}