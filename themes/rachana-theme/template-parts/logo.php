<?php
    if (function_exists('the_custom_logo')) {
        $custom_logo_id = get_theme_mod('custom_logo');
        $logo = wp_get_attachment_image_src($custom_logo_id);
    }

    $logo_width = get_theme_mod('logo_width', 110); ?>

<a class="navbar-brand d-flex" href="<?php echo esc_url(home_url('/')); ?>">
    <?php if ($logo) { ?>
        <img class="img-fluid" src="<?php echo esc_url($logo[0]); ?>" style="width: <?php echo $logo_width . 'px'; ?>;">
    <?php } ?>
</a>
