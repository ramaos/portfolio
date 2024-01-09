<?php get_header(); ?>
<section class="header">
    <?php
    $args = [
        'post_type' => 'portfolio',
        'posts_per_page' => -1,
        'order' => 'ASC',
        'orderby' => 'rand',
    ];
    $query = new WP_Query($args);
    if ($query->have_posts()) :
    ?>
        <?php
        while ($query->have_posts()) :
            $query->the_post();
        ?>
            <a href="<?php the_permalink(); ?>">
                <h1 class="header__title animate__animated animate__zoomIn">PHOTOGRAPHE EVENT</h1>
                <?php the_post_thumbnail('header-image', ['class' => 'header__header']); ?>

            </a>
            <?php the_content(); ?>
    <?php
        endwhile;
    endif;

    wp_reset_postdata();

    ?>
</section>

<?php get_footer(); ?>