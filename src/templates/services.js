/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n';

const Services = {
	name: 'services',
	title: __( 'Services', 'blablablocks-slider-block' ),
	description: __(
		'A simple centered call-to-action for subscribing.',
		'blablablocks-slider-block'
	),
	content: `
            <!-- wp:group {"metadata":{"categories":["services"],"name":"Services","patternName":"assembler/services-2"},"align":"full","className":"alignfull is-style-default","style":{"spacing":{"margin":{"top":"0","bottom":"0"},"blockGap":"var:preset|spacing|30","padding":{"top":"var:preset|spacing|40","bottom":"var:preset|spacing|40","left":"var:preset|spacing|50","right":"var:preset|spacing|50"}}},"layout":{"type":"default"}} -->
				<div class="wp-block-group alignfull is-style-default" style="margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--40);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--40);padding-left:var(--wp--preset--spacing--50)"><!-- wp:heading {"align":"wide","style":{"layout":{"selfStretch":"fixed","flexSize":"100%"},"typography":{"fontStyle":"normal","fontWeight":"600"}}} -->
				<h2 class="wp-block-heading alignwide" style="font-style:normal;font-weight:600">Services</h2>
				<!-- /wp:heading -->

				<!-- wp:lubus/slider {"slidesPerView":{"desktop":3,"tablet":2,"mobile":1,"activeDevice":"tablet"},"pagination":false,"navigationColor":{"arrowColor":{"default":"#000000","hover":"#323232"},"backgroundColor":{"hover":""}},"navigationPadding":{},"navigationSize":"2.3rem","navigationOffset":{"top":"50%","bottom":"0px","left":"-6vw","right":"-6vw"},"navigationBorderRadius":"50%","align":"full","style":{"spacing":{"padding":{"top":"0px","bottom":"0px","left":"0px","right":"0px"}}}} -->
				<div style="padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;--navigation-arrow-color:#000000;--navigation-arrow-hover-color:#323232;--swiper-navigation-size:2.3rem;--navigation-border-radius:50%;--navigation-padding-top:0px;--navigation-padding-right:0px;--navigation-padding-bottom:0px;--navigation-padding-left:0px;--pagination-size:8px;--pagination-offset-top:auto;--pagination-offset-right:0px;--pagination-offset-bottom:8px;--pagination-offset-left:0px;--navigation-offset-top:50%;--navigation-offset-right:-6vw;--navigation-offset-bottom:0px;--navigation-offset-left:-6vw" class="wp-block-lubus-slider alignfull"><div class="swiper" data-swiper="{&quot;slidesPerView&quot;:{&quot;desktop&quot;:3,&quot;tablet&quot;:2,&quot;mobile&quot;:1,&quot;activeDevice&quot;:&quot;tablet&quot;},&quot;slidesSpacing&quot;:{&quot;desktop&quot;:30,&quot;tablet&quot;:20,&quot;mobile&quot;:10,&quot;activeDevice&quot;:&quot;desktop&quot;},&quot;speed&quot;:300,&quot;effects&quot;:&quot;slide&quot;,&quot;autoplay&quot;:false,&quot;delay&quot;:5000,&quot;navigation&quot;:true,&quot;pagination&quot;:false,&quot;loop&quot;:false,&quot;navigationColor&quot;:{&quot;arrowColor&quot;:{&quot;default&quot;:&quot;#000000&quot;,&quot;hover&quot;:&quot;#323232&quot;},&quot;backgroundColor&quot;:{&quot;hover&quot;:&quot;&quot;}},&quot;navigationPadding&quot;:{},&quot;navigationSize&quot;:&quot;2.3rem&quot;,&quot;navigationOffset&quot;:{&quot;top&quot;:&quot;50%&quot;,&quot;bottom&quot;:&quot;0px&quot;,&quot;left&quot;:&quot;-6vw&quot;,&quot;right&quot;:&quot;-6vw&quot;},&quot;navigationBorderRadius&quot;:&quot;50%&quot;,&quot;paginationSize&quot;:&quot;8px&quot;,&quot;paginationOffset&quot;:{&quot;top&quot;:&quot;auto&quot;,&quot;bottom&quot;:&quot;8px&quot;,&quot;left&quot;:&quot;0px&quot;,&quot;right&quot;:&quot;0px&quot;},&quot;align&quot;:&quot;full&quot;,&quot;style&quot;:{&quot;spacing&quot;:{&quot;padding&quot;:{&quot;top&quot;:&quot;0px&quot;,&quot;bottom&quot;:&quot;0px&quot;,&quot;left&quot;:&quot;0px&quot;,&quot;right&quot;:&quot;0px&quot;}}}}"><div class="swiper-wrapper"><!-- wp:lubus/slide -->
				<div class="wp-block-lubus-slide swiper-slide"><!-- wp:group {"style":{"spacing":{"blockGap":"42px"}},"layout":{"type":"flex","orientation":"vertical","flexWrap":"nowrap"}} -->
				<div class="wp-block-group"><!-- wp:image {"id":16531,"aspectRatio":"4/3","scale":"cover","sizeSlug":"large","linkDestination":"none","style":{"color":{"duotone":"unset"}}} -->
				<figure class="wp-block-image size-large"><img src="https://dotcompatterns.wordpress.com/wp-content/uploads/2024/09/2-1.jpg?w=717" alt="" class="wp-image-16531" style="aspect-ratio:4/3;object-fit:cover"/></figure>
				<!-- /wp:image -->

				<!-- wp:group {"style":{"spacing":{"blockGap":"24px"}},"layout":{"type":"flex","orientation":"vertical","flexWrap":"nowrap"}} -->
				<div class="wp-block-group"><!-- wp:heading {"level":3,"className":"is-service-name"} -->
				<h3 class="wp-block-heading is-service-name">Service 1</h3>
				<!-- /wp:heading -->

				<!-- wp:paragraph {"className":"is-service-description"} -->
				<p class="is-service-description">Navigating life's intricate fabric, choices unfold paths to the extraordinary, demanding creativity, curiosity, and courage for a truly fulfilling journey. </p>
				<!-- /wp:paragraph -->

				<!-- wp:buttons -->
				<div class="wp-block-buttons"><!-- wp:button {"className":"is-service-link"} -->
				<div class="wp-block-button is-service-link"><a class="wp-block-button__link wp-element-button">Learn more</a></div>
				<!-- /wp:button --></div>
				<!-- /wp:buttons --></div>
				<!-- /wp:group --></div>
				<!-- /wp:group --></div>
				<!-- /wp:lubus/slide -->

				<!-- wp:lubus/slide -->
				<div class="wp-block-lubus-slide swiper-slide"><!-- wp:group {"style":{"spacing":{"blockGap":"42px"}},"layout":{"type":"flex","orientation":"vertical","flexWrap":"nowrap"}} -->
				<div class="wp-block-group"><!-- wp:image {"id":16531,"aspectRatio":"4/3","scale":"cover","sizeSlug":"large","linkDestination":"none","style":{"color":{"duotone":"unset"}}} -->
				<figure class="wp-block-image size-large"><img src="https://dotcompatterns.wordpress.com/wp-content/uploads/2024/09/2-1.jpg?w=717" alt="" class="wp-image-16531" style="aspect-ratio:4/3;object-fit:cover"/></figure>
				<!-- /wp:image -->

				<!-- wp:group {"style":{"spacing":{"blockGap":"24px"}},"layout":{"type":"flex","orientation":"vertical","flexWrap":"nowrap"}} -->
				<div class="wp-block-group"><!-- wp:heading {"level":3,"className":"is-service-name"} -->
				<h3 class="wp-block-heading is-service-name">Service 2</h3>
				<!-- /wp:heading -->

				<!-- wp:paragraph {"className":"is-service-description"} -->
				<p class="is-service-description">Navigating life's intricate fabric, choices unfold paths to the extraordinary, demanding creativity, curiosity, and courage for a truly fulfilling journey. </p>
				<!-- /wp:paragraph -->

				<!-- wp:buttons -->
				<div class="wp-block-buttons"><!-- wp:button {"className":"is-service-link"} -->
				<div class="wp-block-button is-service-link"><a class="wp-block-button__link wp-element-button">Learn more</a></div>
				<!-- /wp:button --></div>
				<!-- /wp:buttons --></div>
				<!-- /wp:group --></div>
				<!-- /wp:group --></div>
				<!-- /wp:lubus/slide -->

				<!-- wp:lubus/slide -->
				<div class="wp-block-lubus-slide swiper-slide"><!-- wp:group {"style":{"spacing":{"blockGap":"42px"}},"layout":{"type":"flex","orientation":"vertical","flexWrap":"nowrap"}} -->
				<div class="wp-block-group"><!-- wp:image {"id":16531,"aspectRatio":"4/3","scale":"cover","sizeSlug":"large","linkDestination":"none","style":{"color":{"duotone":"unset"}}} -->
				<figure class="wp-block-image size-large"><img src="https://dotcompatterns.wordpress.com/wp-content/uploads/2024/09/2-1.jpg?w=717" alt="" class="wp-image-16531" style="aspect-ratio:4/3;object-fit:cover"/></figure>
				<!-- /wp:image -->

				<!-- wp:group {"style":{"spacing":{"blockGap":"24px"}},"layout":{"type":"flex","orientation":"vertical","flexWrap":"nowrap"}} -->
				<div class="wp-block-group"><!-- wp:heading {"level":3,"className":"is-service-name"} -->
				<h3 class="wp-block-heading is-service-name">Service 3</h3>
				<!-- /wp:heading -->

				<!-- wp:paragraph {"className":"is-service-description"} -->
				<p class="is-service-description">Navigating life's intricate fabric, choices unfold paths to the extraordinary, demanding creativity, curiosity, and courage for a truly fulfilling journey. </p>
				<!-- /wp:paragraph -->

				<!-- wp:buttons -->
				<div class="wp-block-buttons"><!-- wp:button {"className":"is-service-link"} -->
				<div class="wp-block-button is-service-link"><a class="wp-block-button__link wp-element-button">Learn more</a></div>
				<!-- /wp:button --></div>
				<!-- /wp:buttons --></div>
				<!-- /wp:group --></div>
				<!-- /wp:group --></div>
				<!-- /wp:lubus/slide -->

				<!-- wp:lubus/slide -->
				<div class="wp-block-lubus-slide swiper-slide"><!-- wp:group {"style":{"spacing":{"blockGap":"42px"}},"layout":{"type":"flex","orientation":"vertical","flexWrap":"nowrap"}} -->
				<div class="wp-block-group"><!-- wp:image {"id":16531,"aspectRatio":"4/3","scale":"cover","sizeSlug":"large","linkDestination":"none","style":{"color":{"duotone":"unset"}}} -->
				<figure class="wp-block-image size-large"><img src="https://dotcompatterns.wordpress.com/wp-content/uploads/2024/09/2-1.jpg?w=717" alt="" class="wp-image-16531" style="aspect-ratio:4/3;object-fit:cover"/></figure>
				<!-- /wp:image -->

				<!-- wp:group {"style":{"spacing":{"blockGap":"24px"}},"layout":{"type":"flex","orientation":"vertical","flexWrap":"nowrap"}} -->
				<div class="wp-block-group"><!-- wp:heading {"level":3,"className":"is-service-name"} -->
				<h3 class="wp-block-heading is-service-name">Service 4</h3>
				<!-- /wp:heading -->

				<!-- wp:paragraph {"className":"is-service-description"} -->
				<p class="is-service-description">Navigating life's intricate fabric, choices unfold paths to the extraordinary, demanding creativity, curiosity, and courage for a truly fulfilling journey. </p>
				<!-- /wp:paragraph -->

				<!-- wp:buttons -->
				<div class="wp-block-buttons"><!-- wp:button {"className":"is-service-link"} -->
				<div class="wp-block-button is-service-link"><a class="wp-block-button__link wp-element-button">Learn more</a></div>
				<!-- /wp:button --></div>
				<!-- /wp:buttons --></div>
				<!-- /wp:group --></div>
				<!-- /wp:group --></div>
				<!-- /wp:lubus/slide -->

				<!-- wp:lubus/slide -->
				<div class="wp-block-lubus-slide swiper-slide"><!-- wp:group {"style":{"spacing":{"blockGap":"42px"}},"layout":{"type":"flex","orientation":"vertical","flexWrap":"nowrap"}} -->
				<div class="wp-block-group"><!-- wp:image {"id":16531,"aspectRatio":"4/3","scale":"cover","sizeSlug":"large","linkDestination":"none","style":{"color":{"duotone":"unset"}}} -->
				<figure class="wp-block-image size-large"><img src="https://dotcompatterns.wordpress.com/wp-content/uploads/2024/09/2-1.jpg?w=717" alt="" class="wp-image-16531" style="aspect-ratio:4/3;object-fit:cover"/></figure>
				<!-- /wp:image -->

				<!-- wp:group {"style":{"spacing":{"blockGap":"24px"}},"layout":{"type":"flex","orientation":"vertical","flexWrap":"nowrap"}} -->
				<div class="wp-block-group"><!-- wp:heading {"level":3,"className":"is-service-name"} -->
				<h3 class="wp-block-heading is-service-name">Service 5</h3>
				<!-- /wp:heading -->

				<!-- wp:paragraph {"className":"is-service-description"} -->
				<p class="is-service-description">Navigating life's intricate fabric, choices unfold paths to the extraordinary, demanding creativity, curiosity, and courage for a truly fulfilling journey. </p>
				<!-- /wp:paragraph -->

				<!-- wp:buttons -->
				<div class="wp-block-buttons"><!-- wp:button {"className":"is-service-link"} -->
				<div class="wp-block-button is-service-link"><a class="wp-block-button__link wp-element-button">Learn more</a></div>
				<!-- /wp:button --></div>
				<!-- /wp:buttons --></div>
				<!-- /wp:group --></div>
				<!-- /wp:group --></div>
				<!-- /wp:lubus/slide -->

				<!-- wp:lubus/slide -->
				<div class="wp-block-lubus-slide swiper-slide"><!-- wp:group {"style":{"spacing":{"blockGap":"42px"}},"layout":{"type":"flex","orientation":"vertical","flexWrap":"nowrap"}} -->
				<div class="wp-block-group"><!-- wp:image {"id":16531,"aspectRatio":"4/3","scale":"cover","sizeSlug":"large","linkDestination":"none","style":{"color":{"duotone":"unset"}}} -->
				<figure class="wp-block-image size-large"><img src="https://dotcompatterns.wordpress.com/wp-content/uploads/2024/09/2-1.jpg?w=717" alt="" class="wp-image-16531" style="aspect-ratio:4/3;object-fit:cover"/></figure>
				<!-- /wp:image -->

				<!-- wp:group {"style":{"spacing":{"blockGap":"24px"}},"layout":{"type":"flex","orientation":"vertical","flexWrap":"nowrap"}} -->
				<div class="wp-block-group"><!-- wp:heading {"level":3,"className":"is-service-name"} -->
				<h3 class="wp-block-heading is-service-name">Service 6</h3>
				<!-- /wp:heading -->

				<!-- wp:paragraph {"className":"is-service-description"} -->
				<p class="is-service-description">Navigating life's intricate fabric, choices unfold paths to the extraordinary, demanding creativity, curiosity, and courage for a truly fulfilling journey. </p>
				<!-- /wp:paragraph -->

				<!-- wp:buttons -->
				<div class="wp-block-buttons"><!-- wp:button {"className":"is-service-link"} -->
				<div class="wp-block-button is-service-link"><a class="wp-block-button__link wp-element-button">Learn more</a></div>
				<!-- /wp:button --></div>
				<!-- /wp:buttons --></div>
				<!-- /wp:group --></div>
				<!-- /wp:group --></div>
				<!-- /wp:lubus/slide --></div></div></div>
				<!-- /wp:lubus/slider --></div>
			<!-- /wp:group -->`,
};

export default Services;
