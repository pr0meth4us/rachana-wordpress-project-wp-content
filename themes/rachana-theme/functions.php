<?php
//footer functions
include_once get_template_directory() . "/inc/footer/footer-customizer.php";
include_once get_template_directory() . "/inc/footer/other-links.php";
include_once get_template_directory() . "/inc/footer/contact.php";
include_once get_template_directory() . "/inc/footer/social-media.php";

//header functions
include_once get_template_directory() . "/inc/header/root-colors.php";
include_once get_template_directory() . "/inc/header/header-icons.php";
include_once get_template_directory() . "/inc/header/header-layouts.php";

//enqueue functions
require_once get_template_directory() . '/inc/queue/enqueue.php';
require_once get_template_directory() . '/inc/queue/dequeue.php';

//theme support functions
require_once get_template_directory() . '/inc/theme-supports/site-identity.php';

//walker functions
require_once get_template_directory() . '/inc/walker/footer-menu-walker.php';
require_once get_template_directory() . '/inc/walker/header-menu-walker.php';
