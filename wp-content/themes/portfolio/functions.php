<?php
//***chargement des styles et scripts */
function portfolio_register_assets()
{
    wp_enqueue_style('theme-style', get_template_directory_uri() . '/style.css', [], filemtime(get_stylesheet_directory() . '/style.css'), 'all');
}
add_action('wp_enqueue_scripts', 'portfolio_register_assets'); // chargement des styles et scripts

//**supports theme */

function portfolio_supports() // fonction du theme supports
{
    add_theme_support('title-tag'); // affichage de la balise titre
    add_theme_support('menus'); // support des menus
    register_nav_menus(['header' => 'menu en-tete', 'footer' => 'menu pied de page']); // enregistrement des menus en-tete et pied de page
} // fin de la fonction du theme supports

add_action('after_setup_theme', 'portfolio_supports'); // supports du theme
