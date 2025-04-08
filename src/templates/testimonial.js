/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n';

const Testimonial = {
	name: 'testimonial',
	title: __( 'Testimonial', 'blablablocks-slider-block' ),
	content: `
          <!-- wp:group {"metadata":{"name":"Testimonial"},"align":"full","style":{"spacing":{"blockGap":"0px","padding":{"left":"2vw","right":"2vw","top":"8vw","bottom":"8vw"}}},"layout":{"type":"default"}} -->
			<div class="wp-block-group alignfull" style="padding-top:8vw;padding-right:2vw;padding-bottom:8vw;padding-left:2vw"><!-- wp:heading {"textAlign":"center","level":1,"align":"wide","fontSize":"large"} -->
			<h1 class="wp-block-heading alignwide has-text-align-center has-large-font-size"><strong>WHAT OUR CLIENTS SAY ABOUT US</strong></h1>
			<!-- /wp:heading -->

			<!-- wp:blablablocks/slider {"className":"wp-block-blablablocks-slider wp-block-lubus-slider","style":{"spacing":{"padding":{"top":"40px","bottom":"80px","right":"10vw","left":"10vw"}}}} -->
			<!-- wp:blablablocks/slide {"className":"wp-block-lubus-slide"} -->
			<div class="wp-block-blablablocks-slide swiper-slide wp-block-lubus-slide"><!-- wp:group {"style":{"spacing":{"blockGap":"15px"}},"layout":{"type":"default"}} -->
			<div class="wp-block-group"><!-- wp:image {"id":2510,"sizeSlug":"full","linkDestination":"none","align":"center"} -->
			<figure class="wp-block-image aligncenter size-full"><img src="https://rollingnames.com/wp-content/uploads/2023/08/quote.png" alt="" class="wp-image-2510"/></figure>
			<!-- /wp:image -->

			<!-- wp:image {"width":"150px","height":"150px","scale":"cover","sizeSlug":"large","linkDestination":"none","align":"center","style":{"border":{"radius":"100px"}}} -->
			<figure class="wp-block-image aligncenter size-large is-resized has-custom-border"><img src="https://dotcompatterns.wordpress.com/wp-content/uploads/2024/01/paint-small.jpg" alt="" style="border-radius:100px;object-fit:cover;width:150px;height:150px"/></figure>
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
			<figure class="wp-block-image aligncenter size-large is-resized has-custom-border"><img src="https://dotcompatterns.wordpress.com/wp-content/uploads/2024/01/paint-small.jpg" alt="" style="border-radius:100px;object-fit:cover;width:150px;height:150px"/></figure>
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
			<figure class="wp-block-image aligncenter size-large is-resized has-custom-border"><img src="https://dotcompatterns.wordpress.com/wp-content/uploads/2024/01/paint-small.jpg" alt="" style="border-radius:100px;object-fit:cover;width:150px;height:150px"/></figure>
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
			<figure class="wp-block-image aligncenter size-large is-resized has-custom-border"><img src="https://dotcompatterns.wordpress.com/wp-content/uploads/2024/01/paint-small.jpg" alt="" style="border-radius:100px;object-fit:cover;width:150px;height:150px"/></figure>
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
			<!-- /wp:blablablocks/slider --></div>
			<!-- /wp:group -->`,
};

export default Testimonial;
