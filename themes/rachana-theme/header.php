<?php

/**
 * Contains the header
 */
require_once('inc/header/root-colors.php');
$custom_css = generate_custom_css();
$header_layout = get_theme_mod('header_layout');
?>
<!DOCTYPE html>
<html lang="en">
<?php wp_head(); ?>

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
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</head>

<body id="page-top">
    <?php if (has_nav_menu('mainnav')) { ?>
        <div class="sticky-top">
            <nav class="cgds navbar flex-column navbar-expand-lg">
                <header>
                    <div class="w-100 d-flex px-4 px-md-5 py-4 py-sm-6 py-md-3 py-lg-4 header-top">
                        <div class="logo-title">
                            <!--LOGO-->
                            <?php
                            require_once('template-parts/logo.php');
                            display_logo('header');
                            ?>
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
                    <div class="d-flex align-items-center">
                        <div class="d-flex align-items-center justify-content-between gap-2 me-5">
                            <?php
                            include get_template_directory() . '/template-parts/header/search-bar.php';
                            ?>

                            <?php if (function_exists('pll_the_languages')) : ?>
                                <span class="border-right" style="height: 20px;"></span>
                                <div class="dropdown dropdown-language color-gray-600">
                                    <?php
                                    $args = [
                                        'hide_if_empty' => 0,
                                        'raw' => 1
                                    ];
                                    ?>
                                    <?php foreach (pll_the_languages($args) as $key => $value) : ?>
                                        <?php if (pll_current_language() === $value['slug']) : ?>
                                            <div class="dropdown-active d-flex px-2 border rounded" id="dropdownLanguage" data-bs-toggle="dropdown" aria-expanded="false">
                                                <figure class="mb-0 text-center me-1 d-flex align-items-center gap-2">
                                                    <img class="mb-0" src="<?php echo get_stylesheet_directory_uri() ?>/assets/images/icons/<?php echo $value['slug'] ?>.png" width="auto" height="20px" alt="<?php echo $value['name'] ?>">
                                                    <figcaption class="text-white"><?php echo $value['name'] ?></figcaption>
                                                </figure>
                                            </div>
                                        <?php endif ?>
                                    <?php endforeach ?>
                                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownLanguage">
                                        <?php foreach (pll_the_languages($args) as $key => $value) : ?>
                                            <?php if (pll_current_language() != $value['slug']) : ?>
                                                <li>
                                                    <a class="dropdown-item" href="<?php echo $value['url'] ?>">
                                                        <figure class="mb-0 d-flex align-items-center">
                                                            <img class="me-1 lh-1" height="16" src="<?php echo get_stylesheet_directory_uri() ?>/assets/images/icons/<?php echo $value['slug'] ?>.png" alt="<?php echo $value['name'] ?>">
                                                            <figcaption><?php echo $value['name'] ?></figcaption>
                                                        </figure>
                                                    </a>
                                                </li>
                                            <?php endif ?>
                                        <?php endforeach ?>
                                    </ul>
                                </div>
                            <?php endif ?>
                            <!-- <div class="d-flex align-items-center">
                            <nav class="social d-flex me-3">
                                <?php
                                require_once('template-parts/header/icons.php');
                                render_nav_icons();
                                ?>
                            </nav>
                        </div>
                        <?php if ($header_layout === "layout-2") : ?>
                            <ul class="navbar-nav" style="display: block;">
                                <li class="nav-item align-self-center">
                                    <a class="cgds btn-gt" aria-current="page" href="">Sign In</a>
                                </li>
                            </ul>
                        <?php endif; ?>

                        <ul class="navbar-nav">
                            <li class="nav-item align-self-center">
                                <a class="cgds btn-gt" aria-current="page" href="">Sign In</a>
                            </li>
                        </ul> -->

                            <div class="mobile-toggle d-flex align-items-center d-lg-none">
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavExample1" aria-controls="navbarNavExample1" aria-expanded="false" aria-label="Toggle navigation">
                                    <i class="bi bi-list"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                <!--NAVIGATION BAR-->
                <div class="px-4 px-md-5">
                    <?php include('template-parts/navigation/header-menu.php'); ?>
                </div>
            </nav>
        </div>
    <?php } ?>

    <?php wp_head(); ?>