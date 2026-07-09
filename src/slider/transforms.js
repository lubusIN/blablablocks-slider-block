/**
 * WordPress dependencies
 */
import { cloneBlock, createBlock } from '@wordpress/blocks';

const MINIMUM_SLIDES = 2;

/**
 * Build the responsive settings shared by transformed sliders.
 *
 * @param {number} slideCount Number of slides in the transformed slider.
 * @return {Object} Slider block attributes.
 */
function getSliderAttributes( slideCount ) {
	return {
		contentSource: 'slides',
		slidesPerViewMode: 'custom',
		slidesPerView: {
			desktop: Math.min( 3, slideCount ),
			tablet: Math.min( 2, slideCount ),
			mobile: 1,
			activeDevice: 'desktop',
		},
	};
}

/**
 * Wrap content in a Slide block.
 *
 * @param {Object[]} innerBlocks Blocks to place inside the slide.
 * @return {Object} A Slide block.
 */
function createSlide( innerBlocks ) {
	return createBlock( 'blablablocks/slide', {}, innerBlocks );
}

/**
 * Create a Slider from prepared Slide blocks.
 *
 * @param {Object[]} slides Slide blocks.
 * @return {Object} A Slider block.
 */
function createSlider( slides ) {
	return createBlock(
		'blablablocks/slider',
		getSliderAttributes( slides.length ),
		slides
	);
}

/**
 * Convert legacy Gallery image data into an Image block.
 *
 * @param {Object} image Legacy Gallery image attributes.
 * @return {Object} An Image block.
 */
function createLegacyGalleryImage( image ) {
	const id = image.id ? Number.parseInt( image.id, 10 ) : undefined;

	return createBlock( 'core/image', {
		id: Number.isNaN( id ) ? undefined : id,
		url: image.url,
		alt: image.alt ?? '',
		caption: image.caption,
		href: image.link,
	} );
}

/**
 * Get usable Image blocks from modern or legacy Gallery content.
 *
 * @param {Object}   attributes  Gallery attributes.
 * @param {Object[]} innerBlocks Gallery inner blocks.
 * @return {Object[]} Image blocks.
 */
function getGalleryImages( attributes, innerBlocks ) {
	const galleryImages = innerBlocks.filter(
		( block ) =>
			block.name === 'core/image' &&
			( block.attributes.url ||
				block.attributes.id ||
				block.attributes.blob )
	);

	if ( galleryImages.length > 0 ) {
		return galleryImages;
	}

	return ( attributes.images ?? [] )
		.filter( ( image ) => image.url || image.id )
		.map( createLegacyGalleryImage );
}

/**
 * Count usable modern or legacy Gallery images without creating blocks.
 *
 * @param {Object}   attributes  Gallery attributes.
 * @param {Object[]} innerBlocks Gallery inner blocks.
 * @return {number} Number of usable Gallery images.
 */
function getGalleryImageCount( attributes, innerBlocks ) {
	const modernImageCount = innerBlocks.filter(
		( block ) =>
			block.name === 'core/image' &&
			( block.attributes.url ||
				block.attributes.id ||
				block.attributes.blob )
	).length;

	if ( modernImageCount > 0 ) {
		return modernImageCount;
	}

	return ( attributes.images ?? [] ).filter(
		( image ) => image.url || image.id
	).length;
}

/**
 * Convert a Column into a Group while dropping Columns-only attributes.
 *
 * @param {Object} column Column block.
 * @return {Object} Group block containing cloned Column content.
 */
function createGroupFromColumn( column ) {
	const { width, verticalAlignment, templateLock, ...groupAttributes } =
		column.attributes;

	return createBlock(
		'core/group',
		groupAttributes,
		column.innerBlocks.map( ( block ) => cloneBlock( block ) )
	);
}

const transforms = {
	from: [
		{
			type: 'block',
			blocks: [ 'core/gallery' ],
			isMatch: ( attributes, block ) =>
				getGalleryImageCount( attributes, block.innerBlocks ) >=
				MINIMUM_SLIDES,
			transform: ( attributes, innerBlocks ) => {
				const slides = getGalleryImages( attributes, innerBlocks ).map(
					( image ) => createSlide( [ cloneBlock( image ) ] )
				);

				return createSlider( slides );
			},
		},
		{
			type: 'block',
			isMultiBlock: true,
			blocks: [ 'core/image' ],
			isMatch: ( attributes ) => attributes.length >= MINIMUM_SLIDES,
			transform: ( images ) => {
				const slides = images.map( ( attributes ) =>
					createSlide( [ createBlock( 'core/image', attributes ) ] )
				);

				return createSlider( slides );
			},
		},
		{
			type: 'block',
			blocks: [ 'core/columns' ],
			isMatch: ( attributes, block ) =>
				block.innerBlocks.filter(
					( innerBlock ) => innerBlock.name === 'core/column'
				).length >= MINIMUM_SLIDES,
			transform: ( attributes, innerBlocks ) => {
				const slides = innerBlocks
					.filter( ( block ) => block.name === 'core/column' )
					.map( ( column ) =>
						createSlide( [ createGroupFromColumn( column ) ] )
					);

				return createSlider( slides );
			},
		},
	],
};

export default transforms;
