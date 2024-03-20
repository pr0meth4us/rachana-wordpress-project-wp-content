<?php
/**
 * @package MPTC_THEME
 */

get_header();
?>

<main class="container">

	<?php
	if ( have_posts() ) :

		$category_template = get_term_meta( get_queried_object_id(), 'cmb_category_template', true );


		/* Start the Loop */
		while ( have_posts() ) :
			the_post();

			/*
			* Include the Post-Type-specific template for the content.
			* If you want to override this in a child theme, then include a file
			* called content-___.php (where ___ is the Post Type name) and that will be used instead.
			*/
			
			get_template_part( 'template-parts/content', get_post_type() );

		endwhile;

		get_template_part( 'template-parts/components/pagination-link' );

	else :

		get_template_part( 'template-parts/content', 'none' );

	endif;
	?>

</main><!-- #main -->

<?php
get_footer();
