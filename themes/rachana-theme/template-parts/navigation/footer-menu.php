<?php
wp_nav_menu(array(
    'menu' => 'footernav',
    'container' => '',
    'theme_location' => 'footernav',
    'items_wrap' => '<ul id="" class="footer-menu-wrapper">%3$s</ul>',
    'walker' => new Footer_Nav_Walker()
));
