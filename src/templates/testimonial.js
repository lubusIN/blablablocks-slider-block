/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n';

const Testimonial = {
	name: 'testimonial',
	title: __('Testimonial', 'blablablocks-slider-block'),
	content: `
          <!-- wp:group {"metadata":{"name":"Testimonial"},"align":"full","style":{"spacing":{"blockGap":"0px","padding":{"left":"2vw","right":"2vw","top":"8vw","bottom":"8vw"}}},"layout":{"type":"default"}} -->
			<div class="wp-block-group alignfull" style="padding-top:8vw;padding-right:2vw;padding-bottom:8vw;padding-left:2vw"><!-- wp:heading {"textAlign":"center","level":1,"align":"wide","fontSize":"large"} -->
			<h1 class="wp-block-heading alignwide has-text-align-center has-large-font-size"><strong>WHAT OUR CLIENTS SAY ABOUT US</strong></h1>
			<!-- /wp:heading -->

			<!-- wp:blablablocks/slider {"className":"wp-block-lubus-slider","style":{"spacing":{"padding":{"top":"40px","bottom":"80px","right":"10vw","left":"10vw"}}}} -->
			<div style="padding-top:40px;padding-right:10vw;padding-bottom:80px;padding-left:10vw;--navigation-arrow-color:#000;--navigation-background-color:transparent;--navigation-arrow-hover-color:#333;--navigation-background-hover-color:transparent;--swiper-navigation-size:40px;--navigation-border-radius:4px 4px 4px 4px;--navigation-padding-top:0px;--navigation-padding-right:0px;--navigation-padding-bottom:0px;--navigation-padding-left:0px;--pagination-size:8px;--pagination-active-color:#000;--pagination-inactive-color:#ccc;--pagination-offset-top:auto;--pagination-offset-right:0px;--pagination-offset-bottom:8px;--pagination-offset-left:0px;--navigation-offset-top:50%;--navigation-offset-right:10px;--navigation-offset-bottom:0px;--navigation-offset-left:10px" class="wp-block-blablablocks-slider wp-block-lubus-slider"><div class="swiper" data-swiper="{&quot;slidesPerView&quot;:{&quot;desktop&quot;:1,&quot;tablet&quot;:1,&quot;mobile&quot;:1,&quot;activeDevice&quot;:&quot;desktop&quot;},&quot;slidesSpacing&quot;:{&quot;desktop&quot;:30,&quot;tablet&quot;:20,&quot;mobile&quot;:10,&quot;activeDevice&quot;:&quot;desktop&quot;},&quot;speed&quot;:300,&quot;effects&quot;:&quot;slide&quot;,&quot;autoplay&quot;:false,&quot;delay&quot;:5000,&quot;navigation&quot;:{&quot;desktop&quot;:true,&quot;tablet&quot;:true,&quot;mobile&quot;:true,&quot;activeDevice&quot;:&quot;desktop&quot;},&quot;pagination&quot;:{&quot;desktop&quot;:true,&quot;tablet&quot;:true,&quot;mobile&quot;:true,&quot;activeDevice&quot;:&quot;desktop&quot;},&quot;loop&quot;:false,&quot;className&quot;:&quot;wp-block-lubus-slider&quot;,&quot;style&quot;:{&quot;spacing&quot;:{&quot;padding&quot;:{&quot;top&quot;:&quot;40px&quot;,&quot;bottom&quot;:&quot;80px&quot;,&quot;right&quot;:&quot;10vw&quot;,&quot;left&quot;:&quot;10vw&quot;}}}}"><div class="swiper-wrapper"><!-- wp:blablablocks/slide {"className":"wp-block-lubus-slide"} -->
			<div class="wp-block-blablablocks-slide swiper-slide wp-block-lubus-slide"><!-- wp:group {"style":{"spacing":{"blockGap":"15px"}},"layout":{"type":"default"}} -->
			<div class="wp-block-group"><!-- wp:image {"id":2510,"sizeSlug":"full","linkDestination":"none","align":"center"} -->
			<figure class="wp-block-image aligncenter size-full"><img src="https://rollingnames.com/wp-content/uploads/2023/08/quote.png" alt="" class="wp-image-2510"/></figure>
			<!-- /wp:image -->

			<!-- wp:image {"width":"150px","height":"150px","scale":"cover","sizeSlug":"large","linkDestination":"none","align":"center","style":{"border":{"radius":"100px"}}} -->
			<figure class="wp-block-image aligncenter size-large is-resized has-custom-border"><img src="https://dotcompatterns.wordpress.com/wp-content/uploads/2024/01/paint-small.jpg" style="border-radius:100px;object-fit:cover;width:150px;height:150px"/></figure>
			<!-- /wp:image -->

			<!-- wp:paragraph {"align":"center","style":{"color":{"text":"#8a8a8a"},"typography":{"fontSize":"20px","fontStyle":"normal","fontWeight":"300","lineHeight":2,"letterSpacing":"0px"}},"fontFamily":"montserrat"} -->
			<p class="has-text-align-center has-text-color has-montserrat-font-family" style="color:#8a8a8a;font-size:20px;font-style:normal;font-weight:300;letter-spacing:0px;line-height:2">"Starting my role as a WordPress administrator has been a joy, thanks to its intuitive interface, media management, security, and plugin integration, making website management a breeze."</p>
			<!-- /wp:paragraph -->

			<!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"16px","fontStyle":"normal","fontWeight":"600"},"spacing":{"padding":{"bottom":"5px"}}}} -->
			<p class="has-text-align-center" style="padding-bottom:5px;font-size:16px;font-style:normal;font-weight:600">Pierre</p>
			<!-- /wp:paragraph -->

			<!-- wp:paragraph {"align":"center","style":{"spacing":{"margin":{"top":"0px"}},"color":{"text":"#8a8a8a"},"typography":{"fontSize":"12px","fontStyle":"normal","fontWeight":"300"}},"fontFamily":"raleway"} -->
			<p class="has-text-align-center has-text-color has-raleway-font-family" style="color:#8a8a8a;margin-top:0px;font-size:12px;font-style:normal;font-weight:300">Entrepreneur, Kitchenlogix</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:blablablocks/slide -->

			<!-- wp:blablablocks/slide {"className":"wp-block-lubus-slide"} -->
			<div class="wp-block-blablablocks-slide swiper-slide wp-block-lubus-slide"><!-- wp:group {"style":{"spacing":{"blockGap":"15px"}},"layout":{"type":"default"}} -->
			<div class="wp-block-group"><!-- wp:image {"id":2510,"sizeSlug":"full","linkDestination":"none","align":"center"} -->
			<figure class="wp-block-image aligncenter size-full"><img src="https://rollingnames.com/wp-content/uploads/2023/08/quote.png" alt="" class="wp-image-2510"/></figure>
			<!-- /wp:image -->

			<!-- wp:image {"width":"150px","height":"150px","scale":"cover","sizeSlug":"large","linkDestination":"none","align":"center","style":{"border":{"radius":"100px"}}} -->
			<figure class="wp-block-image aligncenter size-large is-resized has-custom-border"><img src="https://dotcompatterns.wordpress.com/wp-content/uploads/2024/01/paint-small.jpg" style="border-radius:100px;object-fit:cover;width:150px;height:150px"/></figure>
			<!-- /wp:image -->

			<!-- wp:paragraph {"align":"center","style":{"color":{"text":"#8a8a8a"},"typography":{"fontSize":"20px","fontStyle":"normal","fontWeight":"300","lineHeight":2,"letterSpacing":"0px"}},"fontFamily":"montserrat"} -->
			<p class="has-text-align-center has-text-color has-montserrat-font-family" style="color:#8a8a8a;font-size:20px;font-style:normal;font-weight:300;letter-spacing:0px;line-height:2">"Starting my role as a WordPress administrator has been a joy, thanks to its intuitive interface, media management, security, and plugin integration, making website management a breeze."</p>
			<!-- /wp:paragraph -->

			<!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"16px","fontStyle":"normal","fontWeight":"600"},"spacing":{"padding":{"bottom":"5px"}}}} -->
			<p class="has-text-align-center" style="padding-bottom:5px;font-size:16px;font-style:normal;font-weight:600">Pierre</p>
			<!-- /wp:paragraph -->

			<!-- wp:paragraph {"align":"center","style":{"spacing":{"margin":{"top":"0px"}},"color":{"text":"#8a8a8a"},"typography":{"fontSize":"12px","fontStyle":"normal","fontWeight":"300"}},"fontFamily":"raleway"} -->
			<p class="has-text-align-center has-text-color has-raleway-font-family" style="color:#8a8a8a;margin-top:0px;font-size:12px;font-style:normal;font-weight:300">Entrepreneur, Kitchenlogix</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:blablablocks/slide -->

			<!-- wp:blablablocks/slide {"className":"wp-block-lubus-slide"} -->
			<div class="wp-block-blablablocks-slide swiper-slide wp-block-lubus-slide"><!-- wp:group {"style":{"spacing":{"blockGap":"15px"}},"layout":{"type":"default"}} -->
			<div class="wp-block-group"><!-- wp:image {"id":2510,"sizeSlug":"full","linkDestination":"none","align":"center"} -->
			<figure class="wp-block-image aligncenter size-full"><img src="https://rollingnames.com/wp-content/uploads/2023/08/quote.png" alt="" class="wp-image-2510"/></figure>
			<!-- /wp:image -->

			<!-- wp:image {"width":"150px","height":"150px","scale":"cover","sizeSlug":"large","linkDestination":"none","align":"center","style":{"border":{"radius":"100px"}}} -->
			<figure class="wp-block-image aligncenter size-large is-resized has-custom-border"><img src="https://dotcompatterns.wordpress.com/wp-content/uploads/2024/01/paint-small.jpg" style="border-radius:100px;object-fit:cover;width:150px;height:150px"/></figure>
			<!-- /wp:image -->

			<!-- wp:paragraph {"align":"center","style":{"color":{"text":"#8a8a8a"},"typography":{"fontSize":"20px","fontStyle":"normal","fontWeight":"300","lineHeight":2,"letterSpacing":"0px"}},"fontFamily":"montserrat"} -->
			<p class="has-text-align-center has-text-color has-montserrat-font-family" style="color:#8a8a8a;font-size:20px;font-style:normal;font-weight:300;letter-spacing:0px;line-height:2">"Starting my role as a WordPress administrator has been a joy, thanks to its intuitive interface, media management, security, and plugin integration, making website management a breeze."</p>
			<!-- /wp:paragraph -->

			<!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"16px","fontStyle":"normal","fontWeight":"600"},"spacing":{"padding":{"bottom":"5px"}}}} -->
			<p class="has-text-align-center" style="padding-bottom:5px;font-size:16px;font-style:normal;font-weight:600">Pierre</p>
			<!-- /wp:paragraph -->

			<!-- wp:paragraph {"align":"center","style":{"spacing":{"margin":{"top":"0px"}},"color":{"text":"#8a8a8a"},"typography":{"fontSize":"12px","fontStyle":"normal","fontWeight":"300"}},"fontFamily":"raleway"} -->
			<p class="has-text-align-center has-text-color has-raleway-font-family" style="color:#8a8a8a;margin-top:0px;font-size:12px;font-style:normal;font-weight:300">Entrepreneur, Kitchenlogix</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:blablablocks/slide -->

			<!-- wp:blablablocks/slide {"className":"wp-block-lubus-slide"} -->
			<div class="wp-block-blablablocks-slide swiper-slide wp-block-lubus-slide"><!-- wp:group {"style":{"spacing":{"blockGap":"15px"}},"layout":{"type":"default"}} -->
			<div class="wp-block-group"><!-- wp:image {"id":2510,"sizeSlug":"full","linkDestination":"none","align":"center"} -->
			<figure class="wp-block-image aligncenter size-full"><img src="https://rollingnames.com/wp-content/uploads/2023/08/quote.png" alt="" class="wp-image-2510"/></figure>
			<!-- /wp:image -->

			<!-- wp:image {"width":"150px","height":"150px","scale":"cover","sizeSlug":"large","linkDestination":"none","align":"center","style":{"border":{"radius":"100px"}}} -->
			<figure class="wp-block-image aligncenter size-large is-resized has-custom-border"><img src="https://dotcompatterns.wordpress.com/wp-content/uploads/2024/01/paint-small.jpg" style="border-radius:100px;object-fit:cover;width:150px;height:150px"/></figure>
			<!-- /wp:image -->

			<!-- wp:paragraph {"align":"center","style":{"color":{"text":"#8a8a8a"},"typography":{"fontSize":"20px","fontStyle":"normal","fontWeight":"300","lineHeight":2,"letterSpacing":"0px"}},"fontFamily":"montserrat"} -->
			<p class="has-text-align-center has-text-color has-montserrat-font-family" style="color:#8a8a8a;font-size:20px;font-style:normal;font-weight:300;letter-spacing:0px;line-height:2">"Starting my role as a WordPress administrator has been a joy, thanks to its intuitive interface, media management, security, and plugin integration, making website management a breeze."</p>
			<!-- /wp:paragraph -->

			<!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"16px","fontStyle":"normal","fontWeight":"600"},"spacing":{"padding":{"bottom":"5px"}}}} -->
			<p class="has-text-align-center" style="padding-bottom:5px;font-size:16px;font-style:normal;font-weight:600">Pierre</p>
			<!-- /wp:paragraph -->

			<!-- wp:paragraph {"align":"center","style":{"spacing":{"margin":{"top":"0px"}},"color":{"text":"#8a8a8a"},"typography":{"fontSize":"12px","fontStyle":"normal","fontWeight":"300"}},"fontFamily":"raleway"} -->
			<p class="has-text-align-center has-text-color has-raleway-font-family" style="color:#8a8a8a;margin-top:0px;font-size:12px;font-style:normal;font-weight:300">Entrepreneur, Kitchenlogix</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:blablablocks/slide --></div></div></div>
			<!-- /wp:blablablocks/slider --></div>
			<!-- /wp:group -->`,
};

export default Testimonial;
