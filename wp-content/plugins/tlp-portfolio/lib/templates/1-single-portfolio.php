<?php

/**
 * Single Portfolio Template.
 *
 * @package RT_Portfolio
 */

// Do not allow directly accessing this file.
if (!defined('ABSPATH')) {
	exit('This script cannot be accessed directly.');
}

get_header();

global $post;

$designation       = wp_strip_all_tags(get_the_term_list($post->ID, TLPPortfolio()->taxonomies['category'], null, ','));
$settings          = get_option(TLPPortfolio()->options['settings']);
$short_description = get_post_meta($post->ID, 'short_description', true);
$client_name    = get_post_meta($id, 'client_name', true);
?>
<div class="tlp-portfolio-container tlp-single-detail">
	<h2 class="portfolio-title"><?php the_title(); ?></h2>
	<?php
	echo $client_name;
	?>
	<?php
	?> <div class="tlp-portfolio-detail-wrap">
		<?php if (has_post_thumbnail()) { ?>
			<div class="tlp-portfolio-image">
				<div class="portfolio-feature-img">
					<?php the_post_thumbnail('full'); ?>
				</div>
			</div>
		<?php } ?>
		<div class="portfolio-detail-desc">
			<div class="others-info">
				<?php TLPPortfolio()->print_html(TLPPortfolio()->singlePortfolioMeta($post->ID), true); ?>
			</div>
			<?php
			if (isset($settings['social_share_enable'])) {
				TLPPortfolio()->print_html(TLPPortfolio()->socialShare(get_the_permalink()), true);
			}
			?>
		</div>
	</div>
	<div class="tlp-portfolio-detail-wrap description-section">
		<div class="portfolio-details"><?php the_content(); ?></div>
	</div>
</div>

<?php get_footer(); ?>