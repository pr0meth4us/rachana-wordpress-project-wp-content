<nav class="sidenav sgds list-unstyled open1">
    <?php
    wp_nav_menu(
        array(
            'menu' => 'sidenav',
            'container' => '',
            'theme_location' => 'sidenav',
            'items_wrap' => '<ul id="" class="list-unstyled mb-0">%3$s</ul>',
            'walker' => new Side_Nav_Walker()
        )
    );
    ?>
</nav>



