/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n';

const baseImageUrl = typeof BlablablocksData !== 'undefined' ? BlablablocksData.assetsUrl : '';

const LogoCarousel = {
    name: 'logo-carousel',
    title: __('Logo Carousel', 'blablablocks-slider-block'),
    content: `
            <!-- wp:blablablocks/slider {"slidesPerView":{"activeDevice":"desktop","desktop":6},"speed":100,"navigation":{"desktop":false,"tablet":true,"mobile":false,"activeDevice":"desktop"},"loop":true,"navigationColor":{"backgroundColor":{"default":"#ffffff","hover":"#ffffff"},"arrowColor":{"default":"#000000","hover":"#000000"}},"navigationPadding":{"top":"8px","right":"12px","bottom":"8px","left":"12px"},"navigationSize":"20px","navigationOffset":{"top":"100%","right":"45%","left":"45%"},"navigationBorderRadius":"50%","paginationSize":"10px","paginationOffset":{"bottom":"var:preset|spacing|10","top":"0"},"paginationColor":{"activeColor":[],"inactiveColor":[]},"metadata":{"name":"Logo Carousel"},"align":"full","style":{"spacing":{"padding":{"right":"10vw","left":"10vw","top":"6vw","bottom":"6vw"},"margin":{"top":"30px","bottom":"30px"}}},"backgroundColor":"base-2"} -->
                <!-- wp:blablablocks/slide -->
                <div class="wp-block-blablablocks-slide swiper-slide"><!-- wp:image {"aspectRatio":"3/2","scale":"cover","sizeSlug":"large","linkDestination":"none","align":"center"} -->
                <figure class="wp-block-image aligncenter size-large"><img src="${baseImageUrl}/templates/logo-carousel/Paragraph.png" alt="" style="aspect-ratio:3/2;object-fit:cover"/></figure>
                <!-- /wp:image --></div>
                <!-- /wp:blablablocks/slide -->

                <!-- wp:blablablocks/slide -->
                <div class="wp-block-blablablocks-slide swiper-slide"><!-- wp:image {"aspectRatio":"3/2","scale":"cover","sizeSlug":"large","linkDestination":"none","align":"center"} -->
                <figure class="wp-block-image aligncenter size-large"><img src="${baseImageUrl}/templates/logo-carousel/Heading.png" alt="" style="aspect-ratio:3/2;object-fit:cover"/></figure>
                <!-- /wp:image --></div>
                <!-- /wp:blablablocks/slide -->

                <!-- wp:blablablocks/slide -->
                <div class="wp-block-blablablocks-slide swiper-slide"><!-- wp:image {"aspectRatio":"3/2","scale":"cover","sizeSlug":"large","linkDestination":"none","align":"center"} -->
                <figure class="wp-block-image aligncenter size-large"><img src="${baseImageUrl}/templates/logo-carousel/Media-Text.png" alt="" style="aspect-ratio:3/2;object-fit:cover"/></figure>
                <!-- /wp:image --></div>
                <!-- /wp:blablablocks/slide -->

                <!-- wp:blablablocks/slide -->
                <div class="wp-block-blablablocks-slide swiper-slide"><!-- wp:image {"aspectRatio":"3/2","scale":"cover","sizeSlug":"large","linkDestination":"none","align":"center"} -->
                <figure class="wp-block-image aligncenter size-large"><img src="${baseImageUrl}/templates/logo-carousel/Image.png" alt="" style="aspect-ratio:3/2;object-fit:cover"/></figure>
                <!-- /wp:image --></div>
                <!-- /wp:blablablocks/slide -->

                <!-- wp:blablablocks/slide -->
                <div class="wp-block-blablablocks-slide swiper-slide"><!-- wp:image {"aspectRatio":"3/2","scale":"cover","sizeSlug":"large","linkDestination":"none","align":"center"} -->
                <figure class="wp-block-image aligncenter size-large"><img src="${baseImageUrl}/templates/logo-carousel/Cover-1024x1024.png" alt="" style="aspect-ratio:3/2;object-fit:cover"/></figure>
                <!-- /wp:image --></div>
                <!-- /wp:blablablocks/slide -->

                <!-- wp:blablablocks/slide -->
                <div class="wp-block-blablablocks-slide swiper-slide"><!-- wp:image {"aspectRatio":"3/2","scale":"cover","sizeSlug":"large","linkDestination":"none","align":"center"} -->
                <figure class="wp-block-image aligncenter size-large"><img src="${baseImageUrl}/templates/logo-carousel/Video.png" alt="" style="aspect-ratio:3/2;object-fit:cover"/></figure>
                <!-- /wp:image --></div>
                <!-- /wp:blablablocks/slide -->

                <!-- wp:blablablocks/slide -->
                <div class="wp-block-blablablocks-slide swiper-slide"><!-- wp:image {"aspectRatio":"3/2","scale":"cover","sizeSlug":"large","linkDestination":"none","align":"center"} -->
                <figure class="wp-block-image aligncenter size-large"><img src="${baseImageUrl}/templates/logo-carousel/Audio.png" alt="" style="aspect-ratio:3/2;object-fit:cover"/></figure>
                <!-- /wp:image --></div>
                <!-- /wp:blablablocks/slide -->

                <!-- wp:blablablocks/slide -->
                <div class="wp-block-blablablocks-slide swiper-slide"><!-- wp:image {"aspectRatio":"3/2","scale":"cover","sizeSlug":"large","linkDestination":"none","align":"center"} -->
                <figure class="wp-block-image aligncenter size-large"><img src="${baseImageUrl}/templates/logo-carousel/Gallery.png" alt="" style="aspect-ratio:3/2;object-fit:cover"/></figure>
                <!-- /wp:image --></div>
                <!-- /wp:blablablocks/slide -->
                <!-- /wp:blablablocks/slider -->`,
};

export default LogoCarousel;
