<?php
function menus(){

    $locations = array (
        'mainnav' => 'Main navigation',
        'sidenav' => 'Side navigation'
    );
    register_nav_menus($locations);
}

add_action('init', 'menus');
class Nav_Walker extends Walker_Nav_Menu {
    function start_lvl(&$output, $depth = 0, $args = null) {
        $output .= '<ul class="nav-items">';
    }

    function start_el(&$output, $item, $depth = 0, $args = null, $current_object_id = 0) {
        $output .= '<li id="menu-item-' . $item->ID . '" class="nav-item menu-item menu-item-type-' . $item->type . ' menu-item-object-' . $item->object . ' menu-item-' . $item->ID . '">';
        $output .= '<a href="' . esc_url($item->url) . '" class="nav-link">' . esc_html($item->title) . '</a>';
    }

    function end_el(&$output, $item, $depth = 0, $args = null) {
        $output .= '</li>';
    }

    function end_lvl(&$output, $depth = 0, $args = null) {
        $output .= '</ul>';
    }
}

class Side_Nav_Walker extends Walker_Nav_Menu {
    function start_lvl(&$output, $depth = 0, $args = null) {
        $output .= '<ul class="list-unstyled mb-0">';
    }

    function start_el(&$output, $item, $depth = 0, $args = null, $current_object_id = 0) {
        $output .= '<li class="sidenav-item">';

        $output .= '<a href="' . esc_url($item->url) . '" class="sgds btn inactive" role="button">' . esc_html($item->title) . '</a>';
    }

    function end_el(&$output, $item, $depth = 0, $args = null) {
        $output .= '</li>';
    }

    function end_lvl(&$output, $depth = 0, $args = null) {
        $output .= '</ul>';
    }
}