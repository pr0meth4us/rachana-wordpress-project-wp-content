<?php
/**
 * Contains footer
 */
?>

<footer class="cgds footer">
    <section class="footer-top">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="widget flex-column">
	                    <?php
	                    if(function_exists('the_custom_logo')){
		                    $custom_logo_id = get_theme_mod('custom_logo');
		                    $logo = wp_get_attachment_image_src($custom_logo_id);
	                    }?>
                        <div class="logo">
                            <img src="<?php echo $logo[0] ?>" style="width: 200px" alt="logo">
                        </div>
                        <div class="social-icon">
                            <ul>
                                <li>
	                                <?php
	                                $social_media_platforms = array(
		                                'facebook' => 'Facebook',
                                        'linkedIn' => 'LinkedIn',
                                        'telegram' => 'Telegram',
                                        'tiktok'   => 'TikTok',
		                                'youtube'  => 'YouTube',
		                                'x'  => 'X',
	                                );
	                                foreach ($social_media_platforms as $platform_slug => $platform_name) {
		                                $link = esc_url(get_theme_mod($platform_slug . '_link'));
		                                if ($link) :
			                                ?>
                                            <a href="<?php echo $link; ?>">
                                                <img src="<?php echo get_template_directory_uri() . "/assets/images/icons/{$platform_name}.svg"; ?>" alt="<?php echo strtolower($platform_name) . '-icon'; ?>">
                                            </a>
		                                <?php
		                                endif;
	                                }
	                                ?>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="title">
                        ជួរទី១
                    </div>
                    <ul class="links">
                        <li><a href="">អំពីយើង</a></li>
                        <li><a href="">អក្សរនេះសម្រាប់មើលតេស្ត</a></li>
                        <li><a href="">តេស្ត</a></li>
                        <li><a href="">តេស្ត</a></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="title">
                        ជួរទី២
                    </div>
                    <ul class="links">
                        <li><a href="">អំពីយើង</a></li>
                        <li><a href="">អក្សរនេះសម្រាប់មើលតេស្ត</a></li>
                        <li><a href="">តេស្ត</a></li>
                        <li><a href="">តេស្ត</a></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="title">
                        ជួរទី៣
                    </div>
                    <ul class="links">
                        <li><a href="">អំពីយើង</a></li>
                        <li><a href="">អក្សរនេះសម្រាប់មើលតេស្ត</a></li>
                        <li><a href="">តេស្ត</a></li>
                        <li><a href="">តេស្ត</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section class="footer-bottom">
        <div class="container-fluid">
            <div class="row footer-copyrights">
                <div class="col">
                    <div class="d-flex justify-content-lg-start text-start">
                        DGC © 2023 ~ រក្សាសិទ្ធិដោយគណៈកម្មាធិការរដ្ឋាភិបាលឌីជីថល
                    </div>
                </div>
                <div class="col">
                    <dev class="d-flex justify-content-lg-end text-end">
                        <ul>
                            <li><a href="" target="_blank"
                                   rel="noopener noreferrer">រាយការណ៍ពីភាពខ្វះខាត</a></li>
                            <li><a href="">ឯកជនភាព</a></li>
                            <li><a href="">លក្ខខណ្ឌនៃប្រើប្រាស់</a></li>
                        </ul>
                    </dev>
                </div>
            </div>
        </div>
    </section>
</footer>


<?php wp_footer() ?>
</body>
</html>

