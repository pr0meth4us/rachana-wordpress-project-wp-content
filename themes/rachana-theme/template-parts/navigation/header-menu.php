<div class="collapse navbar-collapse" id="navbarNav">
    <?php
    wp_nav_menu(array(
        'menu' => 'mainnav',
        'container' => '',
        'theme_location' => 'mainnav',
        'items_wrap' => '<ul id="" class="navbar-nav">%3$s</ul>',
        'walker' => new Main_Nav_Walker()
    ));
    ?>
</div>