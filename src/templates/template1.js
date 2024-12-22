/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n';

const Template1 = {
    name: 'template 1',
    title: __("Template 1", "lubus-slider"),
    description: __("A compelling call-to-action with an image aligned to the right.", "lubus-slider"),
    content: `
            <!-- wp:group {"metadata":{"name":"Template 1"},"align":"wide","style":{"spacing":{"blockGap":"60px"}},"layout":{"type":"constrained"}} -->
            <div class="wp-block-group alignwide"><!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|10"}},"layout":{"type":"flex","orientation":"vertical","justifyContent":"center"}} -->
            <div class="wp-block-group"><!-- wp:heading {"textAlign":"center","className":"is-style-asterisk"} -->
            <h2 class="wp-block-heading has-text-align-center is-style-asterisk">An array of resources</h2>
            <!-- /wp:heading -->

            <!-- wp:paragraph {"align":"center","style":{"layout":{"selfStretch":"fit","flexSize":null}}} -->
            <p class="has-text-align-center">Our comprehensive suite of professional services caters to a diverse clientele, ranging from homeowners to commercial developers.</p>
            <!-- /wp:paragraph --></div>
            <!-- /wp:group -->

            <!-- wp:columns {"align":"wide","style":{"spacing":{"blockGap":{"top":"var:preset|spacing|50","left":"var:preset|spacing|60"}}}} -->
            <div class="wp-block-columns alignwide"><!-- wp:column {"verticalAlignment":"center","width":"40%"} -->
            <div class="wp-block-column is-vertically-aligned-center" style="flex-basis:40%"><!-- wp:heading {"level":3,"className":"is-style-asterisk"} -->
            <h3 class="wp-block-heading is-style-asterisk">Études Architect App</h3>
            <!-- /wp:heading -->

            <!-- wp:list {"className":"is-style-checkmark-list","style":{"typography":{"lineHeight":"1.75"}}} -->
            <ul style="line-height:1.75" class="wp-block-list is-style-checkmark-list"><!-- wp:list-item -->
            <li>Collaborate with fellow architects.</li>
            <!-- /wp:list-item -->

            <!-- wp:list-item -->
            <li>Showcase your projects.</li>
            <!-- /wp:list-item -->

            <!-- wp:list-item -->
            <li>Experience the world of architecture.</li>
            <!-- /wp:list-item --></ul>
            <!-- /wp:list --></div>
            <!-- /wp:column -->

            <!-- wp:column {"width":"50%"} -->
            <div class="wp-block-column" style="flex-basis:50%"><!-- wp:lubus/slider {"slidesPerView":{"desktop":1,"tablet":2,"mobile":1,"activeDevice":"desktop"}} -->
            <div style="--swiper-navigation-size:40px;--navigation-border-radius:4px;--navigation-padding-top:0px;--navigation-padding-right:0px;--navigation-padding-bottom:0px;--navigation-padding-left:0px;--pagination-size:8px;--pagination-offset-top:0px;--pagination-offset-right:0px;--pagination-offset-bottom:0px;--pagination-offset-left:0px;--navigation-offset-top:0px;--navigation-offset-right:0px;--navigation-offset-bottom:0px;--navigation-offset-left:0px" class="wp-block-lubus-slider"><div class="swiper" data-swiper="{&quot;slidesPerView&quot;:{&quot;desktop&quot;:1,&quot;tablet&quot;:2,&quot;mobile&quot;:1,&quot;activeDevice&quot;:&quot;desktop&quot;},&quot;slidesSpacing&quot;:{&quot;desktop&quot;:30,&quot;tablet&quot;:20,&quot;mobile&quot;:10,&quot;activeDevice&quot;:&quot;desktop&quot;},&quot;speed&quot;:300,&quot;effects&quot;:&quot;slide&quot;,&quot;autoplay&quot;:false,&quot;delay&quot;:5000,&quot;navigation&quot;:true,&quot;pagination&quot;:true,&quot;loop&quot;:false,&quot;navigationColor&quot;:{&quot;arrowColor&quot;:{&quot;default&quot;:&quot;&quot;,&quot;hover&quot;:&quot;&quot;},&quot;backgroundColor&quot;:{&quot;default&quot;:&quot;&quot;,&quot;hover&quot;:&quot;&quot;}},&quot;navigationSize&quot;:&quot;40px&quot;,&quot;navigationBorderRadius&quot;:&quot;4px&quot;,&quot;paginationSize&quot;:&quot;8px&quot;}"><div class="swiper-wrapper"><!-- wp:lubus/slide -->
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
            <!-- /wp:column --></div>
            <!-- /wp:columns --></div>
            <!-- /wp:group -->
        `,
};

export default Template1;