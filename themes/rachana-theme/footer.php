<?php wp_footer(); ?>
<footer class="cgds footer">
    <section class="footer-contact-info">
        <?php include 'template-parts/footer/contacts.php' ?>
    </section>
    <section class="footer-container">
        <div class="footer-top">

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
                <div class="col">
                    <?php
                    include 'template-parts/navigation/footer-menu.php';
                    ?>

                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="row footer-copyrights">
                <!-- fix: static text fix later -->
                <div class="d-flex justify-content-lg-start text-start">
                    រក្សាសិទ្ធិគ្រប់យ៉ាងដោយ៖ រដ្ឋាបាលខេត្តព្រះសីហនុ ~ © 2024 Copyright by: Sihanoukville Administration
                </div>
            </div>
        </div>
    </section>
</footer>