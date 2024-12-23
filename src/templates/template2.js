/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n';

const Template2 = {
    name: 'template-2',
    title: __("Template 2", "slider-block"),
    description: __("A simple centered call-to-action for subscribing.", "slider-block"),
    content: `
            <!-- wp:group {"metadata":{"name":"Template 2"},"align":"wide","style":{"spacing":{"blockGap":"60px"}},"layout":{"type":"constrained"}} -->
            <div class="wp-block-group alignwide"><!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|10"}},"layout":{"type":"flex","orientation":"vertical","justifyContent":"center"}} -->
            <div class="wp-block-group"><!-- wp:heading {"textAlign":"center","className":"is-style-asterisk"} -->
            <h2 class="wp-block-heading has-text-align-center is-style-asterisk">An array of resources</h2>
            <!-- /wp:heading -->

            <!-- wp:paragraph {"align":"center","style":{"layout":{"selfStretch":"fit","flexSize":null}}} -->
            <p class="has-text-align-center">Our comprehensive suite of professional services caters to a diverse clientele, ranging from homeowners to commercial developers.</p>
            <!-- /wp:paragraph --></div>
            <!-- /wp:group -->

            <!-- wp:lubus/slider {"align":"wide"} -->
            <div style="--swiper-navigation-size:40px;--navigation-border-radius:4px;--navigation-padding-top:0px;--navigation-padding-right:0px;--navigation-padding-bottom:0px;--navigation-padding-left:0px;--pagination-size:8px;--pagination-offset-top:0px;--pagination-offset-right:0px;--pagination-offset-bottom:0px;--pagination-offset-left:0px;--navigation-offset-top:0px;--navigation-offset-right:0px;--navigation-offset-bottom:0px;--navigation-offset-left:0px" class="wp-block-lubus-slider alignwide"><div class="swiper" data-swiper="{&quot;slidesPerView&quot;:{&quot;desktop&quot;:1,&quot;tablet&quot;:1,&quot;mobile&quot;:1,&quot;activeDevice&quot;:&quot;desktop&quot;},&quot;slidesSpacing&quot;:{&quot;desktop&quot;:30,&quot;tablet&quot;:20,&quot;mobile&quot;:10,&quot;activeDevice&quot;:&quot;desktop&quot;},&quot;speed&quot;:300,&quot;effects&quot;:&quot;slide&quot;,&quot;autoplay&quot;:false,&quot;delay&quot;:5000,&quot;navigation&quot;:true,&quot;pagination&quot;:true,&quot;loop&quot;:false,&quot;navigationColor&quot;:{&quot;arrowColor&quot;:{&quot;default&quot;:&quot;&quot;,&quot;hover&quot;:&quot;&quot;},&quot;backgroundColor&quot;:{&quot;default&quot;:&quot;&quot;,&quot;hover&quot;:&quot;&quot;}},&quot;navigationSize&quot;:&quot;40px&quot;,&quot;navigationBorderRadius&quot;:&quot;4px&quot;,&quot;paginationSize&quot;:&quot;8px&quot;,&quot;align&quot;:&quot;wide&quot;}"><div class="swiper-wrapper"><!-- wp:lubus/slide -->
            <div class="wp-block-lubus-slide swiper-slide"><!-- wp:cover {"customOverlayColor":"#3858E9","isUserOverlayColor":true} -->
            <div class="wp-block-cover"><span aria-hidden="true" class="wp-block-cover__background has-background-dim-100 has-background-dim" style="background-color:#3858E9"></span><div class="wp-block-cover__inner-container"><!-- wp:paragraph -->
            <p>Hello World</p>
            <!-- /wp:paragraph --></div></div>
            <!-- /wp:cover --></div>
            <!-- /wp:lubus/slide -->

            <!-- wp:lubus/slide -->
            <div class="wp-block-lubus-slide swiper-slide"><!-- wp:cover {"customOverlayColor":"#3858E9","isUserOverlayColor":true} -->
            <div class="wp-block-cover"><span aria-hidden="true" class="wp-block-cover__background has-background-dim-100 has-background-dim" style="background-color:#3858E9"></span><div class="wp-block-cover__inner-container"><!-- wp:paragraph -->
            <p>Hello World</p>
            <!-- /wp:paragraph --></div></div>
            <!-- /wp:cover --></div>
            <!-- /wp:lubus/slide -->

            <!-- wp:lubus/slide -->
            <div class="wp-block-lubus-slide swiper-slide"><!-- wp:cover {"customOverlayColor":"#3858E9","isUserOverlayColor":true} -->
            <div class="wp-block-cover"><span aria-hidden="true" class="wp-block-cover__background has-background-dim-100 has-background-dim" style="background-color:#3858E9"></span><div class="wp-block-cover__inner-container"><!-- wp:paragraph -->
            <p>Hello World</p>
            <!-- /wp:paragraph --></div></div>
            <!-- /wp:cover --></div>
            <!-- /wp:lubus/slide -->

            <!-- wp:lubus/slide -->
            <div class="wp-block-lubus-slide swiper-slide"><!-- wp:cover {"customOverlayColor":"#3858E9","isUserOverlayColor":true} -->
            <div class="wp-block-cover"><span aria-hidden="true" class="wp-block-cover__background has-background-dim-100 has-background-dim" style="background-color:#3858E9"></span><div class="wp-block-cover__inner-container"><!-- wp:paragraph -->
            <p>Hello World</p>
            <!-- /wp:paragraph --></div></div>
            <!-- /wp:cover --></div>
            <!-- /wp:lubus/slide --></div></div></div>
            <!-- /wp:lubus/slider --></div>
            <!-- /wp:group -->
        `,
};

export default Template2;