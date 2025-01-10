/**
 * Shared Swiper config.
 */
import { SwiperInit } from './swiper-init';

document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.swiper');

    // Return early, and often.
    if (!containers.length) {
        return;
    }

    // Loop through all sliders and assign Swiper object.
    containers.forEach((element) => {
        // Check if the slider has slides with content.
        const slides = element.querySelectorAll('.swiper-wrapper > *');
        const hasContent = Array.from(slides).some(
            (slide) => slide.textContent.trim() !== '' || slide.innerHTML.trim() !== ''
        );

        if (!slides.length || !hasContent) {
            console.warn('Swiper not initialized: No slides or slides with content found.');
            return;
        }

        let options = {};

        try {
            options = JSON.parse(element.dataset.swiper);
        } catch (e) {
            // eslint-disable-next-line no-console
            console.error(e);
            return;
        }
		
        // Slider 🚀
        SwiperInit(element, options);
    });
});
