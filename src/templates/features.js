/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n';

const baseImageUrl =
	typeof BlablablocksData !== 'undefined' ? BlablablocksData.assetsUrl : '';

const Features = {
	name: 'features',
	title: __( 'Features', 'blablablocks-slider-block' ),
	content: `
			<!-- wp:group {"metadata":{"categories":["services"],"name":"Features","patternName":"assembler/services-2"},"align":"full","className":"alignfull is-style-default","style":{"spacing":{"margin":{"top":"0","bottom":"0"},"blockGap":"var:preset|spacing|30","padding":{"top":"var:preset|spacing|40","bottom":"var:preset|spacing|40","left":"15px","right":"15px"}}},"layout":{"type":"constrained","contentSize":"1280px"}} -->
			<div class="wp-block-group alignfull is-style-default" style="margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--40);padding-right:15px;padding-bottom:var(--wp--preset--spacing--40);padding-left:15px"><!-- wp:heading {"textAlign":"center","level":1,"align":"wide","style":{"layout":{"selfStretch":"fixed","flexSize":"100%"},"typography":{"fontStyle":"normal","fontWeight":"600"}}} -->
			<h1 class="wp-block-heading alignwide has-text-align-center" style="font-style:normal;font-weight:600">Features</h1>
			<!-- /wp:heading -->

			<!-- wp:blablablocks/slider {"slidesPerView":{"desktop":3,"tablet":1,"mobile":1,"activeDevice":"desktop"},"pagination":{"desktop":false,"tablet":false,"mobile":false,"activeDevice":"desktop"},"loop":true,"navigationColor":{"arrowColor":{"default":"#000000","hover":"#323232"},"backgroundColor":{"hover":""}},"navigationSize":"2.5rem","navigationSpacing":{"right":"0px","left":"0px"},"navigationOffset":{"top":"0px","bottom":"0px","left":"var:preset|spacing|30","right":"var:preset|spacing|30"},"navigationPosition":"center center","paginationOffset":{"bottom":"0px"},"className":"wp-block-blablablocks-slider alignfull wp-block-lubus-slider","style":{"spacing":{"padding":{"top":"0px","bottom":"0px","left":"6vw","right":"6vw"}}}} -->
			<!-- wp:blablablocks/slide {"className":"wp-block-lubus-slide"} -->
			<div class="wp-block-blablablocks-slide swiper-slide wp-block-lubus-slide"><!-- wp:group {"style":{"spacing":{"blockGap":"42px"}},"layout":{"type":"flex","orientation":"vertical","flexWrap":"nowrap"}} -->
			<div class="wp-block-group"><!-- wp:image {"scale":"cover","sizeSlug":"large","linkDestination":"none","style":{"color":{"duotone":"unset"}}} -->
			<figure class="wp-block-image size-large"><img src="${ baseImageUrl }/templates/features/design.jpeg" alt="" style="object-fit:cover"/></figure>
			<!-- /wp:image -->

			<!-- wp:group {"style":{"spacing":{"blockGap":"24px"}},"layout":{"type":"flex","orientation":"vertical","flexWrap":"nowrap"}} -->
			<div class="wp-block-group"><!-- wp:heading {"level":3,"className":"is-service-name"} -->
			<h3 class="wp-block-heading is-service-name"><strong><strong><strong>Design</strong></strong></strong></h3>
			<!-- /wp:heading -->

			<!-- wp:paragraph {"className":"is-service-description"} -->
			<p class="is-service-description">Create any website with flexible design tools and the power of&nbsp;blocks. Start with a blank canvas or choose a&nbsp;theme. Customize every detail—no code needed.</p>
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
			<div class="wp-block-group"><!-- wp:image {"sizeSlug":"large","linkDestination":"none","style":{"color":{"duotone":"unset"}}} -->
			<figure class="wp-block-image size-large"><img src="${ baseImageUrl }/templates/features/build.jpeg" alt=""/></figure>
			<!-- /wp:image -->

			<!-- wp:group {"style":{"spacing":{"blockGap":"24px"}},"layout":{"type":"flex","orientation":"vertical","flexWrap":"nowrap"}} -->
			<div class="wp-block-group"><!-- wp:heading {"level":3,"className":"is-service-name"} -->
			<h3 class="wp-block-heading is-service-name"><strong><strong><strong>Build</strong></strong></strong></h3>
			<!-- /wp:heading -->

			<!-- wp:paragraph {"className":"is-service-description"} -->
			<p class="is-service-description">See how your site will look in real time, even as you add, edit, and rearrange content—with intuitive editing and integrated features to manage it all.</p>
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
			<div class="wp-block-group"><!-- wp:image {"sizeSlug":"large","linkDestination":"none","style":{"color":{"duotone":"unset"}}} -->
			<figure class="wp-block-image size-large"><img src="${ baseImageUrl }/templates/features/extend.jpeg" alt=""/></figure>
			<!-- /wp:image -->

			<!-- wp:group {"style":{"spacing":{"blockGap":"24px"}},"layout":{"type":"flex","orientation":"vertical","flexWrap":"nowrap"}} -->
			<div class="wp-block-group"><!-- wp:heading {"level":3,"className":"is-service-name"} -->
			<h3 class="wp-block-heading is-service-name"><strong><strong>Extend</strong></strong></h3>
			<!-- /wp:heading -->

			<!-- wp:paragraph {"className":"is-service-description"} -->
			<p class="is-service-description">Make your site do whatever you need it to. Add a store, analytics, newsletter, social media integration; you’re in control with an extensive library of&nbsp;plugins.</p>
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
			<div class="wp-block-group"><!-- wp:image {"scale":"cover","sizeSlug":"large","linkDestination":"none","style":{"color":{"duotone":"unset"}}} -->
			<figure class="wp-block-image size-large"><img src="${ baseImageUrl }/templates/features/design.jpeg" alt="" style="object-fit:cover"/></figure>
			<!-- /wp:image -->

			<!-- wp:group {"style":{"spacing":{"blockGap":"24px"}},"layout":{"type":"flex","orientation":"vertical","flexWrap":"nowrap"}} -->
			<div class="wp-block-group"><!-- wp:heading {"level":3,"className":"is-service-name"} -->
			<h3 class="wp-block-heading is-service-name"><strong><strong><strong>Design</strong></strong></strong></h3>
			<!-- /wp:heading -->

			<!-- wp:paragraph {"className":"is-service-description"} -->
			<p class="is-service-description">Create any website with flexible design tools and the power of&nbsp;blocks. Start with a blank canvas or choose a&nbsp;theme. Customize every detail—no code needed.</p>
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
			<div class="wp-block-group"><!-- wp:image {"sizeSlug":"large","linkDestination":"none","style":{"color":{"duotone":"unset"}}} -->
			<figure class="wp-block-image size-large"><img src="${ baseImageUrl }/templates/features/build.jpeg" alt=""/></figure>
			<!-- /wp:image -->

			<!-- wp:group {"style":{"spacing":{"blockGap":"24px"}},"layout":{"type":"flex","orientation":"vertical","flexWrap":"nowrap"}} -->
			<div class="wp-block-group"><!-- wp:heading {"level":3,"className":"is-service-name"} -->
			<h3 class="wp-block-heading is-service-name"><strong><strong><strong>Build</strong></strong></strong></h3>
			<!-- /wp:heading -->

			<!-- wp:paragraph {"className":"is-service-description"} -->
			<p class="is-service-description">See how your site will look in real time, even as you add, edit, and rearrange content—with intuitive editing and integrated features to manage it all.</p>
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
			<div class="wp-block-group"><!-- wp:image {"sizeSlug":"large","linkDestination":"none","style":{"color":{"duotone":"unset"}}} -->
			<figure class="wp-block-image size-large"><img src="${ baseImageUrl }/templates/features/extend.jpeg" alt=""/></figure>
			<!-- /wp:image -->

			<!-- wp:group {"style":{"spacing":{"blockGap":"24px"}},"layout":{"type":"flex","orientation":"vertical","flexWrap":"nowrap"}} -->
			<div class="wp-block-group"><!-- wp:heading {"level":3,"className":"is-service-name"} -->
			<h3 class="wp-block-heading is-service-name"><strong><strong>Extend</strong></strong></h3>
			<!-- /wp:heading -->

			<!-- wp:paragraph {"className":"is-service-description"} -->
			<p class="is-service-description">Make your site do whatever you need it to. Add a store, analytics, newsletter, social media integration; you’re in control with an extensive library of&nbsp;plugins.</p>
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

export default Features;
