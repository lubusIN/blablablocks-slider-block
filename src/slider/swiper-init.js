/**
 * Swiper dependencies
 */
import { Swiper } from 'swiper';
import {
	Autoplay,
	EffectFade,
	Keyboard,
	Navigation,
	Pagination,
	A11y,
} from 'swiper/modules'; // eslint-disable-line

/**
 * Get device-specific settings for Swiper.
 *
 * @param {Object}  options      - Configuration options for the slider.
 * @param {string}  deviceType   - The current editor device type (Desktop, Tablet, Mobile).
 * @param {boolean} isFadeEffect - Whether the fade effect is enabled.
 * @param {Element} container    - The HTML container element for the Swiper.
 * @return {Object} Device-specific Swiper settings.
 */
function getDeviceSettings( options, deviceType, isFadeEffect, container ) {
	const defaultSettings = {
		Desktop: { slidesPerView: 3, spaceBetween: 30 },
		Tablet: { slidesPerView: 2, spaceBetween: 20 },
		Mobile: { slidesPerView: 1, spaceBetween: 10 },
	};

	const deviceSettings =
		defaultSettings[ deviceType ] || defaultSettings.Desktop;

	return {
		slidesPerView: isFadeEffect
			? 1
			: options?.slidesPerView?.[ deviceType.toLowerCase() ] ??
			  deviceSettings.slidesPerView,
		spaceBetween:
			options?.slidesSpacing?.[ deviceType.toLowerCase() ] ??
			deviceSettings.spaceBetween,
		pagination: {
			enabled: options?.pagination?.[ deviceType.toLowerCase() ] ?? false,
			clickable: true,
		},
		navigation: {
			enabled: options?.navigation?.[ deviceType.toLowerCase() ] ?? false,
			nextEl: container.querySelector( '.swiper-button-next' ),
			prevEl: container.querySelector( '.swiper-button-prev' ),
		},
	};
}

/**
 * Initialize the Swiper slider.
 *
 * @param {Element} container  - The HTML container element for the Swiper.
 * @param {Object}  options    - Configuration options for the slider.
 * @param {string}  deviceType - The current editor device type (Desktop, Tablet, Mobile).
 * @param {boolean} isEditor   - Whether the slider is initialized in the editor.
 *
 * @return {Object} Returns the initialized Swiper instance.
 */
export function SwiperInit(
	container,
	options = {},
	deviceType = 'Desktop',
	isEditor = false
) {
	const isFadeEffect = options.effects === 'fade';
	const currentDeviceSettings = getDeviceSettings(
		options,
		deviceType,
		isFadeEffect,
		container
	);

	// Base Swiper parameters
	const parameters = {
		...currentDeviceSettings,
		a11y: true,
		autoplay: {
			enabled: options.autoplay ?? true,
			delay: options.delay ?? 5000,
			pauseOnMouseEnter: true,
		},
		speed: options.speed ?? 300,
		grabCursor: true,
		observer: true,
		observeParents: true,
		loop: options.loop ?? false,
		effect: options.effects ?? 'slide',
		fadeEffect: { crossFade: true },
		simulateTouch: false,
		createElements: true,
		modules: [
			Autoplay,
			Keyboard,
			Navigation,
			Pagination,
			EffectFade,
			A11y,
		],
	};

	// Add breakpoints and universal settings if not in the editor
	if ( ! isEditor ) {
		parameters.pagination = { enabled: true, clickable: true };
		parameters.navigation = {
			enabled: true,
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		};

		parameters.breakpoints = {
			320: getDeviceSettings(
				options,
				'Mobile',
				isFadeEffect,
				container
			),
			480: getDeviceSettings(
				options,
				'Mobile',
				isFadeEffect,
				container
			),
			768: getDeviceSettings(
				options,
				'Tablet',
				isFadeEffect,
				container
			),
			1024: getDeviceSettings(
				options,
				'Desktop',
				isFadeEffect,
				container
			),
		};
	}

	const swiperInstance = new Swiper( container, parameters );

	if ( ! isEditor ) {
		container.addEventListener( 'focusin', () => {
			swiperInstance?.keyboard?.enable();
		} );

		container.addEventListener( 'focusout', () => {
			swiperInstance?.keyboard?.disable();
		} );
	}

	return swiperInstance;
}
