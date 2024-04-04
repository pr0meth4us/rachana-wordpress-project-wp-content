<ul class="links">
    <?php if (get_theme_mod('location_label') && get_theme_mod('location_link')): ?>
        <li>
            <a class="d-flex flex-nowrap" href="<?php echo esc_url(get_theme_mod('location_link')); ?>">
                <i class="bi bi-geo-alt-fill d-flex"></i>
                <div class="text-link lh-1">
                    Location: <?php echo esc_html(get_theme_mod('location_label')); ?>
                </div>
            </a>
        </li>
    <?php endif; ?>

    <?php if (get_theme_mod('email_link')): ?>
        <li>
            <a class="d-flex flex-nowrap" href="mailto:<?php echo esc_url(get_theme_mod('email_link')); ?>" rel="noopener noreferrer">
                <i class="bi bi-envelope-fill"></i>
                <div class="text-link lh-1">
                    Email: <?php echo esc_html(get_theme_mod('email_link')); ?>
                </div>
            </a>
        </li>
    <?php endif; ?>

    <?php if (get_theme_mod('phone_label')): ?>
        <li>
            <a class="d-flex flex-nowrap" href="<?php echo esc_url(get_theme_mod('phone_link')); ?>">
                <i class="bi bi-phone-fill"></i>
                <div class="text-link lh-1">
                    Tel: <?php echo esc_html(get_theme_mod('phone_label')); ?>
                </div>
            </a>
        </li>
    <?php endif; ?>
</ul>

