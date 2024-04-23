<?php
/**
 * Contains footer
 */
?>
<?php wp_footer(); ?>
<footer class="cgds footer">
    <section class="footer-top">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6 logo-container">
                    <div class="widget flex-column">
                        <?php
                        require_once('template-parts/logo.php');
                        display_logo('footer');
                        ?>
                        <div class="social-icon">
                            <ul>
                                <?php
                                require_once('template-parts/footer/social-media.php');
                                render_social_media_links();
                                ?>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6 col-sm-6">
                    <div class="title h3">
                        <?php echo get_theme_mod('footer_menu_title') ?>
                    </div>
                    <?php
                    include 'template-parts/navigation/footer-menu.php';
                    ?>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="title h3">
                        <?php echo get_theme_mod('contact_info_title') ?>
                    </div>
                    <?php include 'template-parts/footer/contacts.php'?>
                </div>
                <?php
                include 'template-parts/footer/other-links.php';
                ?>

            </div>
    </section>
    <section class="footer-bottom">
        <div class="container-fluid">
            <div class="row footer-copyrights">
                <div class="col">
                    <div class="d-flex justify-content-lg-start text-start">
                        DGC - Rachana © 2023 ~ © រក្សាសិទ្ធិគ្រប់យ៉ាងដោយគណៈកម្មាធិការរដ្ឋាភិបាលឌីជីថល
                    </div>
                </div>
                <div class="col">
                    <div class="d-flex justify-content-lg-end text-end">
                        <ul>
                            <li><a href="" target="_blank"
                                   rel="noopener noreferrer">រាយការណ៍ពីភាពខ្វះខាត</a></li>
                            <li><a href="">ឯកជនភាព</a></li>
                            <li><a href="">លក្ខខណ្ឌនៃប្រើប្រាស់</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</footer>