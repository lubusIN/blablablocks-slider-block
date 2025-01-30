/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Path, SVG } from '@wordpress/components';
import { cover, gallery, mediaAndText } from '@wordpress/icons';

/**
 * Template option choices for predefined slider layouts.
 */
const variations = [
	{
		name: 'blank-carousel',
		title: __( 'Blank Carousel', 'blablablocks-slider-block' ),
		description: __( 'Blank Carousel', 'blablablocks-slider-block' ),
		icon: (
			<SVG
				xmlns="http://www.w3.org/2000/svg"
				width="48"
				height="48"
				viewBox="0 0 48 48"
			>
				<Path d="M0 10a2 2 0 0 1 2-2h10.531c1.105 0 1.969.895 1.969 2v28c0 1.105-.864 2-1.969 2H2a2 2 0 0 1-2-2V10Zm16.5 0c0-1.105.864-2 1.969-2H29.53c1.105 0 1.969.895 1.969 2v28c0 1.105-.864 2-1.969 2H18.47c-1.105 0-1.969-.895-1.969-2V10Zm17 0c0-1.105.864-2 1.969-2H46a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H35.469c-1.105 0-1.969-.895-1.969-2V10Z" />
			</SVG>
		),
		attributes: { slidesPerView: 3 },
		innerBlocks: [
			[ 'blablablocks/slide' ],
			[ 'blablablocks/slide' ],
			[ 'blablablocks/slide' ],
			[ 'blablablocks/slide' ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'hero-slider',
		title: __( 'Hero', 'blablablocks-slider-block' ),
		description: __( 'Hero', 'blablablocks-slider-block' ),
		icon: cover,
		innerBlocks: [
			[ 'blablablocks/slide', {}, [ [ 'core/cover' ] ] ],
			[ 'blablablocks/slide', {}, [ [ 'core/cover' ] ] ],
			[ 'blablablocks/slide', {}, [ [ 'core/cover' ] ] ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'images-slider',
		title: __( 'Image Slider', 'blablablocks-slider-block' ),
		description: __( 'Image Slider', 'blablablocks-slider-block' ),
		icon: gallery,
		attributes: { slidesPerView: 3 },
		innerBlocks: [
			[
				'blablablocks/slide',
				{},
				[
					[
						'core/image',
						{
							url: `https://picsum.photos/seed/${ Math.random() }/800/600`,
						},
					],
				],
			],
			[
				'blablablocks/slide',
				{},
				[
					[
						'core/image',
						{
							url: `https://picsum.photos/seed/${ Math.random() }/800/600`,
						},
					],
				],
			],
			[
				'blablablocks/slide',
				{},
				[
					[
						'core/image',
						{
							url: `https://picsum.photos/seed/${ Math.random() }/800/600`,
						},
					],
				],
			],
			[
				'blablablocks/slide',
				{},
				[
					[
						'core/image',
						{
							url: `https://picsum.photos/seed/${ Math.random() }/800/600`,
						},
					],
				],
			],
		],
		scope: [ 'block' ],
	},
	{
		name: 'media-text-slider',
		title: __( 'Media and Text', 'blablablocks-slider-block' ),
		description: __( 'Media & Text', 'blablablocks-slider-block' ),
		icon: mediaAndText,
		innerBlocks: [
			[ 'blablablocks/slide', {}, [ [ 'core/media-text' ] ] ],
			[ 'blablablocks/slide', {}, [ [ 'core/media-text' ] ] ],
			[ 'blablablocks/slide', {}, [ [ 'core/media-text' ] ] ],
		],
		scope: [ 'block' ],
	},
];

export default variations;
