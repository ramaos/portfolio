<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" contente="site portfolio Amar BENAMAR" />
    <?php wp_head(); ?>
</head>

<body>
    <header class="amar__header">
        <nav class="navbar">
            <a href="<?php echo esc_url(home_url()); ?>">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo-Amar-BENAMAR.png" class="navbar__logo" alt="logo Amar BENAMAR">
            </a>
            <?php wp_nav_menu([
                'theme_location' => 'header',
                'container' => false,
                'menu_class' => 'navbar__nav'
            ]);
            ?>
        </nav>

    </header>
    <main class="content__main">