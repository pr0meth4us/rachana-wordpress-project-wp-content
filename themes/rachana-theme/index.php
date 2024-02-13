<?php
/**
 * Template Name: Your Template Name
 */
get_header();
?>

<article class="content px-3 py-5 p-md-5">
    fr bro idk
    <?php
    if (have_posts()):
        while (have_posts()):
            the_post();
            the_content();
            echo '<img class="container-fluid" alt="idk" src="' . esc_url(get_the_post_thumbnail_url()) . '">';
        endwhile;
    endif;
    ?>
</article>

<?php get_footer(); ?>
