/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Path, SVG } from '@wordpress/components';

/**
 * Template option choices for predefined slider layouts.
 *
 * @type {WPBlockVariation[]}
 */
const variations = [
	{
		name: 'one-slide',
		description: __( 'One Slide', 'blablablocks-slider-block' ),
		icon: (
			<SVG
				xmlns="http://www.w3.org/2000/svg"
				width="48"
				height="48"
				viewBox="0 0 48 48"
			>
				<Path d="M0 10a2 2 0 0 1 2-2h44a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V10Z" />
			</SVG>
		),
		innerBlocks: [ [ 'blablablocks/slide' ] ],
		scope: [ 'block' ],
	},
	{
		name: 'two-slide',
		description: __( 'Two Slides', 'blablablocks-slider-block' ),
		icon: (
			<SVG
				xmlns="http://www.w3.org/2000/svg"
				width="48"
				height="48"
				viewBox="0 0 48 48"
			>
				<Path d="M0 10a2 2 0 0 1 2-2h19a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V10Zm25 0a2 2 0 0 1 2-2h19a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H27a2 2 0 0 1-2-2V10Z" />
			</SVG>
		),
		innerBlocks: [ [ 'blablablocks/slide' ], [ 'blablablocks/slide' ] ],
		scope: [ 'block' ],
	},
	{
		name: 'three-slide',
		description: __( 'Three Slides', 'blablablocks-slider-block' ),
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
		innerBlocks: [
			[ 'blablablocks/slide' ],
			[ 'blablablocks/slide' ],
			[ 'blablablocks/slide' ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'four-slide',
		description: __( 'Four Slides', 'blablablocks-slider-block' ),
		icon: (
			<SVG
				xmlns="http://www.w3.org/2000/svg"
				width="64"
				height="48"
				viewBox="0 0 64 48"
				style={ { width: '64px' } }
			>
				<Path d="M0 10a2 2 0 0 1 2-2h10.531c1.105 0 1.969.895 1.969 2v28c0 1.105-.864 2-1.969 2H2a2 2 0 0 1-2-2V10Zm16.5 0c0-1.105.864-2 1.969-2H29.5c1.105 0 1.969.895 1.969 2v28c0 1.105-.864 2-1.969 2H18.5c-1.105 0-1.969-.895-1.969-2V10Zm16.5 0c0-1.105.864-2 1.969-2H46c1.105 0 1.969.895 1.969 2v28c0 1.105-.864 2-1.969 2H35.5c-1.105 0-1.969-.895-1.969-2V10Zm16.5 0c0-1.105.864-2 1.969-2H62c1.105 0 1.969.895 1.969 2v28c0 1.105-.864 2-1.969 2H51.5c-1.105 0-1.969-.895-1.969-2V10Z" />
			</SVG>
		),
		innerBlocks: [
			[ 'blablablocks/slide' ],
			[ 'blablablocks/slide' ],
			[ 'blablablocks/slide' ],
			[ 'blablablocks/slide' ],
		],
		scope: [ 'block' ],
	},
];

export default variations;
