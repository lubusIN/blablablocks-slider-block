/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n';

const baseImageUrl =
	typeof window !== 'undefined'
		? window.BlablablocksData?.assetsUrl ?? ''
		: '';

const Testimonial = {
	name: 'testimonial',
	title: __( 'Testimonial', 'blablablocks-slider-block' ),
	content: `
        	<!-- wp:group {"metadata":{"name":"Testimonial"},"align":"full","style":{"spacing":{"blockGap":"0px","padding":{"left":"2vw","right":"2vw","top":"8vw","bottom":"8vw"}}},"layout":{"type":"default"}} -->
			<div class="wp-block-group alignfull" style="padding-top:8vw;padding-right:2vw;padding-bottom:8vw;padding-left:2vw"><!-- wp:blablablocks/slider {"loop":true,"navigationSize":"2.15rem","navigationSpacing":{"right":"var:preset|spacing|30","left":"var:preset|spacing|30"},"navigationPosition":"center center","paginationOffset":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"className":"wp-block-blablablocks-slider wp-block-lubus-slider","style":{"spacing":{"padding":{"top":"40px","bottom":"40px","right":"10vw","left":"10vw"}}}} -->
			<!-- wp:blablablocks/slide {"className":"wp-block-lubus-slide"} -->
			<div class="wp-block-blablablocks-slide swiper-slide wp-block-lubus-slide"><!-- wp:group {"style":{"spacing":{"blockGap":"15px"}},"layout":{"type":"default"}} -->
			<div class="wp-block-group"><!-- wp:heading {"textAlign":"center","level":1,"align":"wide","fontSize":"large"} -->
			<h1 class="wp-block-heading alignwide has-text-align-center has-large-font-size"><strong><strong>Exceptional!</strong></strong></h1>
			<!-- /wp:heading -->

			<!-- wp:image {"id":2510,"sizeSlug":"full","linkDestination":"none","align":"center"} -->
			<figure class="wp-block-image aligncenter size-full"><img src="${ baseImageUrl }/templates/testimonial/quote.png" alt="" class="wp-image-2510"/></figure>
			<!-- /wp:image -->

			<!-- wp:image {"width":"100px","height":"100px","scale":"cover","sizeSlug":"large","align":"center","style":{"border":{"radius":"100px"}}} -->
			<figure class="wp-block-image aligncenter size-large is-resized has-custom-border"><img src="${ baseImageUrl }/templates/testimonial/nakamura.jpeg" alt="" style="border-radius:100px;object-fit:cover;width:100px;height:100px"/></figure>
			<!-- /wp:image -->

			<!-- wp:paragraph {"align":"center","style":{"color":{"text":"#8a8a8a"},"typography":{"fontSize":"20px","fontStyle":"normal","fontWeight":"300","lineHeight":2,"letterSpacing":"0px"}},"fontFamily":"montserrat"} -->
			<p class="has-text-align-center has-text-color has-montserrat-font-family" style="color:#8a8a8a;font-size:20px;font-style:normal;font-weight:300;letter-spacing:0px;line-height:2">I couldn’t be happier with my purchase. The quality is outstanding, and the attention to detail is impressive. I’ll definitely be back for more!</p>
			<!-- /wp:paragraph -->

			<!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"16px","fontStyle":"normal","fontWeight":"600"},"spacing":{"padding":{"bottom":"5px"}}}} -->
			<p class="has-text-align-center" style="padding-bottom:5px;font-size:16px;font-style:normal;font-weight:600"><em>— Aya Nakamura</em></p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:blablablocks/slide -->

			<!-- wp:blablablocks/slide {"className":"wp-block-lubus-slide"} -->
			<div class="wp-block-blablablocks-slide swiper-slide wp-block-lubus-slide"><!-- wp:group {"style":{"spacing":{"blockGap":"15px"}},"layout":{"type":"default"}} -->
			<div class="wp-block-group"><!-- wp:heading {"textAlign":"center","level":1,"align":"wide","fontSize":"large"} -->
			<h1 class="wp-block-heading alignwide has-text-align-center has-large-font-size"><strong><strong>Highly recommend!</strong></strong></h1>
			<!-- /wp:heading -->

			<!-- wp:image {"id":2510,"sizeSlug":"full","linkDestination":"none","align":"center"} -->
			<figure class="wp-block-image aligncenter size-full"><img src="${ baseImageUrl }/templates/testimonial/quote.png" alt="" class="wp-image-2510"/></figure>
			<!-- /wp:image -->

			<!-- wp:image {"width":"100px","height":"100px","scale":"cover","sizeSlug":"large","align":"center","style":{"border":{"radius":"100px"}}} -->
			<figure class="wp-block-image aligncenter size-large is-resized has-custom-border"><img src="${ baseImageUrl }/templates/testimonial/mateo.jpeg" alt="" style="border-radius:100px;object-fit:cover;width:100px;height:100px"/></figure>
			<!-- /wp:image -->

			<!-- wp:paragraph {"align":"center","style":{"color":{"text":"#8a8a8a"},"typography":{"fontSize":"20px","fontStyle":"normal","fontWeight":"300","lineHeight":2,"letterSpacing":"0px"}},"fontFamily":"montserrat"} -->
			<p class="has-text-align-center has-text-color has-montserrat-font-family" style="color:#8a8a8a;font-size:20px;font-style:normal;font-weight:300;letter-spacing:0px;line-height:2">From start to finish, the process was seamless. It’s better than I imagined, and the customer support was incredibly responsive and friendly.</p>
			<!-- /wp:paragraph -->

			<!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"16px","fontStyle":"normal","fontWeight":"600"},"spacing":{"padding":{"bottom":"5px"}}}} -->
			<p class="has-text-align-center" style="padding-bottom:5px;font-size:16px;font-style:normal;font-weight:600"><em>— Mateo García</em></p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:blablablocks/slide -->

			<!-- wp:blablablocks/slide {"className":"wp-block-lubus-slide"} -->
			<div class="wp-block-blablablocks-slide swiper-slide wp-block-lubus-slide"><!-- wp:group {"style":{"spacing":{"blockGap":"15px"}},"layout":{"type":"default"}} -->
			<div class="wp-block-group"><!-- wp:heading {"textAlign":"center","level":1,"align":"wide","fontSize":"large"} -->
			<h1 class="wp-block-heading alignwide has-text-align-center has-large-font-size"><strong><strong>Five stars!</strong></strong></h1>
			<!-- /wp:heading -->

			<!-- wp:image {"id":2510,"sizeSlug":"full","linkDestination":"none","align":"center"} -->
			<figure class="wp-block-image aligncenter size-full"><img src="${ baseImageUrl }/templates/testimonial/quote.png" alt="" class="wp-image-2510"/></figure>
			<!-- /wp:image -->

			<!-- wp:image {"width":"100px","height":"100px","scale":"cover","sizeSlug":"large","align":"center","style":{"border":{"radius":"100px"}}} -->
			<figure class="wp-block-image aligncenter size-large is-resized has-custom-border"><img src="${ baseImageUrl }/templates/testimonial/lila-patel.jpeg" alt="" style="border-radius:100px;object-fit:cover;width:100px;height:100px"/></figure>
			<!-- /wp:image -->

			<!-- wp:paragraph {"align":"center","style":{"color":{"text":"#8a8a8a"},"typography":{"fontSize":"20px","fontStyle":"normal","fontWeight":"300","lineHeight":2,"letterSpacing":"0px"}},"fontFamily":"montserrat"} -->
			<p class="has-text-align-center has-text-color has-montserrat-font-family" style="color:#8a8a8a;font-size:20px;font-style:normal;font-weight:300;letter-spacing:0px;line-height:2">Amazing quality! It’s rare to find something that checks all the boxes, but this did. I’ll be recommending it to everyone I know!</p>
			<!-- /wp:paragraph -->

			<!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"16px","fontStyle":"normal","fontWeight":"600"},"spacing":{"padding":{"bottom":"5px"}}}} -->
			<p class="has-text-align-center" style="padding-bottom:5px;font-size:16px;font-style:normal;font-weight:600"><em><em>— Lila Patel</em></em></p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:group --></div>
			<!-- /wp:blablablocks/slide -->
			<!-- /wp:blablablocks/slider --></div>
			<!-- /wp:group -->`,
};

export default Testimonial;
