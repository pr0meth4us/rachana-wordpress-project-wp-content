<?php
/**
 * Contains the header
 */
?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <?php wp_head() ?>
</head>
<body id="page-top">

<div style="height: 300px ;" class="overflow-auto">
    <nav class="cgds navbar flex-column navbar-expand-lg" style="background-color: <?php echo get_theme_mod( 'navbar_bg_color', '#fff' );?>">
        <header class="container d-flex flex-nowrap p-0">
            <div class="w-100 d-flex align-items-center justify-content-between px-4 px-md-5 py-4 py-sm-6 py-md-3 py-lg-4">
	            <?php
	            if(function_exists('the_custom_logo')){
		            $custom_logo_id = get_theme_mod('custom_logo');
		            $logo = wp_get_attachment_image_src($custom_logo_id);
	            }?>
                <a class="navbar-brand d-flex justify-content-start" href="#">
                    <img class="img-fluid" src="<?php echo $logo[0] ?>" alt="Home">
                </a>
            </div>
            <div class="d-flex align-items-center me-5">
                <nav class="social d-flex me-3">
                    <ul id="menu-social-menu" class="d-flex">
                        <li class="nav-icon-social">
                            <a class="nav-link" aria-current="page" href="">
                                <i class="bi bi-github" target="_blank" style="line-height: 1;"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div class="d-flex flag-icon text-center me-2">
                    <a role="button" class="cgds btn" href=""><img
                                src="/assets/uncompressed_images/cambodia-flag-icon.svg" width="32px" height="24px" alt="Home">
                    </a>
                </div>
                <nav class="social d-lg-block me-1">
                    <ul id="menu-social-menu" class="d-flex">
                        <li class="nav-icon-social">
                            <span class="cgds-line"></span>
                        </li>
                    </ul>
                </nav>
                <ul class="navbar-nav">
                    <li class="nav-item align-self-center">
                        <a class="cgds btn-gt" aria-current="page" href="">ចូលគណនី</a>
                    </li>
                </ul>
                <div class="mobile-toggle d-flex align-items-center d-lg-none">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavExample1" aria-controls="navbarNavExample1" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <i class="bi bi-list"></i>
                    </button>
                </div>
            </div>
        </header>
        <div class="px-4 px-md-5">
            <div class="collapse navbar-collapse px-4 px-md-5" id="navbarNavExample1">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">ទំព័រដើម</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="">តំណរភ្ជាប់</a>
                    </li>
                    <li class="nav-item cgds dropdown">
                        <a class="nav-link cgds dropdown-toggle" href="" id="navbarDropdown" role="button"
                           data-bs-toggle="dropdown" aria-expanded="false">
                            ទម្លាក់ចុះ <i class="bi bi-chevron-down"></i>
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="">សកម្មភាព</a></li>
                            <li><a class="dropdown-item" href="">សកម្មភាពមួយទៀត</a></li>
                            <li><a class="dropdown-item" href="">អ្វីមួយ</a></li>
                            <div class="dropdown-divider"></div>
                            <li><a class="dropdown-item" href="">តំណភ្ជាប់ដាច់ដោយឡែក</a></li>
                        </ul>
                    </li>
                    <li class="nav-item cgds dropdown has-megamenu">
                        <a class="nav-link cgds dropdown-toggle" href="#" id="megamenu" role="button"
                           data-bs-toggle="dropdown" aria-expanded="false">
                            បណ្តុំបញ្ជី<i class="bi bi-chevron-down"></i>
                        </a>
                        <div class="dropdown-menu megamenu p-3" aria-labelledby="megamenu">
                            <div class="d-flex justify-content-start">
                                <div>
                                    <b>សហការបង្កើតដំណោះស្រាយឌីជីថលប្រកបដោយភាពច្នៃប្រឌិតជាមួយរដ្ឋាភិបាល</b>
                                    <p>ស្វែងរកព្រឹត្តិការណ៍ ប្លុក បច្ចេកវិទ្យាប្រភពបើកចំហ និងឱកាសសហការផ្សេងទៀត។</p>
                                </div>
                                <div>
                                    <a class="dropdown-item" href="">លក្ខណៈពិសេស</a>
                                    <a class="dropdown-item" href="">លក្ខណៈពិសេស</a>
                                    <a class="dropdown-item" href="">លក្ខណៈពិសេស</a>
                                </div>
                                <div>
                                    <a class="dropdown-item" href="#">លក្ខណៈពិសេស</a>
                                    <a class="dropdown-item" href="#">លក្ខណៈពិសេស</a>
                                    <a class="dropdown-item" href="#">លក្ខណៈពិសេស</a>
                                </div>
                                <div>
                                    <a class="dropdown-item" href="#">លក្ខណៈពិសេស</a>
                                    <a class="dropdown-item" href="#">លក្ខណៈពិសេស</a>
                                    <a class="dropdown-item" href="#">លក្ខណៈពិសេស</a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="search-bar d-flex align-items-center ms-auto">
                    <form class="w-100" action="">
                        <div class="search-wrapper d-flex ps-2">
                            <input type="text">
                            <button>
                                <i class="bi bi-search" target="_blank"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </nav>
</div>


<div style="height: 300px" class="overflow-auto">
    <nav class="sgds navbar navbar-expand-lg">
        <?php
        if(function_exists('the_custom_logo')){
            $custom_logo_id = get_theme_mod('custom_logo');
            $logo = wp_get_attachment_image_src($custom_logo_id);
        }?>
        <a class="navbar-brand" href="#">
            <img src="<?php echo $logo[0] ?>" alt="Home" height="60">
        </a>
        <?php if(has_nav_menu('mainnav')){
            include('mainnav.php');
        }?>
    </nav>
</div>
<?php if(has_nav_menu('sidenav')){
    include('sidenav.php');
}?>

