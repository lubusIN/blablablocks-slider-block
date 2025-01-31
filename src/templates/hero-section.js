/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n';

const HeroSection = {
	name: 'hero-section',
	title: __( 'Hero Section', 'blablablocks-slider-block' ),
	content: `
        <!-- wp:blablablocks/slider {"autoplay":true,"navigation":{"desktop":false,"tablet":false,"mobile":false,"activeDevice":"desktop"},"loop":true,"paginationColor":{"activeColor":{"default":"#ffffff"}},"metadata":{"name":"Hero Section"},"align":"full","className":"wp-block-lubus-slider","style":{"spacing":{"padding":{"top":"0px","bottom":"0px","left":"0px","right":"0px"}}}} -->
        <div style="padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;--navigation-arrow-color:#000;--navigation-background-color:transparent;--navigation-arrow-hover-color:#333;--navigation-background-hover-color:transparent;--swiper-navigation-size:40px;--navigation-border-radius:4px 4px 4px 4px;--navigation-padding-top:0px;--navigation-padding-right:0px;--navigation-padding-bottom:0px;--navigation-padding-left:0px;--pagination-size:8px;--pagination-active-color:#ffffff;--pagination-inactive-color:#ccc;--pagination-offset-top:auto;--pagination-offset-right:0px;--pagination-offset-bottom:8px;--pagination-offset-left:0px;--navigation-offset-top:50%;--navigation-offset-right:10px;--navigation-offset-bottom:0px;--navigation-offset-left:10px" class="wp-block-blablablocks-slider alignfull wp-block-lubus-slider"><div class="swiper" data-swiper="{&quot;slidesPerView&quot;:{&quot;desktop&quot;:1,&quot;tablet&quot;:1,&quot;mobile&quot;:1,&quot;activeDevice&quot;:&quot;desktop&quot;},&quot;slidesSpacing&quot;:{&quot;desktop&quot;:30,&quot;tablet&quot;:20,&quot;mobile&quot;:10,&quot;activeDevice&quot;:&quot;desktop&quot;},&quot;speed&quot;:300,&quot;effects&quot;:&quot;slide&quot;,&quot;autoplay&quot;:true,&quot;delay&quot;:5000,&quot;navigation&quot;:{&quot;desktop&quot;:false,&quot;tablet&quot;:false,&quot;mobile&quot;:false,&quot;activeDevice&quot;:&quot;desktop&quot;},&quot;pagination&quot;:{&quot;desktop&quot;:true,&quot;tablet&quot;:true,&quot;mobile&quot;:true,&quot;activeDevice&quot;:&quot;desktop&quot;},&quot;loop&quot;:true,&quot;paginationColor&quot;:{&quot;activeColor&quot;:{&quot;default&quot;:&quot;#ffffff&quot;}},&quot;metadata&quot;:{&quot;name&quot;:&quot;Hero Section&quot;},&quot;align&quot;:&quot;full&quot;,&quot;className&quot;:&quot;wp-block-lubus-slider&quot;,&quot;style&quot;:{&quot;spacing&quot;:{&quot;padding&quot;:{&quot;top&quot;:&quot;0px&quot;,&quot;bottom&quot;:&quot;0px&quot;,&quot;left&quot;:&quot;0px&quot;,&quot;right&quot;:&quot;0px&quot;}}}}"><div class="swiper-wrapper"><!-- wp:blablablocks/slide {"className":"wp-block-lubus-slide"} -->
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
        <!-- /wp:blablablocks/slide --></div></div></div>
        <!-- /wp:blablablocks/slider -->`,
};

export default HeroSection;
