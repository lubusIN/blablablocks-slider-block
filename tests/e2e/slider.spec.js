/**
 * External dependencies
 */
const path = require( 'path' );

/**
 * WordPress dependencies
 */
const { test, expect } = require( '@wordpress/e2e-test-utils-playwright' );

const TEST_IMAGE_URL = '/wp-includes/images/w-logo-blue-white-bg.png';

const SLIDER_CONTENT = `
<!-- wp:blablablocks/slider {"slidesPerViewMode":"auto","autoplay":false,"navigationColor":{"arrowColor":{"default":{"color":"#123456"}}}} -->
<!-- wp:blablablocks/slide -->
<div class="wp-block-blablablocks-slide swiper-slide"><!-- wp:paragraph -->
<p>First test slide</p>
<!-- /wp:paragraph --></div>
<!-- /wp:blablablocks/slide -->

<!-- wp:blablablocks/slide -->
<div class="wp-block-blablablocks-slide swiper-slide"><!-- wp:paragraph -->
<p>Second test slide</p>
<!-- /wp:paragraph --></div>
<!-- /wp:blablablocks/slide -->
<!-- /wp:blablablocks/slider -->`;

let postId;
let mediaIds = [];

test.afterEach( async ( { requestUtils } ) => {
	if ( postId ) {
		await requestUtils.rest( {
			method: 'DELETE',
			path: `/wp/v2/posts/${ postId }?force=true`,
		} );
		postId = undefined;
	}

	await Promise.all(
		mediaIds.map( ( mediaId ) => requestUtils.deleteMedia( mediaId ) )
	);
	mediaIds = [];
} );

const publishAndReload = async ( admin, editor ) => {
	postId = await editor.publishPost();
	expect( postId ).toBeTruthy();
	await admin.editPost( postId );
	return editor.getBlocks();
};

test( 'saves, reloads, and initializes a slider on the frontend', async ( {
	admin,
	editor,
	page,
} ) => {
	await admin.createNewPost( { title: 'Slider E2E test' } );
	await editor.setContent( SLIDER_CONTENT );

	let blocks = await editor.getBlocks();
	expect( blocks ).toHaveLength( 1 );
	expect( blocks[ 0 ].name ).toBe( 'blablablocks/slider' );
	expect( blocks[ 0 ].innerBlocks ).toHaveLength( 2 );

	blocks = await publishAndReload( admin, editor );
	expect( blocks[ 0 ].name ).toBe( 'blablablocks/slider' );
	expect( blocks[ 0 ].attributes.slidesPerViewMode ).toBe( 'auto' );
	expect( blocks[ 0 ].innerBlocks ).toHaveLength( 2 );

	await page.goto( `/?p=${ postId }` );
	const slider = page.getByRole( 'region', { name: 'Slider block' } );
	const swiper = slider.locator( '.swiper' );

	await expect( slider ).toBeVisible();
	await expect( slider.locator( '.swiper-slide' ) ).toHaveCount( 2 );
	await expect( slider ).toHaveClass( /bbb-slider-slides-per-view-auto/ );
	await expect( slider ).toHaveCSS( '--navigation-arrow-color', '#123456' );

	await expect
		.poll( () => swiper.evaluate( ( element ) => !! element.swiper ) )
		.toBe( true );
	await expect
		.poll( () =>
			swiper.evaluate(
				( element ) => element.swiper.params.slidesPerView
			)
		)
		.toBe( 'auto' );
} );

test( 'transforms a Gallery into a Slider and survives reload', async ( {
	admin,
	editor,
} ) => {
	await admin.createNewPost( { title: 'Gallery transform E2E test' } );
	await editor.insertBlock( {
		name: 'core/gallery',
		innerBlocks: [
			{
				name: 'core/image',
				attributes: {
					url: TEST_IMAGE_URL,
					alt: 'First gallery image',
					caption: 'First caption',
				},
			},
			{
				name: 'core/image',
				attributes: {
					url: TEST_IMAGE_URL,
					alt: 'Second gallery image',
				},
			},
		],
	} );

	await editor.selectBlocks(
		editor.canvas.locator( '[data-type="core/gallery"]' )
	);
	await editor.transformBlockTo( 'blablablocks/slider' );

	let blocks = await editor.getBlocks();
	expect( blocks[ 0 ].name ).toBe( 'blablablocks/slider' );
	expect( blocks[ 0 ].attributes.slidesPerView ).toMatchObject( {
		desktop: 2,
		tablet: 2,
		mobile: 1,
	} );
	expect( blocks[ 0 ].innerBlocks ).toHaveLength( 2 );
	expect(
		blocks[ 0 ].innerBlocks[ 0 ].innerBlocks[ 0 ].attributes
	).toMatchObject( {
		alt: 'First gallery image',
		caption: 'First caption',
	} );

	blocks = await publishAndReload( admin, editor );
	expect( blocks[ 0 ].name ).toBe( 'blablablocks/slider' );
	expect( blocks[ 0 ].innerBlocks ).toHaveLength( 2 );
} );

test( 'transforms multiple selected Images into one Slider', async ( {
	admin,
	editor,
} ) => {
	await admin.createNewPost( { title: 'Images transform E2E test' } );
	await editor.insertBlock( {
		name: 'core/image',
		attributes: { url: TEST_IMAGE_URL, alt: 'First selected image' },
	} );
	await editor.insertBlock( {
		name: 'core/image',
		attributes: { url: TEST_IMAGE_URL, alt: 'Second selected image' },
	} );

	const images = editor.canvas.locator( '[data-type="core/image"]' );
	await expect( images ).toHaveCount( 2 );
	await editor.selectBlocks( images.first(), images.last() );
	await editor.transformBlockTo( 'blablablocks/slider' );

	let blocks = await editor.getBlocks();
	expect( blocks ).toHaveLength( 1 );
	expect( blocks[ 0 ].name ).toBe( 'blablablocks/slider' );
	expect( blocks[ 0 ].innerBlocks ).toHaveLength( 2 );
	expect(
		blocks[ 0 ].innerBlocks.map(
			( slide ) => slide.innerBlocks[ 0 ].attributes.alt
		)
	).toEqual( [ 'First selected image', 'Second selected image' ] );

	blocks = await publishAndReload( admin, editor );
	expect( blocks[ 0 ].innerBlocks ).toHaveLength( 2 );
} );

test( 'transforms Columns into styled Group slides', async ( {
	admin,
	editor,
} ) => {
	await admin.createNewPost( { title: 'Columns transform E2E test' } );
	await editor.insertBlock( {
		name: 'core/columns',
		innerBlocks: [
			{
				name: 'core/column',
				attributes: {
					width: '40%',
					verticalAlignment: 'center',
					style: { color: { background: '#abcdef' } },
				},
				innerBlocks: [
					{
						name: 'core/paragraph',
						attributes: { content: 'First column' },
					},
				],
			},
			{
				name: 'core/column',
				innerBlocks: [
					{
						name: 'core/paragraph',
						attributes: { content: 'Second column' },
					},
				],
			},
		],
	} );

	await editor.selectBlocks(
		editor.canvas.locator( '[data-type="core/columns"]' )
	);
	await editor.transformBlockTo( 'blablablocks/slider' );

	let blocks = await editor.getBlocks();
	const firstGroup = blocks[ 0 ].innerBlocks[ 0 ].innerBlocks[ 0 ];
	expect( blocks[ 0 ].name ).toBe( 'blablablocks/slider' );
	expect( blocks[ 0 ].innerBlocks ).toHaveLength( 2 );
	expect( firstGroup.name ).toBe( 'core/group' );
	expect( firstGroup.attributes.style ).toMatchObject( {
		color: { background: '#abcdef' },
	} );
	expect( firstGroup.attributes.width ).toBeUndefined();
	expect( firstGroup.attributes.verticalAlignment ).toBeUndefined();
	expect( firstGroup.innerBlocks[ 0 ].attributes.content ).toBe(
		'First column'
	);

	blocks = await publishAndReload( admin, editor );
	expect( blocks[ 0 ].innerBlocks ).toHaveLength( 2 );
} );

test( 'creates slides from multiple Media Library images without Gallery mode', async ( {
	admin,
	editor,
	page,
	requestUtils,
} ) => {
	const uploadedMedia = await Promise.all( [
		requestUtils.uploadMedia(
			path.join(
				process.cwd(),
				'assets/templates/logo-carousel/Image.png'
			)
		),
		requestUtils.uploadMedia(
			path.join(
				process.cwd(),
				'assets/templates/logo-carousel/Audio.png'
			)
		),
	] );
	mediaIds = uploadedMedia.map( ( media ) => media.id );

	await admin.createNewPost( { title: 'Image Slider media E2E test' } );
	await editor.insertBlock( { name: 'blablablocks/slider' } );
	await editor.canvas.getByRole( 'button', { name: 'Start blank' } ).click();
	await editor.canvas
		.getByRole( 'button', { name: /Image Slider/i } )
		.click();
	await editor.canvas
		.getByRole( 'button', { name: 'Media Library' } )
		.click();

	const mediaModal = page.locator( '.media-modal' );
	await expect( mediaModal ).toBeVisible();
	// The media grid is lazy-rendered, so select the freshly uploaded models
	// directly instead of waiting for their thumbnail elements.
	const selectedMediaIds = await page.evaluate( async ( ids ) => {
		const selection = window.wp.media.frame.state().get( 'selection' );
		const attachments = ids.map( ( id ) =>
			window.wp.media.attachment( id )
		);

		await Promise.all(
			attachments.map( ( attachment ) => attachment.fetch() )
		);
		selection.reset( attachments );

		return selection.pluck( 'id' );
	}, mediaIds );
	expect( selectedMediaIds ).toEqual( mediaIds );

	await expect(
		mediaModal.getByRole( 'button', { name: 'Create a new gallery' } )
	).toHaveCount( 0 );
	const selectMedia = mediaModal.locator( '.media-button-select' );
	await expect( selectMedia ).toBeEnabled();
	await selectMedia.click();

	let blocks = await editor.getBlocks();
	expect( blocks[ 0 ].name ).toBe( 'blablablocks/slider' );
	expect( blocks[ 0 ].innerBlocks ).toHaveLength( 2 );
	expect(
		blocks[ 0 ].innerBlocks.map(
			( slide ) => slide.innerBlocks[ 0 ].attributes.id
		)
	).toEqual( mediaIds );

	blocks = await publishAndReload( admin, editor );
	expect( blocks[ 0 ].innerBlocks ).toHaveLength( 2 );
} );
