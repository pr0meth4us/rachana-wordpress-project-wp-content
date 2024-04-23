<?php
//footer functions
include_once get_template_directory() . "/inc/footer/footer-customizer.php";
include_once get_template_directory() . "/inc/footer/other-links.php";
include_once get_template_directory() . "/inc/footer/contact.php";
include_once get_template_directory() . "/inc/footer/social-media.php";
include_once get_template_directory() . "/inc/footer/validations.php";

//header functions
include_once get_template_directory() . "/inc/header/header-customizer.php";
include_once get_template_directory() . "/inc/header/root-colors.php";
include_once get_template_directory() . "/inc/header/header-icons.php";
include_once get_template_directory() . "/inc/header/header-layouts.php";

//enqueue functions
require_once get_template_directory() . '/inc/queue/customizer/enqueue.php';
require_once get_template_directory() . '/inc/queue/theme/enqueue.php';
require_once get_template_directory() . '/inc/queue/theme/dequeue.php';


//theme support functions
require_once get_template_directory() . '/inc/theme-supports/site-identity.php';

//walker functions
require_once get_template_directory() . '/inc/walker/footer-menu-walker.php';
require_once get_template_directory() . '/inc/walker/header-menu-walker.php';

//logo
include_once get_template_directory() . "/inc/logo.php";

add_filter( 'show_admin_bar', '__return_true');