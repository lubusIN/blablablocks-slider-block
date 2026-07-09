/**
 * WordPress dependencies
 */
import {
	createBlock,
	__unstableGetInnerBlocksProps as getInnerBlocksProps, // eslint-disable-line @wordpress/no-unsafe-wp-apis
	parse,
	registerBlockType,
	serialize,
	unregisterBlockType,
} from '@wordpress/blocks';
import { createElement } from '@wordpress/element';

/**
 * Internal dependencies
 */
import transforms from './transforms';

const BLOCK_TYPES = {
	'blablablocks/slider': {
		contentSource: { type: 'string' },
		slidesPerViewMode: { type: 'string' },
		slidesPerView: { type: 'object' },
		navigationColor: { type: 'object' },
		paginationColor: { type: 'object' },
	},
	'blablablocks/slide': {},
	'core/image': {
		id: { type: 'integer' },
		url: { type: 'string' },
		alt: { type: 'string' },
		caption: { type: 'string' },
		href: { type: 'string' },
		style: { type: 'object' },
	},
	'core/gallery': { images: { type: 'array' } },
	'core/columns': {},
	'core/column': {
		width: { type: 'string' },
		verticalAlignment: { type: 'string' },
		templateLock: { type: [ 'string', 'boolean' ] },
		style: { type: 'object' },
	},
	'core/group': { style: { type: 'object' } },
	'core/paragraph': { content: { type: 'string' } },
};

const galleryTransform = transforms.from.find( ( transform ) =>
	transform.blocks.includes( 'core/gallery' )
);
const imageTransform = transforms.from.find( ( transform ) =>
	transform.blocks.includes( 'core/image' )
);
const columnsTransform = transforms.from.find( ( transform ) =>
	transform.blocks.includes( 'core/columns' )
);

beforeAll( () => {
	Object.entries( BLOCK_TYPES ).forEach( ( [ name, attributes ] ) => {
		const savesInnerBlocks = [
			'blablablocks/slider',
			'blablablocks/slide',
			'core/group',
		].includes( name );

		registerBlockType( name, {
			title: name,
			category: 'widgets',
			attributes,
			save: savesInnerBlocks
				? () => createElement( 'div', getInnerBlocksProps() )
				: () => null,
		} );
	} );
} );

afterAll( () => {
	Object.keys( BLOCK_TYPES ).forEach( unregisterBlockType );
} );

describe( 'Slider transforms', () => {
	test( 'transforms modern and legacy galleries', () => {
		const firstImage = createBlock( 'core/image', {
			id: 1,
			url: '/one.jpg',
			alt: 'One',
			caption: 'First',
			style: { border: { radius: '4px' } },
		} );
		const secondImage = createBlock( 'core/image', {
			id: 2,
			url: '/two.jpg',
			alt: 'Two',
		} );
		const gallery = createBlock( 'core/gallery', {}, [
			firstImage,
			secondImage,
		] );

		expect( galleryTransform.isMatch( gallery.attributes, gallery ) ).toBe(
			true
		);
		const slider = galleryTransform.transform(
			gallery.attributes,
			gallery.innerBlocks
		);

		expect( slider.innerBlocks ).toHaveLength( 2 );
		expect(
			slider.innerBlocks[ 0 ].innerBlocks[ 0 ].attributes
		).toMatchObject( {
			alt: 'One',
			caption: 'First',
			style: { border: { radius: '4px' } },
		} );
		expect( slider.innerBlocks[ 0 ].innerBlocks[ 0 ].clientId ).not.toBe(
			firstImage.clientId
		);
		expect( slider.attributes.slidesPerView ).toEqual( {
			desktop: 2,
			tablet: 2,
			mobile: 1,
			activeDevice: 'desktop',
		} );

		const legacyImages = [
			{ id: '3', url: '/three.jpg', alt: 'Three' },
			{ id: '4', url: '/four.jpg', link: '/attachment/4' },
		];
		expect(
			galleryTransform.isMatch(
				{ images: legacyImages },
				{ innerBlocks: [] }
			)
		).toBe( true );
		const legacySlider = galleryTransform.transform(
			{ images: legacyImages },
			[]
		);
		expect(
			legacySlider.innerBlocks[ 1 ].innerBlocks[ 0 ].attributes
		).toMatchObject( { id: 4, href: '/attachment/4' } );
	} );

	test( 'requires multiple images and preserves their order', () => {
		const images = [ 1, 2, 3, 4 ].map( ( id ) => ( {
			id,
			url: `/${ id }.jpg`,
		} ) );

		expect( imageTransform.isMatch( images.slice( 0, 1 ) ) ).toBe( false );
		expect( imageTransform.isMatch( images.slice( 0, 2 ) ) ).toBe( true );

		const slider = imageTransform.transform( images );
		expect( slider.attributes ).toMatchObject( {
			contentSource: 'slides',
			slidesPerViewMode: 'custom',
			slidesPerView: {
				desktop: 3,
				tablet: 2,
				mobile: 1,
				activeDevice: 'desktop',
			},
		} );
		expect(
			slider.innerBlocks.map(
				( slide ) => slide.innerBlocks[ 0 ].attributes.id
			)
		).toEqual( [ 1, 2, 3, 4 ] );
	} );

	test( 'preserves transformed slide order through serialization', () => {
		const slider = imageTransform.transform( [
			{ id: 10, url: '/ten.jpg', alt: 'Ten' },
			{ id: 20, url: '/twenty.jpg', alt: 'Twenty' },
		] );

		const reloaded = parse( serialize( slider ) )[ 0 ];

		expect( reloaded.attributes ).toMatchObject( slider.attributes );
		expect(
			reloaded.innerBlocks.map(
				( slide ) => slide.innerBlocks[ 0 ].attributes.id
			)
		).toEqual( [ 10, 20 ] );
	} );

	test.each( [
		[
			'preset color objects',
			{
				arrowColor: {
					default: { color: '#111111', slug: 'contrast' },
				},
			},
			{
				activeColor: {
					default: { color: '#ffffff', slug: 'base' },
				},
			},
		],
		[
			'legacy color strings',
			{ arrowColor: { default: '#111111', hover: '#222222' } },
			{ activeColor: { default: '#ffffff' } },
		],
	] )(
		'preserves %s through serialization',
		( label, navigationColor, paginationColor ) => {
			const slider = createBlock( 'blablablocks/slider', {
				navigationColor,
				paginationColor,
			} );
			const reloaded = parse( serialize( slider ) )[ 0 ];

			expect( reloaded.attributes.navigationColor ).toEqual(
				navigationColor
			);
			expect( reloaded.attributes.paginationColor ).toEqual(
				paginationColor
			);
		}
	);

	test( 'transforms columns into styled groups with cloned content', () => {
		const paragraph = createBlock( 'core/paragraph', {
			content: 'First column',
		} );
		const firstColumn = createBlock(
			'core/column',
			{
				width: '30%',
				verticalAlignment: 'center',
				templateLock: 'all',
				style: { color: { background: '#fff' } },
			},
			[ paragraph ]
		);
		const secondColumn = createBlock( 'core/column' );
		const columns = createBlock( 'core/columns', {}, [
			firstColumn,
			secondColumn,
		] );

		expect( columnsTransform.isMatch( columns.attributes, columns ) ).toBe(
			true
		);
		const slider = columnsTransform.transform(
			columns.attributes,
			columns.innerBlocks
		);
		const firstGroup = slider.innerBlocks[ 0 ].innerBlocks[ 0 ];

		expect( firstGroup.name ).toBe( 'core/group' );
		expect( firstGroup.attributes ).toEqual( {
			style: { color: { background: '#fff' } },
		} );
		expect( firstGroup.innerBlocks[ 0 ].clientId ).not.toBe(
			paragraph.clientId
		);
		expect(
			slider.innerBlocks[ 1 ].innerBlocks[ 0 ].innerBlocks
		).toHaveLength( 0 );
	} );
} );
