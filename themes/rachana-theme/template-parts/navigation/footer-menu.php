<?php
$footer_menu = new Footer_Nav_Walker();
$menu_locations = get_nav_menu_locations();
$menu_id = $menu_locations['footer-menu'];

if ( $menu_id ) {
    echo $footer_menu->render_footer_menu( $menu_id );
}
?>