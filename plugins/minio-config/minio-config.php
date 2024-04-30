<?php
/*
  Plugin Name: Minio Offload Config
  Plugin URI: https://ams.com.kh
  Description: Boilerplate MU-plugin for custom actions and filters to run for a site instead of setting in WP-config.php
  Version: 0.1
  Author: Chann Chetra 
  Author URI: https://sovichetra.com
*/
// Define AS3CF_SETTINGS if not already defined
if ( ! defined( 'AS3CF_SETTINGS' ) ) {
    define( 'AS3CF_SETTINGS', serialize( array(
        'provider' => 'aws',
        'access-key-id' => 'ub3Mavt3KSDShryHxzzR',
        'secret-access-key' => 'arLybrQpaiEAqyiDfEa3RKLrbNjP50MR8H1tucm8',
    ) ) );
}

function minio_s3_client_args( $args ) {
    $args['endpoint'] = 'https://api-minio.cc.mptc.gov.kh';
//    $args['use_path_style_endpoint'] = true;
return $args;
}
add_filter( 'as3cf_aws_s3_client_args', 'minio_s3_client_args'  );

// Customizes the S3 URL domain for MinIO
add_filter( 'as3cf_aws_s3_url_domain', 'minio_s3_url_domain' , 10, 2 );
function minio_s3_url_domain( $domain, $bucket ) {
    return 'asset.cambodia.gov.kh/' . $bucket;
}
add_filter( 'as3cf_aws_s3_url_domain', 'minio_s3_url_domain', 10, 2 );
