/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n';

const HeroSection = {
	name: 'hero-section',
	title: __( 'Hero Section', 'blablablocks-slider-block' ),
	content: `
             <!-- wp:blablablocks/slider {"autoplay":true,"navigation":{"desktop":false,"tablet":false,"mobile":false,"activeDevice":"desktop"},"loop":true,"paginationColor":{"activeColor":{"default":"#ffffff"}},"metadata":{"name":"Hero Section"},"align":"full","className":"wp-block-blablablocks-slider alignfull wp-block-lubus-slider","style":{"spacing":{"padding":{"top":"0px","bottom":"0px","left":"0px","right":"0px"}}}} -->
                <!-- wp:blablablocks/slide {"className":"wp-block-lubus-slide"} -->
                <div class="wp-block-blablablocks-slide swiper-slide wp-block-lubus-slide"><!-- wp:cover {"url":"https://dotcompatterns.files.wordpress.com/2024/01/paint-wide-3.jpg","id":13691,"dimRatio":50,"isUserOverlayColor":false,"minHeight":500,"className":"alignfull is-style-default","style":{"spacing":{"padding":{"right":"var:preset|spacing|50","left":"var:preset|spacing|50"},"margin":{"top":"0","bottom":"0"}}},"layout":{"type":"default"}} -->
                <div class="wp-block-cover alignfull is-style-default" style="margin-top:0;margin-bottom:0;padding-right:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50);min-height:500px"><span aria-hidden="true" class="wp-block-cover__background has-background-dim"></span><img class="wp-block-cover__image-background wp-image-13691" alt="" src="https://dotcompatterns.files.wordpress.com/2024/01/paint-wide-3.jpg" data-object-fit="cover"/><div class="wp-block-cover__inner-container"><!-- wp:spacer {"height":"var:preset|spacing|70"} -->
                <div style="height:var(--wp--preset--spacing--70)" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer -->

                <!-- wp:group {"align":"wide","style":{"spacing":{"blockGap":"0"}},"layout":{"type":"constrained","contentSize":"1200px"}} -->
                <div class="wp-block-group alignwide"><!-- wp:heading {"textAlign":"center","className":"text-balance","style":{"spacing":{"margin":{"top":"0","bottom":"0","left":"0","right":"0"}}},"fontSize":"xx-large"} -->
                <h2 class="wp-block-heading has-text-align-center text-balance has-xx-large-font-size" style="margin-top:0;margin-right:0;margin-bottom:0;margin-left:0">Discover a world of possibilities</h2>
                <!-- /wp:heading -->

                <!-- wp:spacer {"height":"var:preset|spacing|40"} -->
                <div style="height:var(--wp--preset--spacing--40)" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer -->

                <!-- wp:buttons {"layout":{"type":"flex","flexWrap":"wrap","justifyContent":"center"}} -->
                <div class="wp-block-buttons"><!-- wp:button {"width":50} -->
                <div class="wp-block-button has-custom-width wp-block-button__width-50"><a class="wp-block-button__link wp-element-button">Get Started</a></div>
                <!-- /wp:button --></div>
                <!-- /wp:buttons --></div>
                <!-- /wp:group -->

                <!-- wp:spacer {"height":"var:preset|spacing|70"} -->
                <div style="height:var(--wp--preset--spacing--70)" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer --></div></div>
                <!-- /wp:cover --></div>
                <!-- /wp:blablablocks/slide -->

                <!-- wp:blablablocks/slide {"className":"wp-block-lubus-slide"} -->
                <div class="wp-block-blablablocks-slide swiper-slide wp-block-lubus-slide"><!-- wp:cover {"url":"https://dotcompatterns.files.wordpress.com/2024/01/paint-wide-3.jpg","id":13691,"dimRatio":50,"isUserOverlayColor":false,"minHeight":500,"className":"alignfull is-style-default","style":{"spacing":{"padding":{"right":"var:preset|spacing|50","left":"var:preset|spacing|50"},"margin":{"top":"0","bottom":"0"}}},"layout":{"type":"default"}} -->
                <div class="wp-block-cover alignfull is-style-default" style="margin-top:0;margin-bottom:0;padding-right:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50);min-height:500px"><span aria-hidden="true" class="wp-block-cover__background has-background-dim"></span><img class="wp-block-cover__image-background wp-image-13691" alt="" src="https://dotcompatterns.files.wordpress.com/2024/01/paint-wide-3.jpg" data-object-fit="cover"/><div class="wp-block-cover__inner-container"><!-- wp:spacer {"height":"var:preset|spacing|70"} -->
                <div style="height:var(--wp--preset--spacing--70)" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer -->

                <!-- wp:group {"align":"wide","style":{"spacing":{"blockGap":"0"}},"layout":{"type":"constrained","contentSize":"1200px"}} -->
                <div class="wp-block-group alignwide"><!-- wp:heading {"textAlign":"center","className":"text-balance","style":{"spacing":{"margin":{"top":"0","bottom":"0","left":"0","right":"0"}}},"fontSize":"xx-large"} -->
                <h2 class="wp-block-heading has-text-align-center text-balance has-xx-large-font-size" style="margin-top:0;margin-right:0;margin-bottom:0;margin-left:0">Discover a world of possibilities</h2>
                <!-- /wp:heading -->

                <!-- wp:spacer {"height":"var:preset|spacing|40"} -->
                <div style="height:var(--wp--preset--spacing--40)" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer -->

                <!-- wp:buttons {"layout":{"type":"flex","flexWrap":"wrap","justifyContent":"center"}} -->
                <div class="wp-block-buttons"><!-- wp:button {"width":50} -->
                <div class="wp-block-button has-custom-width wp-block-button__width-50"><a class="wp-block-button__link wp-element-button">Get Started</a></div>
                <!-- /wp:button --></div>
                <!-- /wp:buttons --></div>
                <!-- /wp:group -->

                <!-- wp:spacer {"height":"var:preset|spacing|70"} -->
                <div style="height:var(--wp--preset--spacing--70)" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer --></div></div>
                <!-- /wp:cover --></div>
                <!-- /wp:blablablocks/slide -->

                <!-- wp:blablablocks/slide {"className":"wp-block-lubus-slide"} -->
                <div class="wp-block-blablablocks-slide swiper-slide wp-block-lubus-slide"><!-- wp:cover {"url":"https://dotcompatterns.files.wordpress.com/2024/01/paint-wide-3.jpg","id":13691,"dimRatio":50,"isUserOverlayColor":false,"minHeight":500,"className":"alignfull is-style-default","style":{"spacing":{"padding":{"right":"var:preset|spacing|50","left":"var:preset|spacing|50"},"margin":{"top":"0","bottom":"0"}}},"layout":{"type":"default"}} -->
                <div class="wp-block-cover alignfull is-style-default" style="margin-top:0;margin-bottom:0;padding-right:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50);min-height:500px"><span aria-hidden="true" class="wp-block-cover__background has-background-dim"></span><img class="wp-block-cover__image-background wp-image-13691" alt="" src="https://dotcompatterns.files.wordpress.com/2024/01/paint-wide-3.jpg" data-object-fit="cover"/><div class="wp-block-cover__inner-container"><!-- wp:spacer {"height":"var:preset|spacing|70"} -->
                <div style="height:var(--wp--preset--spacing--70)" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer -->

                <!-- wp:group {"align":"wide","style":{"spacing":{"blockGap":"0"}},"layout":{"type":"constrained","contentSize":"1200px"}} -->
                <div class="wp-block-group alignwide"><!-- wp:heading {"textAlign":"center","className":"text-balance","style":{"spacing":{"margin":{"top":"0","bottom":"0","left":"0","right":"0"}}},"fontSize":"xx-large"} -->
                <h2 class="wp-block-heading has-text-align-center text-balance has-xx-large-font-size" style="margin-top:0;margin-right:0;margin-bottom:0;margin-left:0">Discover a world of possibilities</h2>
                <!-- /wp:heading -->

                <!-- wp:spacer {"height":"var:preset|spacing|40"} -->
                <div style="height:var(--wp--preset--spacing--40)" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer -->

                <!-- wp:buttons {"layout":{"type":"flex","flexWrap":"wrap","justifyContent":"center"}} -->
                <div class="wp-block-buttons"><!-- wp:button {"width":50} -->
                <div class="wp-block-button has-custom-width wp-block-button__width-50"><a class="wp-block-button__link wp-element-button">Get Started</a></div>
                <!-- /wp:button --></div>
                <!-- /wp:buttons --></div>
                <!-- /wp:group -->

                <!-- wp:spacer {"height":"var:preset|spacing|70"} -->
                <div style="height:var(--wp--preset--spacing--70)" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer --></div></div>
                <!-- /wp:cover --></div>
                <!-- /wp:blablablocks/slide -->

                <!-- wp:blablablocks/slide {"className":"wp-block-lubus-slide"} -->
                <div class="wp-block-blablablocks-slide swiper-slide wp-block-lubus-slide"><!-- wp:cover {"url":"https://dotcompatterns.files.wordpress.com/2024/01/paint-wide-3.jpg","id":13691,"dimRatio":50,"isUserOverlayColor":false,"minHeight":500,"className":"alignfull is-style-default","style":{"spacing":{"padding":{"right":"var:preset|spacing|50","left":"var:preset|spacing|50"},"margin":{"top":"0","bottom":"0"}}},"layout":{"type":"default"}} -->
                <div class="wp-block-cover alignfull is-style-default" style="margin-top:0;margin-bottom:0;padding-right:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50);min-height:500px"><span aria-hidden="true" class="wp-block-cover__background has-background-dim"></span><img class="wp-block-cover__image-background wp-image-13691" alt="" src="https://dotcompatterns.files.wordpress.com/2024/01/paint-wide-3.jpg" data-object-fit="cover"/><div class="wp-block-cover__inner-container"><!-- wp:spacer {"height":"var:preset|spacing|70"} -->
                <div style="height:var(--wp--preset--spacing--70)" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer -->

                <!-- wp:group {"align":"wide","style":{"spacing":{"blockGap":"0"}},"layout":{"type":"constrained","contentSize":"1200px"}} -->
                <div class="wp-block-group alignwide"><!-- wp:heading {"textAlign":"center","className":"text-balance","style":{"spacing":{"margin":{"top":"0","bottom":"0","left":"0","right":"0"}}},"fontSize":"xx-large"} -->
                <h2 class="wp-block-heading has-text-align-center text-balance has-xx-large-font-size" style="margin-top:0;margin-right:0;margin-bottom:0;margin-left:0">Discover a world of possibilities</h2>
                <!-- /wp:heading -->

                <!-- wp:spacer {"height":"var:preset|spacing|40"} -->
                <div style="height:var(--wp--preset--spacing--40)" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer -->

                <!-- wp:buttons {"layout":{"type":"flex","flexWrap":"wrap","justifyContent":"center"}} -->
                <div class="wp-block-buttons"><!-- wp:button {"width":50} -->
                <div class="wp-block-button has-custom-width wp-block-button__width-50"><a class="wp-block-button__link wp-element-button">Get Started</a></div>
                <!-- /wp:button --></div>
                <!-- /wp:buttons --></div>
                <!-- /wp:group -->

                <!-- wp:spacer {"height":"var:preset|spacing|70"} -->
                <div style="height:var(--wp--preset--spacing--70)" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer --></div></div>
                <!-- /wp:cover --></div>
                <!-- /wp:blablablocks/slide -->
                <!-- /wp:blablablocks/slider -->`,
};

export default HeroSection;
