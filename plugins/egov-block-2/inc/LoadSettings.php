<?php

/**
 * @package Egov
 */

namespace EB2;

use EB2\Base\BaseController;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class LoadSettings extends BaseController
{
    public function register() {
        add_action( "init", array( $this, "loadTextDomain" ) );
        add_filter( 'block_categories', array( $this, "registerBlockCategory" ), 10, 2 );
    }

    public function loadTextDomain() {
        load_plugin_textdomain( 'egov', FALSE, $this->plugin. '/languages/' );
        wp_set_script_translations( $this->plugin_name, 'egov', $this->plugin_path . 'languages' );
    }

    public function registerBlockCategory( $categories ) {
        foreach( $categories as $item ) {
            if( $item['slug'] == $this->plugin_name ) {
                return $categories;
            }
        }
        return array_merge(
            $categories,
            array(
                array(
                    'slug' => $this->plugin_name,
                    'title' => __( 'Egov Block 2', 'egov' ),
                    'icon'  => '',
                ),
            )
        );
    }
}