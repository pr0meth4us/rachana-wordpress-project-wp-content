<?php

/**
 * @package Egov
 */

namespace EB2\Base;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Deactivate
{
    public static function deactivate() {
    
        flush_rewrite_rules();

    }
}