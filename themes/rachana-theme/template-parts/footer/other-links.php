<?php
$footer_third_column_links = get_theme_mod( 'footer_third_column_links', array() );
if ( ! empty( $footer_third_column_links ) ) :
    ?>
    <ul class="links">
        <?php foreach ( $footer_third_column_links as $link ) : ?>
            <li><a href="<?php echo esc_url( $link['url'] ); ?>" target="_blank" rel="noopener noreferrer"><?php echo esc_html( $link['label'] ); ?></a></li>
        <?php endforeach; ?>
    </ul>
<?php endif; ?>