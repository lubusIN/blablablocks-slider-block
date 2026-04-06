/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n';

const baseImageUrl =
	typeof BlablablocksData !== 'undefined' ? BlablablocksData.assetsUrl : '';

const OurTeam = {
	name: 'our-team',
	title: __( 'Our Team', 'blablablocks-slider-block' ),
	content: `
            <!-- wp:group {"metadata":{"name":"Our Team","categories":["about"],"patternName":"twentytwentyfour/team-4-col"},"align":"full","style":{"spacing":{"margin":{"top":"0","bottom":"0"},"padding":{"top":"var:preset|spacing|50","bottom":"var:preset|spacing|50","left":"var:preset|spacing|50","right":"var:preset|spacing|50"}}},"layout":{"type":"constrained"}} -->
            <div class="wp-block-group alignfull" style="margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50)"><!-- wp:group {"layout":{"type":"flex","orientation":"vertical","justifyContent":"center"}} -->
            <div class="wp-block-group"><!-- wp:heading {"textAlign":"center","fontSize":"xx-large"} -->
            <h2 class="wp-block-heading has-text-align-center has-xx-large-font-size">Meet our team</h2>
            <!-- /wp:heading -->

            <!-- wp:paragraph {"align":"center"} -->
            <p class="has-text-align-center">Our comprehensive suite of professionals caters to a diverse team, ranging from seasoned architects to renowned engineers.</p>
            <!-- /wp:paragraph --></div>
            <!-- /wp:group -->

            <!-- wp:spacer {"height":"var:preset|spacing|30"} -->
            <div style="height:var(--wp--preset--spacing--30)" aria-hidden="true" class="wp-block-spacer"></div>
            <!-- /wp:spacer -->

            <!-- wp:blablablocks/slider {"slidesPerView":{"desktop":3,"tablet":1,"mobile":1,"activeDevice":"desktop"},"pagination":{"desktop":false,"tablet":true,"mobile":false,"activeDevice":"desktop"},"navigationOffset":{"right":"-20px","left":"-20px"},"navigationPosition":"center center","align":"wide","style":{"spacing":{"padding":{"top":"0px","bottom":"0px","left":"5vw","right":"5vw"}}}} -->
            <!-- wp:blablablocks/slide -->
            <div class="wp-block-blablablocks-slide swiper-slide"><!-- wp:image {"id":582,"aspectRatio":"1","scale":"cover","sizeSlug":"full","linkDestination":"none","className":"is-style-rounded"} -->
            <figure class="wp-block-image size-full is-style-rounded"><img src="${ baseImageUrl }/templates/our-team/francesca.jpeg" alt="" class="wp-image-582" style="aspect-ratio:1;object-fit:cover"/></figure>
            <!-- /wp:image -->

            <!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|0"}},"layout":{"type":"flex","orientation":"vertical","flexWrap":"nowrap","justifyContent":"center"}} -->
            <div class="wp-block-group"><!-- wp:paragraph {"align":"center","fontSize":"small"} -->
            <p class="has-text-align-center has-small-font-size">
                                            <strong>Francesca Piovani</strong>
                                        </p>
            <!-- /wp:paragraph -->

            <!-- wp:paragraph {"align":"center","fontSize":"small"} -->
            <p class="has-text-align-center has-small-font-size">Founder, CEO &amp; Architect</p>
            <!-- /wp:paragraph --></div>
            <!-- /wp:group --></div>
            <!-- /wp:blablablocks/slide -->

            <!-- wp:blablablocks/slide -->
            <div class="wp-block-blablablocks-slide swiper-slide"><!-- wp:image {"id":581,"aspectRatio":"1","scale":"cover","sizeSlug":"full","linkDestination":"none","className":"is-style-rounded"} -->
            <figure class="wp-block-image size-full is-style-rounded"><img src="${ baseImageUrl }/templates/our-team/rhye.jpeg" alt="" class="wp-image-581" style="aspect-ratio:1;object-fit:cover"/></figure>
            <!-- /wp:image -->

            <!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|0"}},"layout":{"type":"flex","orientation":"vertical","justifyContent":"center","flexWrap":"nowrap"}} -->
            <div class="wp-block-group"><!-- wp:paragraph {"align":"center","fontSize":"small"} -->
            <p class="has-text-align-center has-small-font-size">
                                            <strong>Rhye Moore</strong>
                                        </p>
            <!-- /wp:paragraph -->

            <!-- wp:paragraph {"align":"center","fontSize":"small"} -->
            <p class="has-text-align-center has-small-font-size">Engineering Manager</p>
            <!-- /wp:paragraph --></div>
            <!-- /wp:group --></div>
            <!-- /wp:blablablocks/slide -->

            <!-- wp:blablablocks/slide -->
            <div class="wp-block-blablablocks-slide swiper-slide"><!-- wp:image {"id":579,"aspectRatio":"1","scale":"cover","sizeSlug":"full","linkDestination":"none","className":"is-style-rounded"} -->
            <figure class="wp-block-image size-full is-style-rounded"><img src="${ baseImageUrl }/templates/our-team/helga.jpeg" alt="" class="wp-image-579" style="aspect-ratio:1;object-fit:cover"/></figure>
            <!-- /wp:image -->

            <!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|0"}},"layout":{"type":"flex","orientation":"vertical","justifyContent":"center","flexWrap":"nowrap"}} -->
            <div class="wp-block-group"><!-- wp:paragraph {"align":"center","fontSize":"small"} -->
            <p class="has-text-align-center has-small-font-size">
                                            <strong>Helga Steiner</strong>
                                        </p>
            <!-- /wp:paragraph -->

            <!-- wp:paragraph {"align":"center","fontSize":"small"} -->
            <p class="has-text-align-center has-small-font-size">Architect</p>
            <!-- /wp:paragraph --></div>
            <!-- /wp:group --></div>
            <!-- /wp:blablablocks/slide -->

            <!-- wp:blablablocks/slide -->
            <div class="wp-block-blablablocks-slide swiper-slide"><!-- wp:image {"id":580,"aspectRatio":"1","scale":"cover","sizeSlug":"full","linkDestination":"none","className":"is-style-rounded"} -->
            <figure class="wp-block-image size-full is-style-rounded"><img src="${ baseImageUrl }/templates/our-team/ivan.jpeg" alt="" class="wp-image-580" style="aspect-ratio:1;object-fit:cover"/></figure>
            <!-- /wp:image -->

            <!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|0"}},"layout":{"type":"flex","orientation":"vertical","flexWrap":"nowrap","justifyContent":"center"}} -->
            <div class="wp-block-group"><!-- wp:paragraph {"align":"center","fontSize":"small"} -->
            <p class="has-text-align-center has-small-font-size">
                                            <strong>Ivan Lawrence</strong>
                                        </p>
            <!-- /wp:paragraph -->

            <!-- wp:paragraph {"align":"center","fontSize":"small"} -->
            <p class="has-text-align-center has-small-font-size">Project Manager</p>
            <!-- /wp:paragraph --></div>
            <!-- /wp:group --></div>
            <!-- /wp:blablablocks/slide -->
            <!-- /wp:blablablocks/slider --></div>
            <!-- /wp:group -->`,
};

export default OurTeam;
