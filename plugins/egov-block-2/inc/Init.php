<?php

/**
 * @package Egov
 */

namespace EB2;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

final class Init
{
    function __construct() {

    }

    public static function getServices() {
        return array(
            LoadSettings::class,
            RegisterAsset::class,
            Blocks\SlideShow::class,
            Blocks\SlideList::class,
            Blocks\Section::class,
            Blocks\ExchangeRate::class
        );
    }

    public static function registerServices() {
        foreach( self::getServices() as $class ) {
            $service = self::instantiate( $class );
            if( method_exists( $service, "register" ) ) {
                $service->register();
            }
        }
    }

    private static function instantiate( $class ) {
        $service = new $class();
        return $service;
    }
}