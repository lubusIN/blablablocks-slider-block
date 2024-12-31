/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n';

const Testimonial2 = {
	name: 'testimonial-2',
	title: __( 'Testimonial 2', 'blablablocks-slider-block' ),
	description: __(
		'A simple centered call-to-action for subscribing.',
		'blablablocks-slider-block'
	),
	content: `
           <!-- wp:group {"metadata":{"name":"Testimonial 2"},"align":"full","style":{"spacing":{"blockGap":"0px","padding":{"left":"2vw","right":"2vw","top":"8vw","bottom":"8vw"}}},"layout":{"type":"default"}} -->
				<div class="wp-block-group alignfull" style="padding-top:8vw;padding-right:2vw;padding-bottom:8vw;padding-left:2vw"><!-- wp:heading {"textAlign":"center","level":1,"align":"wide","fontSize":"large"} -->
				<h1 class="wp-block-heading alignwide has-text-align-center has-large-font-size"><strong>WHAT OUR CLIENTS SAY ABOUT US</strong></h1>
				<!-- /wp:heading -->

				<!-- wp:lubus/slider {"style":{"spacing":{"padding":{"top":"40px","bottom":"80px","right":"10vw","left":"10vw"}}}} -->
				<div style="padding-top:40px;padding-right:10vw;padding-bottom:80px;padding-left:10vw;--swiper-navigation-size:40px;--navigation-border-radius:4px;--navigation-padding-top:0px;--navigation-padding-right:0px;--navigation-padding-bottom:0px;--navigation-padding-left:0px;--pagination-size:8px;--pagination-offset-top:auto;--pagination-offset-right:0px;--pagination-offset-bottom:8px;--pagination-offset-left:0px;--navigation-offset-top:50%;--navigation-offset-right:10px;--navigation-offset-bottom:0px;--navigation-offset-left:10px" class="wp-block-lubus-slider"><div class="swiper" data-swiper="{&quot;slidesPerView&quot;:{&quot;desktop&quot;:1,&quot;tablet&quot;:1,&quot;mobile&quot;:1,&quot;activeDevice&quot;:&quot;desktop&quot;},&quot;slidesSpacing&quot;:{&quot;desktop&quot;:30,&quot;tablet&quot;:20,&quot;mobile&quot;:10,&quot;activeDevice&quot;:&quot;desktop&quot;},&quot;speed&quot;:300,&quot;effects&quot;:&quot;slide&quot;,&quot;autoplay&quot;:false,&quot;delay&quot;:5000,&quot;navigation&quot;:true,&quot;pagination&quot;:true,&quot;loop&quot;:false,&quot;navigationColor&quot;:{&quot;arrowColor&quot;:{&quot;default&quot;:&quot;&quot;,&quot;hover&quot;:&quot;&quot;},&quot;backgroundColor&quot;:{&quot;default&quot;:&quot;&quot;,&quot;hover&quot;:&quot;&quot;}},&quot;navigationSize&quot;:&quot;40px&quot;,&quot;navigationOffset&quot;:{&quot;top&quot;:&quot;50%&quot;,&quot;bottom&quot;:&quot;0px&quot;,&quot;left&quot;:&quot;10px&quot;,&quot;right&quot;:&quot;10px&quot;},&quot;navigationBorderRadius&quot;:&quot;4px&quot;,&quot;paginationSize&quot;:&quot;8px&quot;,&quot;paginationOffset&quot;:{&quot;top&quot;:&quot;auto&quot;,&quot;bottom&quot;:&quot;8px&quot;,&quot;left&quot;:&quot;0px&quot;,&quot;right&quot;:&quot;0px&quot;},&quot;style&quot;:{&quot;spacing&quot;:{&quot;padding&quot;:{&quot;top&quot;:&quot;40px&quot;,&quot;bottom&quot;:&quot;80px&quot;,&quot;right&quot;:&quot;10vw&quot;,&quot;left&quot;:&quot;10vw&quot;}}}}"><div class="swiper-wrapper"><!-- wp:lubus/slide -->
				<div class="wp-block-lubus-slide swiper-slide"><!-- wp:group {"style":{"spacing":{"blockGap":"15px"}},"layout":{"type":"default"}} -->
				<div class="wp-block-group"><!-- wp:image {"id":2510,"sizeSlug":"full","linkDestination":"none","align":"center"} -->
				<figure class="wp-block-image aligncenter size-full"><img src="https://rollingnames.com/wp-content/uploads/2023/08/quote.png" alt="" class="wp-image-2510"/></figure>
				<!-- /wp:image -->

				<!-- wp:image {"id":181,"width":"150px","height":"150px","scale":"cover","sizeSlug":"full","linkDestination":"none","align":"center","style":{"border":{"radius":"100px"}}} -->
				<figure class="wp-block-image aligncenter size-full is-resized has-custom-border"><img src="http://slider-block.local/wp-content/uploads/2024/12/brooke-cagle-wKOKidNT14w-unsplash-scaled.jpg" alt="" class="wp-image-181" style="border-radius:100px;object-fit:cover;width:150px;height:150px"/></figure>
				<!-- /wp:image -->

				<!-- wp:paragraph {"align":"center","style":{"color":{"text":"#8a8a8a"},"typography":{"fontSize":"20px","fontStyle":"normal","fontWeight":"300","lineHeight":2,"letterSpacing":"0px"}},"fontFamily":"montserrat"} -->
				<p class="has-text-align-center has-text-color has-montserrat-font-family" style="color:#8a8a8a;font-size:20px;font-style:normal;font-weight:300;letter-spacing:0px;line-height:2">"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."</p>
				<!-- /wp:paragraph -->

				<!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"16px","fontStyle":"normal","fontWeight":"600"},"spacing":{"padding":{"bottom":"5px"}}}} -->
				<p class="has-text-align-center" style="padding-bottom:5px;font-size:16px;font-style:normal;font-weight:600">Pierre</p>
				<!-- /wp:paragraph -->

				<!-- wp:paragraph {"align":"center","style":{"spacing":{"margin":{"top":"0px"}},"color":{"text":"#8a8a8a"},"typography":{"fontSize":"12px","fontStyle":"normal","fontWeight":"300"}},"fontFamily":"raleway"} -->
				<p class="has-text-align-center has-text-color has-raleway-font-family" style="color:#8a8a8a;margin-top:0px;font-size:12px;font-style:normal;font-weight:300">Entrepreneur, Kitchenlogix</p>
				<!-- /wp:paragraph --></div>
				<!-- /wp:group --></div>
				<!-- /wp:lubus/slide -->

				<!-- wp:lubus/slide -->
				<div class="wp-block-lubus-slide swiper-slide"><!-- wp:group {"style":{"spacing":{"blockGap":"15px"}},"layout":{"type":"default"}} -->
				<div class="wp-block-group"><!-- wp:image {"id":2510,"sizeSlug":"full","linkDestination":"none","align":"center"} -->
				<figure class="wp-block-image aligncenter size-full"><img src="https://rollingnames.com/wp-content/uploads/2023/08/quote.png" alt="" class="wp-image-2510"/></figure>
				<!-- /wp:image -->

				<!-- wp:image {"id":181,"width":"150px","height":"150px","scale":"cover","sizeSlug":"full","linkDestination":"none","align":"center","style":{"border":{"radius":"100px"}}} -->
				<figure class="wp-block-image aligncenter size-full is-resized has-custom-border"><img src="http://slider-block.local/wp-content/uploads/2024/12/brooke-cagle-wKOKidNT14w-unsplash-scaled.jpg" alt="" class="wp-image-181" style="border-radius:100px;object-fit:cover;width:150px;height:150px"/></figure>
				<!-- /wp:image -->

				<!-- wp:paragraph {"align":"center","style":{"color":{"text":"#8a8a8a"},"typography":{"fontSize":"20px","fontStyle":"normal","fontWeight":"300","lineHeight":2,"letterSpacing":"0px"}},"fontFamily":"montserrat"} -->
				<p class="has-text-align-center has-text-color has-montserrat-font-family" style="color:#8a8a8a;font-size:20px;font-style:normal;font-weight:300;letter-spacing:0px;line-height:2">"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."</p>
				<!-- /wp:paragraph -->

				<!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"16px","fontStyle":"normal","fontWeight":"600"},"spacing":{"padding":{"bottom":"5px"}}}} -->
				<p class="has-text-align-center" style="padding-bottom:5px;font-size:16px;font-style:normal;font-weight:600">Pierre</p>
				<!-- /wp:paragraph -->

				<!-- wp:paragraph {"align":"center","style":{"spacing":{"margin":{"top":"0px"}},"color":{"text":"#8a8a8a"},"typography":{"fontSize":"12px","fontStyle":"normal","fontWeight":"300"}},"fontFamily":"raleway"} -->
				<p class="has-text-align-center has-text-color has-raleway-font-family" style="color:#8a8a8a;margin-top:0px;font-size:12px;font-style:normal;font-weight:300">Entrepreneur, Kitchenlogix</p>
				<!-- /wp:paragraph --></div>
				<!-- /wp:group --></div>
				<!-- /wp:lubus/slide -->

				<!-- wp:lubus/slide -->
				<div class="wp-block-lubus-slide swiper-slide"><!-- wp:group {"style":{"spacing":{"blockGap":"15px"}},"layout":{"type":"default"}} -->
				<div class="wp-block-group"><!-- wp:image {"id":2510,"sizeSlug":"full","linkDestination":"none","align":"center"} -->
				<figure class="wp-block-image aligncenter size-full"><img src="https://rollingnames.com/wp-content/uploads/2023/08/quote.png" alt="" class="wp-image-2510"/></figure>
				<!-- /wp:image -->

				<!-- wp:image {"id":181,"width":"150px","height":"150px","scale":"cover","sizeSlug":"full","linkDestination":"none","align":"center","style":{"border":{"radius":"100px"}}} -->
				<figure class="wp-block-image aligncenter size-full is-resized has-custom-border"><img src="http://slider-block.local/wp-content/uploads/2024/12/brooke-cagle-wKOKidNT14w-unsplash-scaled.jpg" alt="" class="wp-image-181" style="border-radius:100px;object-fit:cover;width:150px;height:150px"/></figure>
				<!-- /wp:image -->

				<!-- wp:paragraph {"align":"center","style":{"color":{"text":"#8a8a8a"},"typography":{"fontSize":"20px","fontStyle":"normal","fontWeight":"300","lineHeight":2,"letterSpacing":"0px"}},"fontFamily":"montserrat"} -->
				<p class="has-text-align-center has-text-color has-montserrat-font-family" style="color:#8a8a8a;font-size:20px;font-style:normal;font-weight:300;letter-spacing:0px;line-height:2">"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."</p>
				<!-- /wp:paragraph -->

				<!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"16px","fontStyle":"normal","fontWeight":"600"},"spacing":{"padding":{"bottom":"5px"}}}} -->
				<p class="has-text-align-center" style="padding-bottom:5px;font-size:16px;font-style:normal;font-weight:600">Pierre</p>
				<!-- /wp:paragraph -->

				<!-- wp:paragraph {"align":"center","style":{"spacing":{"margin":{"top":"0px"}},"color":{"text":"#8a8a8a"},"typography":{"fontSize":"12px","fontStyle":"normal","fontWeight":"300"}},"fontFamily":"raleway"} -->
				<p class="has-text-align-center has-text-color has-raleway-font-family" style="color:#8a8a8a;margin-top:0px;font-size:12px;font-style:normal;font-weight:300">Entrepreneur, Kitchenlogix</p>
				<!-- /wp:paragraph --></div>
				<!-- /wp:group --></div>
				<!-- /wp:lubus/slide -->

				<!-- wp:lubus/slide -->
				<div class="wp-block-lubus-slide swiper-slide"><!-- wp:group {"style":{"spacing":{"blockGap":"15px"}},"layout":{"type":"default"}} -->
				<div class="wp-block-group"><!-- wp:image {"id":2510,"sizeSlug":"full","linkDestination":"none","align":"center"} -->
				<figure class="wp-block-image aligncenter size-full"><img src="https://rollingnames.com/wp-content/uploads/2023/08/quote.png" alt="" class="wp-image-2510"/></figure>
				<!-- /wp:image -->

				<!-- wp:image {"id":181,"width":"150px","height":"150px","scale":"cover","sizeSlug":"full","linkDestination":"none","align":"center","style":{"border":{"radius":"100px"}}} -->
				<figure class="wp-block-image aligncenter size-full is-resized has-custom-border"><img src="http://slider-block.local/wp-content/uploads/2024/12/brooke-cagle-wKOKidNT14w-unsplash-scaled.jpg" alt="" class="wp-image-181" style="border-radius:100px;object-fit:cover;width:150px;height:150px"/></figure>
				<!-- /wp:image -->

				<!-- wp:paragraph {"align":"center","style":{"color":{"text":"#8a8a8a"},"typography":{"fontSize":"20px","fontStyle":"normal","fontWeight":"300","lineHeight":2,"letterSpacing":"0px"}},"fontFamily":"montserrat"} -->
				<p class="has-text-align-center has-text-color has-montserrat-font-family" style="color:#8a8a8a;font-size:20px;font-style:normal;font-weight:300;letter-spacing:0px;line-height:2">"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."</p>
				<!-- /wp:paragraph -->

				<!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"16px","fontStyle":"normal","fontWeight":"600"},"spacing":{"padding":{"bottom":"5px"}}}} -->
				<p class="has-text-align-center" style="padding-bottom:5px;font-size:16px;font-style:normal;font-weight:600">Pierre</p>
				<!-- /wp:paragraph -->

				<!-- wp:paragraph {"align":"center","style":{"spacing":{"margin":{"top":"0px"}},"color":{"text":"#8a8a8a"},"typography":{"fontSize":"12px","fontStyle":"normal","fontWeight":"300"}},"fontFamily":"raleway"} -->
				<p class="has-text-align-center has-text-color has-raleway-font-family" style="color:#8a8a8a;margin-top:0px;font-size:12px;font-style:normal;font-weight:300">Entrepreneur, Kitchenlogix</p>
				<!-- /wp:paragraph --></div>
				<!-- /wp:group --></div>
				<!-- /wp:lubus/slide --></div></div></div>
				<!-- /wp:lubus/slider --></div>
			<!-- /wp:group -->`,
};

export default Testimonial2;
