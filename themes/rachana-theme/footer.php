<?php
/**
 * Contains footer
 */
?>

<footer class="cgds footer">
    <section class="footer-top">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6 logo-container">
                    <div class="widget flex-column">
                        <?php
                        if(function_exists('the_custom_logo')){
                            $custom_logo_id = get_theme_mod('custom_logo');
                            $logo = wp_get_attachment_image_src($custom_logo_id);
                        }?>
                        <div class="navbar-brand logo">
                            <img src="<?php echo $logo[0] ?>" style="width: 200px" alt="logo">
                        </div>
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
                    <div class="title h3">បញ្ជាប់រហ័ស</div>
                    <?php
                    include 'template-parts/navigation/footer-menu.php';
                    ?>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="title h3">
                        ទំនាក់ទំនង
                    </div>
                    <?php include 'template-parts/footer/contacts.php'?>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="title h3">បញ្ជាប់ផ្សេងៗ</div>
                    <ul class="links">
                        <li><a href="https://mptc.gov.kh/" target="_blank" rel="noopener noreferrer">ក្រសួងប្រៃសណីយ៍និងទូរគមនាគមន៍</a></li>
                        <li><a href="https://dgc.gov.kh/" target="_blank" rel="noopener noreferrer">គណៈកម្មាធិការរដ្ឋាភិបាលឌីជីថល</a></li>
                        <li><a href="https://github.com/DGTDept/Rachana" target="_blank" rel="noopener noreferrer">Github របស់ក្រុមការងារ​ រចនា</a></li>
                    </ul>
                </div>
            </div>
    </section>
    <section class="footer-bottom">
        <div class="container-fluid">
            <div class="row footer-copyrights">
                <div class="col">
                    <div class="d-flex justify-content-lg-start text-start">
                        <?php
                        $site_title = html_entity_decode(get_bloginfo('name'), ENT_QUOTES, 'UTF-8');
                        $current_year = date('Y');
                        echo $site_title . ' © ' . $current_year . ' រក្សាសិទ្ធិគ្រប់យ៉ាង';
                        ?>

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