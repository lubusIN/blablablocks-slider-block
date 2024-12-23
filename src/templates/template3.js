/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n';

const Template3 = {
    name: 'template-3',
    title: __("Template 3", "slider-block"),
    description: __("A simple centered call-to-action for subscribing.", "slider-block"),
    content: `
            <!-- wp:lubus/slider {"slidesPerView":{"desktop":1,"tablet":2,"mobile":1,"activeDevice":"desktop"},"pagination":false,"navigationColor":{"arrowColor":{"default":"#ffffff"}},"metadata":{"name":"Template 3"},"align":"wide"} -->
            <div style="--navigation-arrow-color:#ffffff;--swiper-navigation-size:40px;--navigation-border-radius:4px;--navigation-padding-top:0px;--navigation-padding-right:0px;--navigation-padding-bottom:0px;--navigation-padding-left:0px;--pagination-size:8px;--pagination-offset-top:0px;--pagination-offset-right:0px;--pagination-offset-bottom:0px;--pagination-offset-left:0px;--navigation-offset-top:0px;--navigation-offset-right:0px;--navigation-offset-bottom:0px;--navigation-offset-left:0px" class="wp-block-lubus-slider alignwide"><div class="swiper" data-swiper="{&quot;slidesPerView&quot;:{&quot;desktop&quot;:1,&quot;tablet&quot;:2,&quot;mobile&quot;:1,&quot;activeDevice&quot;:&quot;desktop&quot;},&quot;slidesSpacing&quot;:{&quot;desktop&quot;:30,&quot;tablet&quot;:20,&quot;mobile&quot;:10,&quot;activeDevice&quot;:&quot;desktop&quot;},&quot;speed&quot;:300,&quot;effects&quot;:&quot;slide&quot;,&quot;autoplay&quot;:false,&quot;delay&quot;:5000,&quot;navigation&quot;:true,&quot;pagination&quot;:false,&quot;loop&quot;:false,&quot;navigationColor&quot;:{&quot;arrowColor&quot;:{&quot;default&quot;:&quot;#ffffff&quot;}},&quot;navigationSize&quot;:&quot;40px&quot;,&quot;navigationBorderRadius&quot;:&quot;4px&quot;,&quot;paginationSize&quot;:&quot;8px&quot;,&quot;metadata&quot;:{&quot;name&quot;:&quot;Template 3&quot;},&quot;align&quot;:&quot;wide&quot;}"><div class="swiper-wrapper"><!-- wp:lubus/slide -->
            <div class="wp-block-lubus-slide swiper-slide"><!-- wp:group {"style":{"elements":{"link":{"color":{"text":"var:preset|color|base-2"}}},"spacing":{"padding":{"top":"var:preset|spacing|60","bottom":"var:preset|spacing|60","left":"var:preset|spacing|60","right":"var:preset|spacing|60"}}},"backgroundColor":"contrast","textColor":"base-2","layout":{"type":"constrained"}} -->
            <div class="wp-block-group has-base-2-color has-contrast-background-color has-text-color has-background has-link-color" style="padding-top:var(--wp--preset--spacing--60);padding-right:var(--wp--preset--spacing--60);padding-bottom:var(--wp--preset--spacing--60);padding-left:var(--wp--preset--spacing--60)"><!-- wp:paragraph {"align":"center","style":{"typography":{"lineHeight":"1.2"}},"textColor":"base","fontSize":"x-large","fontFamily":"heading"} -->
            <p class="has-text-align-center has-base-color has-text-color has-heading-font-family has-x-large-font-size" style="line-height:1.2">
                                        <em>“Études has saved us thousands of hours of work and has unlocked insights we never thought possible.”</em>
                                    </p>
            <!-- /wp:paragraph -->

            <!-- wp:spacer {"height":"var:preset|spacing|10"} -->
            <div style="height:var(--wp--preset--spacing--10)" aria-hidden="true" class="wp-block-spacer"></div>
            <!-- /wp:spacer -->

            <!-- wp:group {"metadata":{"name":"Testimonial source"},"style":{"spacing":{"blockGap":"0"}},"layout":{"type":"flex","orientation":"vertical","justifyContent":"center","flexWrap":"nowrap"}} -->
            <div class="wp-block-group"><!-- wp:image {"width":"60px","aspectRatio":"1","scale":"cover","sizeSlug":"thumbnail","linkDestination":"none","align":"center","style":{"border":{"radius":"100px"}}} -->
            <figure class="wp-block-image aligncenter size-thumbnail is-resized has-custom-border"><img alt="" style="border-radius:100px;aspect-ratio:1;object-fit:cover;width:60px"/></figure>
            <!-- /wp:image -->

            <!-- wp:paragraph {"align":"center","style":{"spacing":{"margin":{"top":"var:preset|spacing|10","bottom":"0"}}}} -->
            <p class="has-text-align-center" style="margin-top:var(--wp--preset--spacing--10);margin-bottom:0">Annie Steiner</p>
            <!-- /wp:paragraph -->

            <!-- wp:paragraph {"align":"center","style":{"typography":{"fontStyle":"normal","fontWeight":"300"}},"textColor":"contrast-3","fontSize":"small"} -->
            <p class="has-text-align-center has-contrast-3-color has-text-color has-small-font-size" style="font-style:normal;font-weight:300">CEO, Greenprint</p>
            <!-- /wp:paragraph --></div>
            <!-- /wp:group --></div>
            <!-- /wp:group --></div>
            <!-- /wp:lubus/slide -->

            <!-- wp:lubus/slide -->
            <div class="wp-block-lubus-slide swiper-slide"><!-- wp:group {"style":{"elements":{"link":{"color":{"text":"var:preset|color|base-2"}}},"spacing":{"padding":{"top":"var:preset|spacing|60","bottom":"var:preset|spacing|60","left":"var:preset|spacing|60","right":"var:preset|spacing|60"}}},"backgroundColor":"contrast","textColor":"base-2","layout":{"type":"constrained"}} -->
            <div class="wp-block-group has-base-2-color has-contrast-background-color has-text-color has-background has-link-color" style="padding-top:var(--wp--preset--spacing--60);padding-right:var(--wp--preset--spacing--60);padding-bottom:var(--wp--preset--spacing--60);padding-left:var(--wp--preset--spacing--60)"><!-- wp:paragraph {"align":"center","style":{"typography":{"lineHeight":"1.2"}},"textColor":"base","fontSize":"x-large","fontFamily":"heading"} -->
            <p class="has-text-align-center has-base-color has-text-color has-heading-font-family has-x-large-font-size" style="line-height:1.2">
                                        <em>“Études has saved us thousands of hours of work and has unlocked insights we never thought possible.”</em>
                                    </p>
            <!-- /wp:paragraph -->

            <!-- wp:spacer {"height":"var:preset|spacing|10"} -->
            <div style="height:var(--wp--preset--spacing--10)" aria-hidden="true" class="wp-block-spacer"></div>
            <!-- /wp:spacer -->

            <!-- wp:group {"metadata":{"name":"Testimonial source"},"style":{"spacing":{"blockGap":"0"}},"layout":{"type":"flex","orientation":"vertical","justifyContent":"center","flexWrap":"nowrap"}} -->
            <div class="wp-block-group"><!-- wp:image {"width":"60px","aspectRatio":"1","scale":"cover","sizeSlug":"thumbnail","linkDestination":"none","align":"center","style":{"border":{"radius":"100px"}}} -->
            <figure class="wp-block-image aligncenter size-thumbnail is-resized has-custom-border"><img alt="" style="border-radius:100px;aspect-ratio:1;object-fit:cover;width:60px"/></figure>
            <!-- /wp:image -->

            <!-- wp:paragraph {"align":"center","style":{"spacing":{"margin":{"top":"var:preset|spacing|10","bottom":"0"}}}} -->
            <p class="has-text-align-center" style="margin-top:var(--wp--preset--spacing--10);margin-bottom:0">Annie Steiner</p>
            <!-- /wp:paragraph -->

            <!-- wp:paragraph {"align":"center","style":{"typography":{"fontStyle":"normal","fontWeight":"300"}},"textColor":"contrast-3","fontSize":"small"} -->
            <p class="has-text-align-center has-contrast-3-color has-text-color has-small-font-size" style="font-style:normal;font-weight:300">CEO, Greenprint</p>
            <!-- /wp:paragraph --></div>
            <!-- /wp:group --></div>
            <!-- /wp:group --></div>
            <!-- /wp:lubus/slide -->

            <!-- wp:lubus/slide -->
            <div class="wp-block-lubus-slide swiper-slide"><!-- wp:group {"style":{"elements":{"link":{"color":{"text":"var:preset|color|base-2"}}},"spacing":{"padding":{"top":"var:preset|spacing|60","bottom":"var:preset|spacing|60","left":"var:preset|spacing|60","right":"var:preset|spacing|60"}}},"backgroundColor":"contrast","textColor":"base-2","layout":{"type":"constrained"}} -->
            <div class="wp-block-group has-base-2-color has-contrast-background-color has-text-color has-background has-link-color" style="padding-top:var(--wp--preset--spacing--60);padding-right:var(--wp--preset--spacing--60);padding-bottom:var(--wp--preset--spacing--60);padding-left:var(--wp--preset--spacing--60)"><!-- wp:paragraph {"align":"center","style":{"typography":{"lineHeight":"1.2"}},"textColor":"base","fontSize":"x-large","fontFamily":"heading"} -->
            <p class="has-text-align-center has-base-color has-text-color has-heading-font-family has-x-large-font-size" style="line-height:1.2">
                                        <em>“Études has saved us thousands of hours of work and has unlocked insights we never thought possible.”</em>
                                    </p>
            <!-- /wp:paragraph -->

            <!-- wp:spacer {"height":"var:preset|spacing|10"} -->
            <div style="height:var(--wp--preset--spacing--10)" aria-hidden="true" class="wp-block-spacer"></div>
            <!-- /wp:spacer -->

            <!-- wp:group {"metadata":{"name":"Testimonial source"},"style":{"spacing":{"blockGap":"0"}},"layout":{"type":"flex","orientation":"vertical","justifyContent":"center","flexWrap":"nowrap"}} -->
            <div class="wp-block-group"><!-- wp:image {"width":"60px","aspectRatio":"1","scale":"cover","sizeSlug":"thumbnail","linkDestination":"none","align":"center","style":{"border":{"radius":"100px"}}} -->
            <figure class="wp-block-image aligncenter size-thumbnail is-resized has-custom-border"><img alt="" style="border-radius:100px;aspect-ratio:1;object-fit:cover;width:60px"/></figure>
            <!-- /wp:image -->

            <!-- wp:paragraph {"align":"center","style":{"spacing":{"margin":{"top":"var:preset|spacing|10","bottom":"0"}}}} -->
            <p class="has-text-align-center" style="margin-top:var(--wp--preset--spacing--10);margin-bottom:0">Annie Steiner</p>
            <!-- /wp:paragraph -->

            <!-- wp:paragraph {"align":"center","style":{"typography":{"fontStyle":"normal","fontWeight":"300"}},"textColor":"contrast-3","fontSize":"small"} -->
            <p class="has-text-align-center has-contrast-3-color has-text-color has-small-font-size" style="font-style:normal;font-weight:300">CEO, Greenprint</p>
            <!-- /wp:paragraph --></div>
            <!-- /wp:group --></div>
            <!-- /wp:group --></div>
            <!-- /wp:lubus/slide -->

            <!-- wp:lubus/slide -->
            <div class="wp-block-lubus-slide swiper-slide"><!-- wp:group {"style":{"elements":{"link":{"color":{"text":"var:preset|color|base-2"}}},"spacing":{"padding":{"top":"var:preset|spacing|60","bottom":"var:preset|spacing|60","left":"var:preset|spacing|60","right":"var:preset|spacing|60"}}},"backgroundColor":"contrast","textColor":"base-2","layout":{"type":"constrained"}} -->
            <div class="wp-block-group has-base-2-color has-contrast-background-color has-text-color has-background has-link-color" style="padding-top:var(--wp--preset--spacing--60);padding-right:var(--wp--preset--spacing--60);padding-bottom:var(--wp--preset--spacing--60);padding-left:var(--wp--preset--spacing--60)"><!-- wp:paragraph {"align":"center","style":{"typography":{"lineHeight":"1.2"}},"textColor":"base","fontSize":"x-large","fontFamily":"heading"} -->
            <p class="has-text-align-center has-base-color has-text-color has-heading-font-family has-x-large-font-size" style="line-height:1.2">
                                        <em>“Études has saved us thousands of hours of work and has unlocked insights we never thought possible.”</em>
                                    </p>
            <!-- /wp:paragraph -->

            <!-- wp:spacer {"height":"var:preset|spacing|10"} -->
            <div style="height:var(--wp--preset--spacing--10)" aria-hidden="true" class="wp-block-spacer"></div>
            <!-- /wp:spacer -->

            <!-- wp:group {"metadata":{"name":"Testimonial source"},"style":{"spacing":{"blockGap":"0"}},"layout":{"type":"flex","orientation":"vertical","justifyContent":"center","flexWrap":"nowrap"}} -->
            <div class="wp-block-group"><!-- wp:image {"width":"60px","aspectRatio":"1","scale":"cover","sizeSlug":"thumbnail","linkDestination":"none","align":"center","style":{"border":{"radius":"100px"}}} -->
            <figure class="wp-block-image aligncenter size-thumbnail is-resized has-custom-border"><img alt="" style="border-radius:100px;aspect-ratio:1;object-fit:cover;width:60px"/></figure>
            <!-- /wp:image -->

            <!-- wp:paragraph {"align":"center","style":{"spacing":{"margin":{"top":"var:preset|spacing|10","bottom":"0"}}}} -->
            <p class="has-text-align-center" style="margin-top:var(--wp--preset--spacing--10);margin-bottom:0">Annie Steiner</p>
            <!-- /wp:paragraph -->

            <!-- wp:paragraph {"align":"center","style":{"typography":{"fontStyle":"normal","fontWeight":"300"}},"textColor":"contrast-3","fontSize":"small"} -->
            <p class="has-text-align-center has-contrast-3-color has-text-color has-small-font-size" style="font-style:normal;font-weight:300">CEO, Greenprint</p>
            <!-- /wp:paragraph --></div>
            <!-- /wp:group --></div>
            <!-- /wp:group --></div>
            <!-- /wp:lubus/slide --></div></div></div>
            <!-- /wp:lubus/slider -->`,
};

export default Template3;