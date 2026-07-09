/**
 * External dependencies
 */
import { Swiper } from 'swiper';

/**
 * Internal dependencies
 */
import { SwiperInit } from './swiper-init';

jest.mock( 'swiper', () => ( {
	Swiper: jest.fn( ( container, parameters ) => ( {
		container,
		parameters,
		keyboard: {
			enable: jest.fn(),
			disable: jest.fn(),
		},
	} ) ),
} ) );

jest.mock( 'swiper/modules', () => ( {
	Autoplay: 'Autoplay',
	EffectFade: 'EffectFade',
	Keyboard: 'Keyboard',
	Navigation: 'Navigation',
	Pagination: 'Pagination',
	A11y: 'A11y',
} ) );

const createContainer = () => {
	const listeners = {};
	return {
		listeners,
		querySelector: jest.fn( ( selector ) => selector ),
		addEventListener: jest.fn( ( event, callback ) => {
			listeners[ event ] = callback;
		} ),
	};
};

describe( 'SwiperInit', () => {
	beforeEach( () => {
		Swiper.mockClear();
	} );

	test( 'preserves zero autoplay delay and custom editor settings', () => {
		const container = createContainer();

		SwiperInit(
			container,
			{
				autoplay: true,
				delay: 0,
				slidesPerViewMode: 'custom',
				slidesPerView: { tablet: 2.5 },
				slidesSpacing: { tablet: 18 },
				navigation: { tablet: true },
				pagination: { tablet: true },
			},
			'Tablet',
			true
		);

		const parameters = Swiper.mock.calls[ 0 ][ 1 ];
		expect( parameters.autoplay ).toMatchObject( {
			enabled: true,
			delay: 0,
		} );
		expect( parameters.slidesPerView ).toBe( 2.5 );
		expect( parameters.spaceBetween ).toBe( 18 );
		expect( parameters.navigation.enabled ).toBe( true );
		expect( parameters.pagination.enabled ).toBe( true );
		expect( parameters.breakpoints ).toBeUndefined();
	} );

	test( 'uses auto sizing across frontend breakpoints', () => {
		const container = createContainer();

		SwiperInit( container, { slidesPerViewMode: 'auto' } );

		const parameters = Swiper.mock.calls[ 0 ][ 1 ];
		expect( parameters.slidesPerView ).toBe( 'auto' );
		expect( parameters.breakpoints[ 320 ].slidesPerView ).toBe( 'auto' );
		expect( parameters.breakpoints[ 768 ].slidesPerView ).toBe( 'auto' );
		expect( parameters.breakpoints[ 1024 ].slidesPerView ).toBe( 'auto' );
	} );

	test( 'forces one slide for fade effects', () => {
		const container = createContainer();

		SwiperInit( container, {
			effects: 'fade',
			slidesPerViewMode: 'auto',
		} );

		const parameters = Swiper.mock.calls[ 0 ][ 1 ];
		expect( parameters.slidesPerView ).toBe( 1 );
		expect( parameters.breakpoints[ 320 ].slidesPerView ).toBe( 1 );
		expect( parameters.breakpoints[ 1024 ].slidesPerView ).toBe( 1 );
	} );

	test( 'enables keyboard controls only while the frontend slider is focused', () => {
		const container = createContainer();
		const instance = SwiperInit( container );

		expect( container.addEventListener ).toHaveBeenCalledTimes( 2 );
		container.listeners.focusin();
		expect( instance.keyboard.enable ).toHaveBeenCalledTimes( 1 );
		container.listeners.focusout();
		expect( instance.keyboard.disable ).toHaveBeenCalledTimes( 1 );
	} );
} );
