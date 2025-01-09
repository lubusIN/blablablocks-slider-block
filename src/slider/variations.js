/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Path, SVG } from '@wordpress/components';
import { cover, gallery, mediaAndText } from '@wordpress/icons';

/**
 * Template option choices for predefined slider layouts.
 *
 * @type {WPBlockVariation[]}
 */
const variations = [
	{
		name: 'four-slide-three-view',
		title: __('Four Slide Three View', 'blablablocks-slider-block'),
		description: __('4 Slides, 3 in View', 'blablablocks-slider-block'),
		icon: (
			<SVG
				xmlns="http://www.w3.org/2000/svg"
				width="64"
				height="48"
				viewBox="0 0 64 48"
				style={{ width: '64px' }}
			>
				<Path d="M0 10a2 2 0 0 1 2-2h10.531c1.105 0 1.969.895 1.969 2v28c0 1.105-.864 2-1.969 2H2a2 2 0 0 1-2-2V10Zm16.5 0c0-1.105.864-2 1.969-2H29.5c1.105 0 1.969.895 1.969 2v28c0 1.105-.864 2-1.969 2H18.5c-1.105 0-1.969-.895-1.969-2V10Zm16.5 0c0-1.105.864-2 1.969-2H46c1.105 0 1.969.895 1.969 2v28c0 1.105-.864 2-1.969 2H35.5c-1.105 0-1.969-.895-1.969-2V10Zm16.5 0c0-1.105.864-2 1.969-2H62c1.105 0 1.969.895 1.969 2v28c0 1.105-.864 2-1.969 2H51.5c-1.105 0-1.969-.895-1.969-2V10Z" />
			</SVG>
		),
		attributes: { slidesPerView: 3 },
		innerBlocks: [
			['blablablocks/slide'],
			['blablablocks/slide'],
			['blablablocks/slide'],
			['blablablocks/slide'],
		],
		scope: ['block'],
	},
	{
		name: 'cover-blocks',
		title: __('With Cover Blocks', 'blablablocks-slider-block'),
		description: __('With Cover Blocks', 'blablablocks-slider-block'),
		icon: cover,
		innerBlocks: [
			['blablablocks/slide', {}, [['core/cover']]],
			['blablablocks/slide', {}, [['core/cover']]],
			['blablablocks/slide', {}, [['core/cover']]],
		],
		scope: ['block'],
	},
	{
		name: 'images-slider',
		title: __('With Images', 'blablablocks-slider-block'),
		description: __('With Images', 'blablablocks-slider-block'),
		icon: gallery,
		innerBlocks: [
			[
				'blablablocks/slide',
				{},
				[
					['core/image', { url: `https://picsum.photos/seed/${Math.random()}/800/600` }],
				],
			],
			[
				'blablablocks/slide',
				{},
				[
					['core/image', { url: `https://picsum.photos/seed/${Math.random()}/800/600` }],
				],
			],
			[
				'blablablocks/slide',
				{},
				[
					['core/image', { url: `https://picsum.photos/seed/${Math.random()}/800/600` }],
				],
			],
			[
				'blablablocks/slide',
				{},
				[
					['core/image', { url: `https://picsum.photos/seed/${Math.random()}/800/600` }],
				],
			],
		],
		scope: ['block'],
	},
	{
		name: 'media-text-slider',
		title: __('With Media and Text', 'blablablocks-slider-block'),
		description: __('With Media & Text', 'blablablocks-slider-block'),
		icon: mediaAndText,
		innerBlocks: [
			['blablablocks/slide', {}, [['core/media-text']]],
			['blablablocks/slide', {}, [['core/media-text']]],
			['blablablocks/slide', {}, [['core/media-text']]],
		],
		scope: ['block'],
	},
];

export default variations;
