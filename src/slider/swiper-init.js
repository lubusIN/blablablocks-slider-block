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
} from 'swiper/modules';

/**
 * Get device-specific settings for Swiper.
 *
 * @param {Object}  options      - Configuration options for the slider.
 * @param {string}  deviceType   - The current editor device type (Desktop, Tablet, Mobile).
 * @param {boolean} isFadeEffect - Whether the fade effect is enabled.
 *
 * @return {Object} Device-specific Swiper settings.
 */
function getDeviceSettings( options, deviceType, isFadeEffect ) {
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
		isFadeEffect
	);

	// Base Swiper parameters
	const parameters = {
		...currentDeviceSettings,
		autoplay: {
			enabled: options.autoplay ?? true,
			delay: options.delay ?? 5000,
		},
		speed: options.speed ?? 300,
		grabCursor: true,
		keyboard: true,
		observer: true,
		observeParents: true,
		loop: options.loop ?? false,
		effect: options.effects ?? 'slide',
		fadeEffect: { crossFade: true },
		simulateTouch: false,
		createElements: true,
		modules: [ Autoplay, Keyboard, Navigation, Pagination, EffectFade ],
	};

	// Add breakpoints and universal settings if not in the editor
	if ( ! isEditor ) {
		parameters.pagination = { enabled: true, clickable: true };
		parameters.navigation = { enabled: true };
		parameters.breakpoints = {
			320: getDeviceSettings( options, 'Mobile', isFadeEffect ),
			480: getDeviceSettings( options, 'Mobile', isFadeEffect ),
			768: getDeviceSettings( options, 'Tablet', isFadeEffect ),
			1024: getDeviceSettings( options, 'Desktop', isFadeEffect ),
		};
	}

	return new Swiper( container, parameters );
}
