<?php

/**
 * @package Egov
 */

namespace EB2\Blocks;

use EB2\Base\BaseController;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class SlideShow extends BaseController
{
    public function register() {
        add_action( "init", array( $this, "registerBlock" ) );
    }

    public function registerBlock() {
        register_block_type(
            $this->plugin_name . '/slideshow', array(
                'style'         => $this->plugin_name . '-style',
                'editor_script' => $this->plugin_name . '-js',
                'editor_style'  => $this->plugin_name . '-editor-css',
                'render_callback' => array( $this, 'renderPostsBlock' ),
                'attributes' => array(
                    'client_id' => array(
                        'type' => 'string',
                        'default' => ''
                    ),
                    'adaptive_height' => array(
                        'type' => 'boolean',
                        'default' => false
                    ),
                    'mobile_first' => array(
                        'type' => 'boolean',
                        'default' => true
                    ),
                    'pause_on_dots_hover' => array(
                        'type' => 'boolean',
                        'default' => true
                    ),
                    'dots' => array(
                        'type' => 'boolean',
                        'default' => true
                    ),
                    'autoplay' => array(
                        'type' => 'boolean',
                        'default' => true
                    ),
                    'autoplay_speed' => array(
                        'type' => 'number',
                        'default' => 5000
                    ),
                    'arrows' => array(
                        'type' => 'boolean',
                        'default' => true
                    ),
                    'css_ease' => array(
                        'type' => 'string',
                        'default' => 'ease-in-out'
                    ),
                    'post_type' => array(
                        'type' => 'object',
                        'default' => array()
                    ),
                    'post_type_selected' => array(
                        'type' => 'string',
                        'default' => ''
                    ),
                    'taxonomy' => array(
                        'type' => 'object',
                        'default' => array()
                    ),
                    'taxonomy_selected' => array(
                        'type' => 'string',
                        'default' => ''
                    ),
                    'term' => array(
                        'type' => 'object',
                        'default' => array()
                    ),
                    'term_selected' => array(
                        'type' => 'object',
                        'default' => array()
                    ),
                    'posts_per_page' => array(
                        'type' => 'number',
                        'default' => 6
                    ),
                    'offset' => array(
                        'type' => 'number',
                        'default' => 0
                    ),
                    'order_by' => array(
                        'type' => 'string',
                        'default' => 'date'
                    ),
                    'order' => array(
                        'type' => 'string',
                        'default' => 'DESC'
                    ),
                    'enable_thumbnail' => array(
                        'type' => 'boolean',
                        'default' => true
                    ),
                    'thumbnail_size' => array(
                        'type' => 'string',
                        'default' => 'medium'
                    ),
                    'enable_title' => array(
                        'type' => 'boolean',
                        'default' => true
                    ),
                    'title_length' => array(
                        'type' => 'number',
                        'default' => 200
                    ),
                    'enable_excerpt' => array(
                        'type' => 'boolean',
                        'default' => false
                    ),
                    'excerpt_length' => array(
                        'type' => 'number',
                        'default' => 250
                    ),
                    'enable_meta' => array(
                        'type' => 'boolean',
                        'default' => true
                    ),
                    'enable_post_date' => array(
                        'type' => 'boolean',
                        'default' => true
                    ),
                    'enable_post_author' => array(
                        'type' => 'boolean',
                        'default' => false
                    ),
                    'enable_post_read_more' => array(
                        'type' => 'boolean',
                        'default' => false
                    ),
                    'enable_post_view_count' => array(
                        'type' => 'boolean',
                        'default' => false
                    ),
                    'enable_post_tag' => array(
                        'type' => 'boolean',
                        'default' => true
                    ),
                    'aspectratio_xs' => array(
                        'type' => 'string',
                        'default' => 'aspectratio-16-9'
                    ),
                    'aspectratio_sm' => array(
                        'type' => 'string',
                        'default' => ''
                    ),
                    'aspectratio_md' => array(
                        'type' => 'string',
                        'default' => ''
                    ),
                    'aspectratio_lg' => array(
                        'type' => 'string',
                        'default' => ''
                    ),
                    'aspectratio_xl' => array(
                        'type' => 'string',
                        'default' => ''
                    ),
                    'className' => array(
                        'type' => 'string',
                        'default' => ''
                    )
                )
            )
        );
    }

    public function renderPostsBlock( $attributes ) {
        ob_start();
        // echo '<pre>';
        // print_r( $attributes );
        // echo '</pre>';
        
        // Attributes for WP_Query class
        $args = array(
            'post_type' => $attributes['post_type_selected'],
            'tax_query' => array(
                array(
                    'taxonomy' => $attributes['taxonomy_selected'],
                    'field'    => 'id',
                    'terms'    => $attributes['term_selected']
                ),
            ),
            'orderby' => $attributes['order_by'],
            'order' => $attributes['order'],
            'posts_per_page' => $attributes['posts_per_page'],
            'offset' => $attributes['offset']
        );


        // The Query
        $the_query = new \WP_Query( $args );
        
        // The Loop
        if ( $the_query->have_posts() ) {
            
        


        ?>
        <section class="main-slideshow slick-slideshow" data-slick='{"adaptiveHeight": <?php echo $attributes['adaptive_height'] ? 'true' : 'false' ?>, "mobileFirst": <?php echo $attributes['mobile_first'] ? 'true' : 'false' ?>, "pauseOnDotsHover": <?php echo $attributes['pause_on_dots_hover'] ? 'true' : 'false' ?>, "dots": <?php echo $attributes['dots'] ? 'true' : 'false' ?>, "autoplay": <?php echo $attributes['autoplay'] ? 'true' : 'false' ?>, "autoplaySpeed": <?php echo $attributes['autoplay_speed'] ?>, "arrows": <?php echo $attributes['arrows'] ? 'true' : 'false' ?>, "cssEase": "<?php echo $attributes['css_ease'] ?>"}'>
        <?php
            while ( $the_query->have_posts() ) {
                $the_query->the_post();
                ?>
                <figure data-id="slide-<?php echo get_the_ID() ?>">
                    <?php if ( $attributes['enable_thumbnail'] ) { ?>
                    <div class="<?php echo $attributes['aspectratio_xs'] .' '. $attributes['aspectratio_sm'] .' '. $attributes['aspectratio_md'] .' '. $attributes['aspectratio_lg'] .' '. $attributes['aspectratio_xl'] ?> aspect-cover">
                        <div class="img" style="background-image: url(<?php the_post_thumbnail_url( $attributes['thumbnail_size'] ) ?>);"></div>
                    </div>
                    <?php } ?>
                    <figcaption>
                        <div class="caption-detail">
                            <?php if ( $attributes['enable_post_tag'] && $attributes['enable_meta'] ) { ?>
                            <div class="tag"><?php $term_list = get_the_term_list( get_the_ID(), array( 'post_tag', 'category') ); if( !is_wp_error($term_list) ) { echo $term_list; } ?></div>
                            <?php } ?>
                            <?php if ( $attributes['enable_title'] ) { ?>
                            <a href="<?php the_permalink() ?>">
                                <?php echo mb_strimwidth( get_the_title(), 0, $attributes['title_length'], '...') ?>
                            </a>
                            <?php } ?>
                            <?php if ( $attributes['enable_excerpt'] ) { ?>
                            <p><?php echo mb_strimwidth( get_the_excerpt(), 0, $attributes['excerpt_length'], '...') ?></p>
                            <?php } ?>
                            <?php if ( $attributes['enable_meta'] ) { ?>
                            <div class="publish">
                                <?php if ( $attributes['enable_post_date'] ) { ?>
                                <i class="icofont-clock-time"></i> <?php printf( esc_html__( '%s ago', 'egov' ), human_time_diff( get_the_time('U'), current_time('timestamp') ) )?> 
                                &nbsp;
                                <?php } ?>
                                <?php if ( $attributes['enable_post_author'] ) { ?>
                                <i class="icofont-user-alt-7"></i> <?php echo __( 'by ', 'egov' ); the_author_link() ?>
                                &nbsp;
                                <?php } ?>
                                <?php if ( $attributes['enable_post_view_count'] ) { ?>
                                <i class="icofont-eye-alt"></i> <?php echo $this->formatKMG( get_post_meta( get_the_ID(), 'post_view_count', true ) ) ?>
                                &nbsp;
                                <?php } ?>
                            </div>
                            <?php } ?>
                        </div>
                    </figcaption>
                </figure>
                <?php
            }
        ?>
        </section>
        <?php
        }
        // Restore original Post Data
        wp_reset_postdata();

        return ob_get_clean();
    }
}