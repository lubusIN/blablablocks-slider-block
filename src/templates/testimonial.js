/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n';

const Testimonial = {
	name: 'testimonial',
	title: __( 'Testimonial', 'blablablocks-slider-block' ),
	description: __(
		'A compelling call-to-action with an image aligned to the right.',
		'blablablocks-slider-block'
	),
	content: `
        <!-- wp:group {"metadata":{"name":"Testimonial"},"align":"full","style":{"spacing":{"blockGap":"0px","padding":{"left":"2vw","right":"2vw","top":"8vw","bottom":"8vw"}}},"layout":{"type":"default"}} -->
                <div class="wp-block-group alignfull" style="padding-top:8vw;padding-right:2vw;padding-bottom:8vw;padding-left:2vw"><!-- wp:heading {"textAlign":"center","level":1,"align":"wide","fontSize":"x-large"} -->
                <h1 class="wp-block-heading alignwide has-text-align-center has-x-large-font-size"><strong>What people are saying</strong></h1>
                <!-- /wp:heading -->

                <!-- wp:lubus/slider {"style":{"spacing":{"padding":{"top":"40px","right":"4vw","left":"4vw","bottom":"80px"}}}} -->
                <div style="padding-top:40px;padding-right:4vw;padding-bottom:80px;padding-left:4vw;--swiper-navigation-size:40px;--navigation-border-radius:4px;--navigation-padding-top:0px;--navigation-padding-right:0px;--navigation-padding-bottom:0px;--navigation-padding-left:0px;--pagination-size:8px;--pagination-offset-top:auto;--pagination-offset-right:0px;--pagination-offset-bottom:8px;--pagination-offset-left:0px;--navigation-offset-top:50%;--navigation-offset-right:10px;--navigation-offset-bottom:0px;--navigation-offset-left:10px" class="wp-block-lubus-slider"><div class="swiper" data-swiper="{&quot;slidesPerView&quot;:{&quot;desktop&quot;:1,&quot;tablet&quot;:1,&quot;mobile&quot;:1,&quot;activeDevice&quot;:&quot;desktop&quot;},&quot;slidesSpacing&quot;:{&quot;desktop&quot;:30,&quot;tablet&quot;:20,&quot;mobile&quot;:10,&quot;activeDevice&quot;:&quot;desktop&quot;},&quot;speed&quot;:300,&quot;effects&quot;:&quot;slide&quot;,&quot;autoplay&quot;:false,&quot;delay&quot;:5000,&quot;navigation&quot;:true,&quot;pagination&quot;:true,&quot;loop&quot;:false,&quot;navigationColor&quot;:{&quot;arrowColor&quot;:{&quot;default&quot;:&quot;&quot;,&quot;hover&quot;:&quot;&quot;},&quot;backgroundColor&quot;:{&quot;default&quot;:&quot;&quot;,&quot;hover&quot;:&quot;&quot;}},&quot;navigationSize&quot;:&quot;40px&quot;,&quot;navigationOffset&quot;:{&quot;top&quot;:&quot;50%&quot;,&quot;bottom&quot;:&quot;0px&quot;,&quot;left&quot;:&quot;10px&quot;,&quot;right&quot;:&quot;10px&quot;},&quot;navigationBorderRadius&quot;:&quot;4px&quot;,&quot;paginationSize&quot;:&quot;8px&quot;,&quot;paginationOffset&quot;:{&quot;top&quot;:&quot;auto&quot;,&quot;bottom&quot;:&quot;8px&quot;,&quot;left&quot;:&quot;0px&quot;,&quot;right&quot;:&quot;0px&quot;},&quot;style&quot;:{&quot;spacing&quot;:{&quot;padding&quot;:{&quot;top&quot;:&quot;40px&quot;,&quot;right&quot;:&quot;4vw&quot;,&quot;left&quot;:&quot;4vw&quot;,&quot;bottom&quot;:&quot;80px&quot;}}}}"><div class="swiper-wrapper"><!-- wp:lubus/slide -->
                <div class="wp-block-lubus-slide swiper-slide"><!-- wp:group {"metadata":{},"align":"full","style":{"spacing":{"padding":{"top":"0px","bottom":"0px"},"margin":{"top":"0","bottom":"0"}}},"layout":{"type":"default"}} -->
                <div class="wp-block-group alignfull" style="margin-top:0;margin-bottom:0;padding-top:0px;padding-bottom:0px"><!-- wp:paragraph {"align":"center"} -->
                <p class="has-text-align-center">"Starting my role as a WordPress administrator has been a joy, thanks to its intuitive interface, media management, security, and plugin integration, making website management a breeze."</p>
                <!-- /wp:paragraph -->

                <!-- wp:spacer {"height":"calc( 0.25 * var(\u002d\u002dwp\u002d\u002dstyle\u002d\u002droot\u002d\u002dpadding-right, var(\u002d\u002dwp\u002d\u002dcustom\u002d\u002dgap\u002d\u002dhorizontal)))"} -->
                <div style="height:calc( 0.25 * var(--wp--style--root--padding-right, var(--wp--custom--gap--horizontal)))" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer -->

                <!-- wp:group {"layout":{"type":"flex","orientation":"vertical","justifyContent":"center"}} -->
                <div class="wp-block-group"><!-- wp:image {"id":13762,"width":"64px","aspectRatio":"1","scale":"cover","sizeSlug":"full","linkDestination":"none","style":{"border":{"radius":"100px"}}} -->
                <figure class="wp-block-image size-full is-resized has-custom-border"><img src="https://dotcompatterns.files.wordpress.com/2024/01/paint-small.jpg" alt="" class="wp-image-13762" style="border-radius:100px;aspect-ratio:1;object-fit:cover;width:64px"/></figure>
                <!-- /wp:image -->

                <!-- wp:group {"style":{"spacing":{"blockGap":"8px"}},"layout":{"type":"default"}} -->
                <div class="wp-block-group"><!-- wp:heading {"textAlign":"center","level":3,"fontSize":"medium"} -->
                <h3 class="wp-block-heading has-text-align-center has-medium-font-size">Liz S.</h3>
                <!-- /wp:heading -->

                <!-- wp:paragraph {"align":"center","fontSize":"small"} -->
                <p class="has-text-align-center has-small-font-size">Software engineer</p>
                <!-- /wp:paragraph --></div>
                <!-- /wp:group --></div>
                <!-- /wp:group --></div>
                <!-- /wp:group --></div>
                <!-- /wp:lubus/slide -->

                <!-- wp:lubus/slide -->
                <div class="wp-block-lubus-slide swiper-slide"><!-- wp:group {"metadata":{},"align":"full","style":{"spacing":{"padding":{"top":"0px","bottom":"0px"},"margin":{"top":"0","bottom":"0"}}},"layout":{"type":"default"}} -->
                <div class="wp-block-group alignfull" style="margin-top:0;margin-bottom:0;padding-top:0px;padding-bottom:0px"><!-- wp:paragraph {"align":"center"} -->
                <p class="has-text-align-center">"Starting my role as a WordPress administrator has been a joy, thanks to its intuitive interface, media management, security, and plugin integration, making website management a breeze."</p>
                <!-- /wp:paragraph -->

                <!-- wp:spacer {"height":"calc( 0.25 * var(\u002d\u002dwp\u002d\u002dstyle\u002d\u002droot\u002d\u002dpadding-right, var(\u002d\u002dwp\u002d\u002dcustom\u002d\u002dgap\u002d\u002dhorizontal)))"} -->
                <div style="height:calc( 0.25 * var(--wp--style--root--padding-right, var(--wp--custom--gap--horizontal)))" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer -->

                <!-- wp:group {"layout":{"type":"flex","orientation":"vertical","justifyContent":"center"}} -->
                <div class="wp-block-group"><!-- wp:image {"id":13762,"width":"64px","aspectRatio":"1","scale":"cover","sizeSlug":"full","linkDestination":"none","style":{"border":{"radius":"100px"}}} -->
                <figure class="wp-block-image size-full is-resized has-custom-border"><img src="https://dotcompatterns.files.wordpress.com/2024/01/paint-small.jpg" alt="" class="wp-image-13762" style="border-radius:100px;aspect-ratio:1;object-fit:cover;width:64px"/></figure>
                <!-- /wp:image -->

                <!-- wp:group {"style":{"spacing":{"blockGap":"8px"}},"layout":{"type":"default"}} -->
                <div class="wp-block-group"><!-- wp:heading {"textAlign":"center","level":3,"fontSize":"medium"} -->
                <h3 class="wp-block-heading has-text-align-center has-medium-font-size">Mike W.</h3>
                <!-- /wp:heading -->

                <!-- wp:paragraph {"align":"center","fontSize":"small"} -->
                <p class="has-text-align-center has-small-font-size">Software engineer</p>
                <!-- /wp:paragraph --></div>
                <!-- /wp:group --></div>
                <!-- /wp:group --></div>
                <!-- /wp:group --></div>
                <!-- /wp:lubus/slide -->

                <!-- wp:lubus/slide -->
                <div class="wp-block-lubus-slide swiper-slide"><!-- wp:group {"metadata":{},"align":"full","style":{"spacing":{"padding":{"top":"0px","bottom":"0px"},"margin":{"top":"0","bottom":"0"}}},"layout":{"type":"default"}} -->
                <div class="wp-block-group alignfull" style="margin-top:0;margin-bottom:0;padding-top:0px;padding-bottom:0px"><!-- wp:paragraph {"align":"center"} -->
                <p class="has-text-align-center">"Starting my role as a WordPress administrator has been a joy, thanks to its intuitive interface, media management, security, and plugin integration, making website management a breeze."</p>
                <!-- /wp:paragraph -->

                <!-- wp:spacer {"height":"calc( 0.25 * var(\u002d\u002dwp\u002d\u002dstyle\u002d\u002droot\u002d\u002dpadding-right, var(\u002d\u002dwp\u002d\u002dcustom\u002d\u002dgap\u002d\u002dhorizontal)))"} -->
                <div style="height:calc( 0.25 * var(--wp--style--root--padding-right, var(--wp--custom--gap--horizontal)))" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer -->

                <!-- wp:group {"layout":{"type":"flex","orientation":"vertical","justifyContent":"center"}} -->
                <div class="wp-block-group"><!-- wp:image {"id":13762,"width":"64px","aspectRatio":"1","scale":"cover","sizeSlug":"full","linkDestination":"none","style":{"border":{"radius":"100px"}}} -->
                <figure class="wp-block-image size-full is-resized has-custom-border"><img src="https://dotcompatterns.files.wordpress.com/2024/01/paint-small.jpg" alt="" class="wp-image-13762" style="border-radius:100px;aspect-ratio:1;object-fit:cover;width:64px"/></figure>
                <!-- /wp:image -->

                <!-- wp:group {"style":{"spacing":{"blockGap":"8px"}},"layout":{"type":"default"}} -->
                <div class="wp-block-group"><!-- wp:heading {"textAlign":"center","level":3,"fontSize":"medium"} -->
                <h3 class="wp-block-heading has-text-align-center has-medium-font-size">Harry T.</h3>
                <!-- /wp:heading -->

                <!-- wp:paragraph {"align":"center","fontSize":"small"} -->
                <p class="has-text-align-center has-small-font-size">Software engineer</p>
                <!-- /wp:paragraph --></div>
                <!-- /wp:group --></div>
                <!-- /wp:group --></div>
                <!-- /wp:group --></div>
                <!-- /wp:lubus/slide -->

                <!-- wp:lubus/slide -->
                <div class="wp-block-lubus-slide swiper-slide"><!-- wp:group {"metadata":{},"align":"full","style":{"spacing":{"padding":{"top":"0px","bottom":"0px"},"margin":{"top":"0","bottom":"0"}}},"layout":{"type":"default"}} -->
                <div class="wp-block-group alignfull" style="margin-top:0;margin-bottom:0;padding-top:0px;padding-bottom:0px"><!-- wp:paragraph {"align":"center"} -->
                <p class="has-text-align-center">"Starting my role as a WordPress administrator has been a joy, thanks to its intuitive interface, media management, security, and plugin integration, making website management a breeze."</p>
                <!-- /wp:paragraph -->

                <!-- wp:spacer {"height":"calc( 0.25 * var(\u002d\u002dwp\u002d\u002dstyle\u002d\u002droot\u002d\u002dpadding-right, var(\u002d\u002dwp\u002d\u002dcustom\u002d\u002dgap\u002d\u002dhorizontal)))"} -->
                <div style="height:calc( 0.25 * var(--wp--style--root--padding-right, var(--wp--custom--gap--horizontal)))" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer -->

                <!-- wp:group {"layout":{"type":"flex","orientation":"vertical","justifyContent":"center"}} -->
                <div class="wp-block-group"><!-- wp:image {"id":13762,"width":"64px","aspectRatio":"1","scale":"cover","sizeSlug":"full","linkDestination":"none","style":{"border":{"radius":"100px"}}} -->
                <figure class="wp-block-image size-full is-resized has-custom-border"><img src="https://dotcompatterns.files.wordpress.com/2024/01/paint-small.jpg" alt="" class="wp-image-13762" style="border-radius:100px;aspect-ratio:1;object-fit:cover;width:64px"/></figure>
                <!-- /wp:image -->

                <!-- wp:group {"style":{"spacing":{"blockGap":"8px"}},"layout":{"type":"default"}} -->
                <div class="wp-block-group"><!-- wp:heading {"textAlign":"center","level":3,"fontSize":"medium"} -->
                <h3 class="wp-block-heading has-text-align-center has-medium-font-size">Michael W.</h3>
                <!-- /wp:heading -->

                <!-- wp:paragraph {"align":"center","fontSize":"small"} -->
                <p class="has-text-align-center has-small-font-size">Software engineer</p>
                <!-- /wp:paragraph --></div>
                <!-- /wp:group --></div>
                <!-- /wp:group --></div>
                <!-- /wp:group --></div>
                <!-- /wp:lubus/slide -->

                <!-- wp:lubus/slide -->
                <div class="wp-block-lubus-slide swiper-slide"><!-- wp:group {"metadata":{},"align":"full","style":{"spacing":{"padding":{"top":"0px","bottom":"0px"},"margin":{"top":"0","bottom":"0"}}},"layout":{"type":"default"}} -->
                <div class="wp-block-group alignfull" style="margin-top:0;margin-bottom:0;padding-top:0px;padding-bottom:0px"><!-- wp:paragraph {"align":"center"} -->
                <p class="has-text-align-center">"Starting my role as a WordPress administrator has been a joy, thanks to its intuitive interface, media management, security, and plugin integration, making website management a breeze."</p>
                <!-- /wp:paragraph -->

                <!-- wp:spacer {"height":"calc( 0.25 * var(\u002d\u002dwp\u002d\u002dstyle\u002d\u002droot\u002d\u002dpadding-right, var(\u002d\u002dwp\u002d\u002dcustom\u002d\u002dgap\u002d\u002dhorizontal)))"} -->
                <div style="height:calc( 0.25 * var(--wp--style--root--padding-right, var(--wp--custom--gap--horizontal)))" aria-hidden="true" class="wp-block-spacer"></div>
                <!-- /wp:spacer -->

                <!-- wp:group {"layout":{"type":"flex","orientation":"vertical","justifyContent":"center"}} -->
                <div class="wp-block-group"><!-- wp:image {"id":13762,"width":"64px","aspectRatio":"1","scale":"cover","sizeSlug":"full","linkDestination":"none","style":{"border":{"radius":"100px"}}} -->
                <figure class="wp-block-image size-full is-resized has-custom-border"><img src="https://dotcompatterns.files.wordpress.com/2024/01/paint-small.jpg" alt="" class="wp-image-13762" style="border-radius:100px;aspect-ratio:1;object-fit:cover;width:64px"/></figure>
                <!-- /wp:image -->

                <!-- wp:group {"style":{"spacing":{"blockGap":"8px"}},"layout":{"type":"default"}} -->
                <div class="wp-block-group"><!-- wp:heading {"textAlign":"center","level":3,"fontSize":"medium"} -->
                <h3 class="wp-block-heading has-text-align-center has-medium-font-size">Shaun P.</h3>
                <!-- /wp:heading -->

                <!-- wp:paragraph {"align":"center","fontSize":"small"} -->
                <p class="has-text-align-center has-small-font-size">Software engineer</p>
                <!-- /wp:paragraph --></div>
                <!-- /wp:group --></div>
                <!-- /wp:group --></div>
                <!-- /wp:group --></div>
                <!-- /wp:lubus/slide --></div></div></div>
                <!-- /wp:lubus/slider --></div>
        <!-- /wp:group -->`,
};

export default Testimonial;
