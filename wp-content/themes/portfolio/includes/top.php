<?php
//Création du lien pour le bouton retour en haut
function wppln_back_to_top()
{
    echo '<a id="totop" href="#"><img src="wp-content\themes\portfolio\assets\images\icons8-chevron-carré-haut-50.png" class="chevron__up" alt="icons8-chevron-carré-haut-50"></a>';
}
add_action('wp_footer', 'wppln_back_to_top');
// CSS de notre bouton "retour en haut"

function wppln_back_to_top_style()
{
    echo '<style type="text/css">
        #totop {
            position: fixed;
            right: 30px;
            bottom: 5px;
            display: none;
            outline: none;
        }
    </style>';
}
add_action('wp_head', 'wppln_back_to_top_style');

function wppln_back_to_top_script()
{
    echo '<script type="text/javascript">
        jQuery(document).ready(function($){
            $(window).scroll(function () {
                if ( $(this).scrollTop() > 400 )
                    $("#totop").fadeIn();
                else
                    $("#totop").fadeOut();
            });
 
            $("#totop").click(function () {
                $("body,html").animate({ scrollTop: 0 }, 800 );
                return false;
            });
        });
    </script>';
}
add_action('wp_footer', 'wppln_back_to_top_script');
