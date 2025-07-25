/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n';

const baseImageUrl = typeof BlablablocksData !== 'undefined' ? BlablablocksData.assetsUrl : '';

const AboutUs = {
    name: 'about-us',
    title: __('About Us', 'blablablocks-slider-block'),
    content: `
           <!-- wp:group {"metadata":{"name":"About Us"},"align":"full","style":{"spacing":{"blockGap":"0px","padding":{"left":"2vw","right":"2vw","top":"8vw","bottom":"8vw"}}},"backgroundColor":"contrast","layout":{"type":"constrained","contentSize":"1000px"}} -->
            <div class="wp-block-group alignfull has-contrast-background-color has-background" style="padding-top:8vw;padding-right:2vw;padding-bottom:8vw;padding-left:2vw"><!-- wp:blablablocks/slider {"pagination":{"desktop":false,"tablet":true,"mobile":false,"activeDevice":"desktop"},"loop":true,"navigationColor":{"arrowColor":{"default":"#ffffff","hover":"#ffffff"},"backgroundColor":{"default":"#000000","hover":"#000000"}},"navigationPadding":{"top":"8px","right":"12px","bottom":"8px","left":"12px"},"navigationSize":"20px","navigationSpacing":{"right":"24px","left":"24px"},"navigationOffset":{"left":"-30px","bottom":"30px","right":"30px"},"navigationPosition":"bottom right","navigationBorderRadius":"50%","style":{"spacing":{"padding":{"top":"40px","bottom":"80px","right":"5vw","left":"5vw"}}},"backgroundColor":"base-2"} -->
            <!-- wp:blablablocks/slide {"className":"wp-block-lubus-slide"} -->
            <div class="wp-block-blablablocks-slide swiper-slide wp-block-lubus-slide"><!-- wp:media-text {"mediaPosition":"right","mediaId":569,"mediaLink":"http://slider-block.local/?attachment_id=569","mediaType":"image","mediaWidth":30,"imageFill":false,"style":{"spacing":{"blockGap":"15px"}}} -->
            <div class="wp-block-media-text has-media-on-the-right is-stacked-on-mobile" style="grid-template-columns:auto 30%"><div class="wp-block-media-text__content"><!-- wp:paragraph -->
            <p>It's All About</p>
            <!-- /wp:paragraph -->

            <!-- wp:heading {"align":"center","style":{"border":{"radius":"100px"}},"fontSize":"xx-large"} -->
            <h2 class="wp-block-heading has-xx-large-font-size" style="border-radius:100px"><strong><strong>Being Your Own Builder.</strong></strong></h2>
            <!-- /wp:heading -->

            <!-- wp:paragraph {"style":{"typography":{"fontStyle":"normal","fontWeight":"300","lineHeight":2,"letterSpacing":"0px"}},"textColor":"contrast","fontSize":"medium","fontFamily":"montserrat"} -->
            <p class="has-contrast-color has-text-color has-montserrat-font-family has-medium-font-size" style="font-style:normal;font-weight:300;letter-spacing:0px;line-height:2">Blocks allow you to build your own custom posts and pages without any coding knowledge. Here’s a selection of the default blocks included with Gutenberg.</p>
            <!-- /wp:paragraph -->

            <!-- wp:buttons {"style":{"color":{"text":"#8a8a8a"},"typography":{"fontSize":"20px","fontStyle":"normal","fontWeight":"300","lineHeight":2,"letterSpacing":"0px"}},"fontFamily":"montserrat"} -->
            <div class="wp-block-buttons has-custom-font-size has-text-color has-montserrat-font-family" style="color:#8a8a8a;font-size:20px;font-style:normal;font-weight:300;letter-spacing:0px;line-height:2"><!-- wp:button {"textColor":"contrast","className":"is-style-outline","style":{"border":{"radius":"5px"},"elements":{"link":{"color":{"text":"var:preset|color|contrast"}}},"typography":{"fontStyle":"normal","fontWeight":"800"}},"fontSize":"medium"} -->
            <div class="wp-block-button is-style-outline"><a class="wp-block-button__link has-contrast-color has-text-color has-link-color has-medium-font-size has-custom-font-size wp-element-button" style="border-radius:5px;font-style:normal;font-weight:800">Get Started</a></div>
            <!-- /wp:button --></div>
            <!-- /wp:buttons --></div><figure class="wp-block-media-text__media"><img src="${baseImageUrl}/templates/about-us/blocks.png" alt="" class="wp-image-569 size-full"/></figure></div>
            <!-- /wp:media-text --></div>
            <!-- /wp:blablablocks/slide -->

            <!-- wp:blablablocks/slide {"className":"wp-block-lubus-slide"} -->
            <div class="wp-block-blablablocks-slide swiper-slide wp-block-lubus-slide"><!-- wp:media-text {"mediaPosition":"right","mediaId":571,"mediaLink":"http://slider-block.local/?attachment_id=571","mediaType":"image","mediaWidth":30,"style":{"spacing":{"blockGap":"15px"}}} -->
            <div class="wp-block-media-text has-media-on-the-right is-stacked-on-mobile" style="grid-template-columns:auto 30%"><div class="wp-block-media-text__content"><!-- wp:paragraph {"align":"left"} -->
            <p class="has-text-align-left">Say Hello To</p>
            <!-- /wp:paragraph -->

            <!-- wp:heading {"align":"center","style":{"border":{"radius":"100px"}},"fontSize":"xx-large"} -->
            <h2 class="wp-block-heading has-xx-large-font-size" style="border-radius:100px"><strong>Gutenberg, the WordPress Editor</strong></h2>
            <!-- /wp:heading -->

            <!-- wp:paragraph {"style":{"typography":{"fontStyle":"normal","fontWeight":"300","lineHeight":2,"letterSpacing":"0px"}},"textColor":"contrast","fontSize":"medium","fontFamily":"montserrat"} -->
            <p class="has-contrast-color has-text-color has-montserrat-font-family has-medium-font-size" style="font-style:normal;font-weight:300;letter-spacing:0px;line-height:2">Experience the flexibility that blocks allow, whether you’re building your first site or write code for a living.</p>
            <!-- /wp:paragraph -->

            <!-- wp:buttons {"style":{"color":{"text":"#8a8a8a"},"typography":{"fontSize":"20px","fontStyle":"normal","fontWeight":"300","lineHeight":2,"letterSpacing":"0px"}},"fontFamily":"montserrat"} -->
            <div class="wp-block-buttons has-custom-font-size has-text-color has-montserrat-font-family" style="color:#8a8a8a;font-size:20px;font-style:normal;font-weight:300;letter-spacing:0px;line-height:2"><!-- wp:button {"textColor":"contrast","className":"is-style-outline","style":{"border":{"radius":"5px"},"elements":{"link":{"color":{"text":"var:preset|color|contrast"}}},"typography":{"fontStyle":"normal","fontWeight":"800"}},"fontSize":"medium"} -->
            <div class="wp-block-button is-style-outline"><a class="wp-block-button__link has-contrast-color has-text-color has-link-color has-medium-font-size has-custom-font-size wp-element-button" style="border-radius:5px;font-style:normal;font-weight:800">Try Gutenberg</a></div>
            <!-- /wp:button --></div>
            <!-- /wp:buttons --></div><figure class="wp-block-media-text__media"><img src="${baseImageUrl}/templates/about-us/editor.png" alt="" class="wp-image-571 size-full"/></figure></div>
            <!-- /wp:media-text --></div>
            <!-- /wp:blablablocks/slide -->
            <!-- /wp:blablablocks/slider --></div>
            <!-- /wp:group -->`,
};

export default AboutUs;
