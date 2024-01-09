<?php
// ================fonction post type======================//

function portfolio_register_custom_post_types()
{
    $labels =
        [
            'menu_name' => __('Portfolio', 'portfolio'),
            'name_admin_bar' => __('Portfolio', 'portfolio'),
            'add_new_item' => __('Ajouter une nouvelle réalisation', 'portfolio'),
            'new_item' => __('Nouvelle réalisation', 'portfolio'),
            'edit_item' => __('Modifier la réalisation', 'portfolio'),
            'filter_items_list'        => __('Filter Announcement list', 'TEXTDOMAINHERE'),
        ];
    $args =
        [
            'label' => __('Portfolio', 'portfolio'),
            'description'       => __('portfolio', 'portfolio'),
            'labels'            => $labels,
            'supports'          => ['title', 'editor', 'author', 'page-attributes', 'thumbnail', 'excerpt',],
            'taxonomies'         => array('category', 'post_tag', 'type'),
            'hierarchical'      => false,
            'public'            => true,
            'show_ui'           => true,
            'show_in_menu'      => true,
            'menu_position'     => 40,
            'show_in_admin_bar' => true,
            'show_in_nav_menus' => true,
            'can_export'        => true,
            'has_archive'       => true,
            'exclude_from_search'   => false,
            'publicly_queryable'  => true,
            'capability_type'   => 'post',
            'rewrite'           => ['sleug' => 'portfolio'],
            'menu_icon'  => 'dashicons-images-alt2',
        ];
    register_post_type('portfolio', $args);
} // fin de la fonction post type

add_action('init', 'portfolio_register_custom_post_types', 11); // enregistrement de custom post type "photos"

//=============shortcode portfolio=================//
function portfolio_shortcode($atts)
{
    ob_start();
    $args = [
        'post_type' => 'portfolio',
        'posts_per_page' => -1,
        'order' => 'ASC',
    ];
    $query = new WP_Query($args);
    if ($query->have_posts()) :
        while ($query->have_posts()) : $query->the_post();

?>
            <div>

                <?php
                the_title();
                the_content();

                ?>
            </div>
<?php
        endwhile;
        wp_reset_postdata();
        $output = ob_get_clean();
        return $output;
    endif;
}
add_shortcode('portfolio', 'portfolio_shortcode');
