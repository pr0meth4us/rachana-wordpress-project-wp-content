<?php
/**
 *
 * @param WP_Customize_Manager $wp_customize
 * @param string               $section_id
 */
function register_links_settings($wp_customize, $section_id) {
    $wp_customize->add_setting('links_title', array(
        'default' => 'Useful Links',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('links_title', array(
        'label' => __('Links Title', 'rachana-theme'),
        'section' => $section_id,
        'type' => 'text',
        'priority' => 15,
    ));

    $wp_customize->add_setting('links', array(
        'default' => '',
        'sanitize_callback' => 'rachana_links_sanitize',
        'transport' => 'refresh',

    ));
    $wp_customize->add_control('links', array(
        'label' => __('Links', 'rachana-theme'),
        'section' => $section_id,
        'type' => 'textarea',
        'description' => __('Enter a list of links, each on a new line. Each link should be in the format: Label|URL', 'rachana-theme'),
        'priority' => 16,
        'input_attrs' => array(
            'placeholder' => __('ក្រសួងប្រៃសណីយ៍និងទូរគមនាគមន៍|https://mptc.gov.kh/ &nsbp; គណៈកម្មាធិការរដ្ឋាភិបាលឌីជីថល|https://dgc.gov.kh/', 'rachana-theme'),
        ),
    ));

}

/**
 *
 * @param string $value
 * @return string
 */
function rachana_links_sanitize($value) {
    // Split the input value by newline characters to get each link entry
    $links = explode("\n", $value);
    $sanitized_links = array();
    foreach ($links as $link) {
        // Trim whitespace from each line to ensure accurate splitting
        $link = trim($link);
        $link_parts = explode('|', $link, 2);
        if (count($link_parts) === 2) {
            $label = sanitize_text_field($link_parts[0]);
            $url = esc_url_raw($link_parts[1]);
            $sanitized_links[] = array(
                'label' => $label,
                'url' => $url,
            );
        }
    }
    return json_encode($sanitized_links);
}

