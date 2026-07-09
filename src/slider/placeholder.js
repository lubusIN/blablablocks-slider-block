/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { useDispatch } from '@wordpress/data';
import { store as noticesStore } from '@wordpress/notices';
import {
	createBlock,
	createBlocksFromInnerBlocksTemplate,
} from '@wordpress/blocks';
import {
	Placeholder as PlaceholderComponent,
	Button,
	FormFileUpload,
	Modal,
	DropZone,
	__experimentalGrid as Grid, // eslint-disable-line
	__experimentalVStack as VStack, // eslint-disable-line
	__experimentalText as Text, // eslint-disable-line
} from '@wordpress/components';
import {
	useBlockProps,
	BlockPreview,
	MediaUpload,
	MediaUploadCheck,
	__experimentalBlockVariationPicker as BlockVariationPicker, // eslint-disable-line
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { uploadMedia } from '@wordpress/media-utils';

/**
 * Internal dependencies
 */
import variations from './variations';
import * as templates from '../templates';
import { SliderLogo } from '../components';

/**
 * Default patterns for modal preview.
 */
const defaultPatterns = Object.values( templates );

/**
 * This component serves as a placeholder for the Slider block, displaying a block variation picker.
 * It allows users to choose from predefined variations for initializing the block with default settings.
 *
 * @param {Object}   props               Component props.
 * @param {string}   props.clientId      The client ID for this block instance.
 * @param {Function} props.setAttributes Function to update block attributes.
 *
 * @return {JSX.Element} The placeholder component for the Slider block.
 */
function Placeholder( { clientId, setAttributes } ) {
	const { replaceInnerBlocks } = useDispatch( blockEditorStore );
	const { createErrorNotice } = useDispatch( noticesStore );
	const blockProps = useBlockProps();

	const defaultVariation =
		variations.find( ( variation ) => variation.name === 'hero-slider' ) ||
		variations[ 0 ];

	const [ step, setStep ] = useState( null );
	const [ isModalOpen, setIsModalOpen ] = useState( false );

	const onSelectVariation = ( variation ) => {
		if ( variation?.attributes ) {
			setAttributes( variation.attributes );
		}
		if ( variation?.name === 'images-slider' ) {
			setStep( 'images' );
			return;
		}
		if ( variation?.innerBlocks ) {
			replaceInnerBlocks(
				clientId,
				createBlocksFromInnerBlocksTemplate( variation.innerBlocks ),
				true
			);
		}
	};

	const onSelectImages = ( selectedImages ) => {
		const images = Array.isArray( selectedImages )
			? selectedImages
			: [ selectedImages ];
		const imageSlides = images
			.filter(
				( image ) => image?.url || image?.source_url || image?.blob
			)
			.map( ( image ) => {
				const caption = image.caption?.raw ?? image.caption;

				return createBlock( 'blablablocks/slide', {}, [
					createBlock( 'core/image', {
						id: image.id,
						url: image.url ?? image.source_url,
						blob: image.blob,
						alt: image.alt ?? image.alt_text ?? '',
						caption: typeof caption === 'string' ? caption : '',
					} ),
				] );
			} );

		if ( imageSlides.length === 0 ) {
			createErrorNotice(
				__(
					'Please select at least one image.',
					'blablablocks-slider-block'
				),
				{ isDismissible: true }
			);
			return;
		}

		replaceInnerBlocks( clientId, imageSlides, true );
	};

	const openTemplatesModal = () => {
		setIsModalOpen( true );
	};

	const applyPattern = ( pattern ) => {
		const parsedBlocks = wp.blocks.parse( pattern.content );
		wp.data
			.dispatch( 'core/block-editor' )
			.replaceBlock( clientId, parsedBlocks );
		setIsModalOpen( false );
	};

	const handleFilesUpload = async ( files ) => {
		const validFiles = Array.from( files ).filter( ( file ) =>
			file.type.startsWith( 'image/' )
		);

		if ( validFiles.length === 0 ) {
			createErrorNotice(
				__(
					'Only image files are allowed.',
					'blablablocks-slider-block'
				),
				{
					isDismissible: true,
				}
			);
			return;
		}

		// Split into existing and new files
		const existingBlocks = [];
		const newFiles = [];

		for ( const file of validFiles ) {
			const response = await wp.apiFetch( {
				path: `/wp/v2/media?search=${ encodeURIComponent(
					file.name
				) }&per_page=1`,
			} );

			if ( response && response.length > 0 ) {
				// Use existing media item
				const mediaItem = response[ 0 ];
				existingBlocks.push(
					createBlock( 'blablablocks/slide', {}, [
						createBlock( 'core/image', {
							url: mediaItem.source_url,
						} ),
					] )
				);
			} else {
				// Queue file for upload
				newFiles.push( file );
			}
		}

		// Add existing media blocks
		if ( existingBlocks.length > 0 ) {
			replaceInnerBlocks( clientId, existingBlocks, false );
		}

		// Upload new files
		if ( newFiles.length > 0 ) {
			uploadMedia( {
				filesList: newFiles,
				onFileChange: ( media ) => {
					const newBlocks = media.map( ( item ) =>
						createBlock( 'blablablocks/slide', {}, [
							createBlock( 'core/image', { url: item.url } ),
						] )
					);
					replaceInnerBlocks(
						clientId,
						[ ...existingBlocks, ...newBlocks ],
						false
					);
				},
				onError: () => {
					createErrorNotice(
						__(
							'File upload failed.',
							'blablablocks-slider-block'
						),
						{
							isDismissible: true,
						}
					);
				},
			} );
		}
	};

	const onFilesDrop = ( files ) => {
		if ( files && files.length > 0 ) {
			handleFilesUpload( files );
		}
	};

	return (
		<div { ...blockProps }>
			{ ! step && (
				<PlaceholderComponent
					icon={ SliderLogo }
					instructions={ __(
						'Choose a pattern for the slider, start blank or drag and drop images here.',
						'blablablocks-slider-block'
					) }
					label={ __( 'Slider', 'blablablocks-slider-block' ) }
				>
					<Button variant="primary" onClick={ openTemplatesModal }>
						{ __( 'Choose', 'blablablocks-slider-block' ) }
					</Button>
					<Button
						variant="secondary"
						onClick={ () => setStep( 'variations' ) }
					>
						{ __( 'Start blank', 'blablablocks-slider-block' ) }
					</Button>
					<DropZone onFilesDrop={ onFilesDrop } accept="image/*" />
				</PlaceholderComponent>
			) }

			{ step === 'variations' && (
				<BlockVariationPicker
					icon={ SliderLogo }
					label={ __( 'Slider', 'blablablocks-slider-block' ) }
					instructions={ __(
						'Select a variation to start with:',
						'blablablocks-slider-block'
					) }
					variations={ variations }
					onSelect={ ( variation ) => {
						onSelectVariation( variation ?? defaultVariation );
					} }
					allowSkip
				/>
			) }

			{ step === 'images' && (
				<PlaceholderComponent
					icon={ SliderLogo }
					label={ __( 'Image Slider', 'blablablocks-slider-block' ) }
					instructions={ __(
						'Select multiple images to create one slide for each image.',
						'blablablocks-slider-block'
					) }
				>
					<FormFileUpload
						accept="image/*"
						multiple
						onChange={ ( event ) =>
							handleFilesUpload( event.target.files )
						}
						render={ ( { openFileDialog } ) => (
							<Button
								variant="primary"
								onClick={ openFileDialog }
							>
								{ __( 'Upload', 'blablablocks-slider-block' ) }
							</Button>
						) }
					/>
					<MediaUploadCheck>
						<MediaUpload
							allowedTypes={ [ 'image' ] }
							multiple
							gallery={ false }
							onSelect={ onSelectImages }
							render={ ( { open } ) => (
								<Button variant="secondary" onClick={ open }>
									{ __(
										'Media Library',
										'blablablocks-slider-block'
									) }
								</Button>
							) }
						/>
					</MediaUploadCheck>
					<Button
						variant="tertiary"
						onClick={ () => setStep( 'variations' ) }
					>
						{ __( 'Cancel', 'blablablocks-slider-block' ) }
					</Button>
					<DropZone onFilesDrop={ onFilesDrop } accept="image/*" />
				</PlaceholderComponent>
			) }

			{ isModalOpen && (
				<Modal
					title={ __(
						'Choose a Template',
						'blablablocks-slider-block'
					) }
					isFullScreen
					onRequestClose={ () => setIsModalOpen( false ) }
				>
					<Grid gap={ 4 } columns={ [ 1, 2, 3 ] } align="start">
						{ defaultPatterns.map( ( pattern ) => (
							<Button
								key={ pattern.name }
								className={ 'slider-pattern-item' }
								onClick={ () => applyPattern( pattern ) }
								style={ { width: '100%', height: '100%' } }
							>
								<VStack
									alignment="top"
									align="left"
									style={ { width: '100%', height: '100%' } }
								>
									<BlockPreview
										blocks={ wp.blocks.parse(
											pattern.content
										) }
									/>
									<Text align="left" size={ 12 }>
										{ pattern.title }
									</Text>
								</VStack>
							</Button>
						) ) }
					</Grid>
				</Modal>
			) }
		</div>
	);
}

export default Placeholder;
