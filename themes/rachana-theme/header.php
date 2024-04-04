<?php
/**
 * Contains the header
 */
require_once('inc/header/root-colors.php');
$custom_css = generate_custom_css();
$header_layout = get_theme_mod('header_layout', 'header-layout-1');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>
        <?php bloginfo('name'); ?> | <?php is_front_page() ? bloginfo('description') : wp_title(''); ?>
    </title>

    <style>
        <?php
        echo ":root {\n";
        echo $custom_css;
        echo "}\n";
        ?>
    </style>

</head>
<body id="page-top">
<?php if (has_nav_menu('mainnav')) { ?>
    <div class="sticky-top">
        <nav class="cgds navbar flex-column navbar-expand-lg" >
            <header <?php if (isset($header_layout)) { body_class('header-' . $header_layout); } else { body_class(' cgds navbar flex-column navbar-expand-lg header-layout-1'); } ?>>
                <div class="w-100 d-flex px-4 px-md-5 py-4 py-sm-6 py-md-3 py-lg-4 header-top">
                    <div class="logo-title">
                        <!--LOGO-->
                        <?php include 'template-parts/header/logo.php'; ?>
                        <!--TITLE-->
                        <div class="site-title-wrap">
                            <?php
                            $show_title = get_theme_mod('show_title', true);
                            if ($show_title) {
                                $site_title = html_entity_decode(get_bloginfo('name'), ENT_QUOTES, 'UTF-8');
                                echo '<h1 class="site-title">' . $site_title . '</h1>';
                            }
                            ?>
                        </div>
                    </div>
                </div>
                <div class="d-flex align-items-center me-5">
                    <!--FLAG-->
                    <div class="d-flex flag-icon text-center me-2 pr-3">
                        <a role="button" class="cgds btn" href=""><img
                                    src="<?php echo get_template_directory_uri() . "/assets/images/icons/Cambodia-flag.svg"; ?>" width="32px" height="24px" alt="Home">
                        </a>
                    </div>
                    <!--                    <nav class="social d-lg-block me-1">-->
                    <!--                        <ul id="menu-social-menu" class="d-flex">-->
                    <!--                            <li class="nav-icon-social">-->
                    <!--                                <span class="cgds-line"></span>-->
                    <!--                            </li>-->
                    <!--                        </ul>-->
                    <!--                    </nav>-->
                    <div class="mobile-toggle d-flex align-items-center d-lg-none">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNavExample1" aria-controls="navbarNavExample1" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <i class="bi bi-list"></i>
                        </button>
                    </div>
                </div>
            </header>
            <!--NAVIGATION BAR-->
            <div class="px-4 px-md-5">
                <?php include('template-parts/navigation/mainnav.php'); ?>
            </div>
        </nav>
    </div>
<?php } ?>

<?php wp_head(); ?>
