<?php

/**
 * @package Egov
 */

namespace EB2\Base;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Activate
{
    public static function activate() {
    
        flush_rewrite_rules();

    }
}