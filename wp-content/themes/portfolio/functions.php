<?php
//***chargement des styles et scripts */
function portfolio_register_assets()
{
    wp_enqueue_style('theme-style', get_template_directory_uri() . '/style.css', [], '1.0.0', 'all');
    wp_enqueue_style('portfolio-style', get_template_directory_uri() . '/assets/css/theme.css', [], filemtime(get_stylesheet_directory() . '/assets/css/theme.css'), 'all');
    wp_enqueue_style('fontAwesome-style', get_template_directory_uri() . '/assets/css/all.css', ['theme-style'], '6.5.1', 'all');
    wp_enqueue_script('fontAwesome-script', get_template_directory_uri() . '/assets/js/all.js', ['jquery', 'portfolio-script'], '6.5.1', true);
    wp_enqueue_script('portfolio-script', get_template_directory_uri() . '/assets/js/scriptPortfolio.js', [], '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'portfolio_register_assets'); // chargement des styles et scripts

//**supports theme */

function portfolio_supports() // fonction du theme supports
{
    add_theme_support('title-tag'); // affichage de la balise titre
    add_theme_support('menus'); // support des menus
    register_nav_menus(['header' => 'menu en-tete', 'footer' => 'menu pied de page']); // enregistrement des menus en-tete et pied de page
    add_theme_support('post-thumbnails');
} // fin de la fonction du theme supports

add_action('after_setup_theme', 'portfolio_supports'); // supports du theme
