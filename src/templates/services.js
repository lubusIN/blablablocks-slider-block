/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n';

const Services = {
	name: 'services',
	title: __( 'Services', 'blablablocks-slider-block' ),
	content: `
           <!-- wp:group {"metadata":{"categories":["services"],"name":"Services","patternName":"assembler/services-2"},"align":"full","className":"alignfull is-style-default","style":{"spacing":{"margin":{"top":"0","bottom":"0"},"blockGap":"var:preset|spacing|30","padding":{"top":"var:preset|spacing|40","bottom":"var:preset|spacing|40","left":"var:preset|spacing|50","right":"var:preset|spacing|50"}}},"layout":{"type":"default"}} -->
			<div class="wp-block-group alignfull is-style-default" style="margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--40);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--40);padding-left:var(--wp--preset--spacing--50)"><!-- wp:heading {"align":"wide","style":{"layout":{"selfStretch":"fixed","flexSize":"100%"},"typography":{"fontStyle":"normal","fontWeight":"600"}}} -->
			<h2 class="wp-block-heading alignwide" style="font-style:normal;font-weight:600">Services</h2>
			<!-- /wp:heading -->

			<!-- wp:blablablocks/slider {"slidesPerView":{"desktop":3,"tablet":2,"mobile":1,"activeDevice":"desktop"},"pagination":{"desktop":false,"tablet":false,"mobile":false,"activeDevice":"desktop"},"navigationColor":{"arrowColor":{"default":"#000000","hover":"#323232"},"backgroundColor":{"hover":""}},"navigationPadding":{},"navigationSize":"2.3rem","navigationOffset":{"top":"50%","bottom":"0px","left":"-6vw","right":"-6vw"},"navigationBorderRadius":"50%","paginationOffset":{"bottom":"-70px"},"align":"full","className":"wp-block-blablablocks-slider alignfull wp-block-lubus-slider","style":{"spacing":{"padding":{"top":"0px","bottom":"0px","left":"0px","right":"0px"}}}} -->
			<!-- wp:blablablocks/slide {"className":"wp-block-lubus-slide"} -->
			<div class="wp-block-blablablocks-slide swiper-slide wp-block-lubus-slide"><!-- wp:group {"style":{"spacing":{"blockGap":"42px"}},"layout":{"type":"flex","orientation":"vertical","flexWrap":"nowrap"}} -->
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
			<!-- /wp:blablablocks/slide -->

			<!-- wp:blablablocks/slide {"className":"wp-block-lubus-slide"} -->
			<div class="wp-block-blablablocks-slide swiper-slide wp-block-lubus-slide"><!-- wp:group {"style":{"spacing":{"blockGap":"42px"}},"layout":{"type":"flex","orientation":"vertical","flexWrap":"nowrap"}} -->
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
			<!-- /wp:blablablocks/slide -->

			<!-- wp:blablablocks/slide {"className":"wp-block-lubus-slide"} -->
			<div class="wp-block-blablablocks-slide swiper-slide wp-block-lubus-slide"><!-- wp:group {"style":{"spacing":{"blockGap":"42px"}},"layout":{"type":"flex","orientation":"vertical","flexWrap":"nowrap"}} -->
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
			<!-- /wp:blablablocks/slide -->

			<!-- wp:blablablocks/slide {"className":"wp-block-lubus-slide"} -->
			<div class="wp-block-blablablocks-slide swiper-slide wp-block-lubus-slide"><!-- wp:group {"style":{"spacing":{"blockGap":"42px"}},"layout":{"type":"flex","orientation":"vertical","flexWrap":"nowrap"}} -->
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
			<!-- /wp:blablablocks/slide -->

			<!-- wp:blablablocks/slide {"className":"wp-block-lubus-slide"} -->
			<div class="wp-block-blablablocks-slide swiper-slide wp-block-lubus-slide"><!-- wp:group {"style":{"spacing":{"blockGap":"42px"}},"layout":{"type":"flex","orientation":"vertical","flexWrap":"nowrap"}} -->
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
			<!-- /wp:blablablocks/slide -->

			<!-- wp:blablablocks/slide {"className":"wp-block-lubus-slide"} -->
			<div class="wp-block-blablablocks-slide swiper-slide wp-block-lubus-slide"><!-- wp:group {"style":{"spacing":{"blockGap":"42px"}},"layout":{"type":"flex","orientation":"vertical","flexWrap":"nowrap"}} -->
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
			<!-- /wp:blablablocks/slide -->
			<!-- /wp:blablablocks/slider --></div>
			<!-- /wp:group -->`,
};

export default Services;
