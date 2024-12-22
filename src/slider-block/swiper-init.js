/**
 * Swiper dependencies
 */
import { Swiper } from 'swiper';
import { Autoplay, EffectFade, Keyboard, Navigation, Pagination } from 'swiper/modules';

/**
 * Initialize the slider.
 *
 * @param {Element} container HTMLElement.
 * @param {Object}  options   Slider parameters.
 *
 * @return {Object} Returns initialized slider instance.
 *
 */
export function SwiperInit(container, options = {}) {
    const isFadeEffect = options?.effects === 'fade';

    const parameters = {
        autoplay: {
            enabled: options?.autoplay ?? true,
            delay: options?.delay ?? 5000,
        },
        spaceBetween: options?.slidesSpacing?.desktop ?? 30,
        slidesPerView: isFadeEffect ? 1 : options?.slidesPerView?.desktop ?? 3, // Set to 1 if effect is 'fade'
        speed: options?.speed ?? 300,
        grabCursor: false,
        keyboard: true,
        loop: options?.loop ?? false,
        effect: options?.effects ?? 'slide',
        fadeEffect: {
            crossFade: true,
        },
        simulateTouch: false,
        createElements: true,
        modules: [Autoplay, Keyboard, Navigation, Pagination, EffectFade],
        navigation: options?.navigation ?? false,
        pagination: {
            enabled: options?.pagination ?? false,
            clickable: true,
        },
        breakpoints: {
            1024: {
                slidesPerView: isFadeEffect ? 1 : options?.slidesPerView?.desktop ?? 3,
                spaceBetween: options?.slidesSpacing?.desktop ?? 30,
            },
            768: {
                slidesPerView: isFadeEffect ? 1 : options?.slidesPerView?.tablet ?? 2,
                spaceBetween: options?.slidesSpacing?.tablet ?? 20,
            },
            480: {
                slidesPerView: isFadeEffect ? 1 : options?.slidesPerView?.mobile ?? 1,
                spaceBetween: options?.slidesSpacing?.mobile ?? 10,
            },
            320: {
                slidesPerView: isFadeEffect ? 1 : options?.slidesPerView?.mobile ?? 1,
                spaceBetween: options?.slidesSpacing?.mobile ?? 10,
            },
        },
    };

    return new Swiper(container, parameters);
}