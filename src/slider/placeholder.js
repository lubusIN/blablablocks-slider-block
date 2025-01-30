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
	Modal,
	DropZone,
	__experimentalGrid as Grid, // eslint-disable-line
	__experimentalVStack as VStack, // eslint-disable-line
	__experimentalText as Text, // eslint-disable-line
} from '@wordpress/components';
import {
	useBlockProps,
	BlockPreview,
	__experimentalBlockVariationPicker as BlockVariationPicker, // eslint-disable-line
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { uploadMedia } from '@wordpress/media-utils';

/**
 * Internal dependencies
 */
import variations from './variations';
import { Services, Testimonial, HeroSection } from '../templates';
import { SliderLogo } from '../components';

/**
 * Default patterns for modal preview.
 */
const defaultPatterns = [ Testimonial, HeroSection, Services ];

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

	const [ step, setStep ] = useState( null );
	const [ isModalOpen, setIsModalOpen ] = useState( false );

	const onSelectVariation = ( variation ) => {
		if ( variation?.attributes ) {
			setAttributes( variation.attributes );
		}
		if ( variation?.innerBlocks ) {
			replaceInnerBlocks(
				clientId,
				createBlocksFromInnerBlocksTemplate( variation.innerBlocks ),
				true
			);
		}
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
				__( 'Only image files are allowed.', 'slider-block' ),
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
						__( 'File upload failed.', 'slider-block' ),
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
					onSelect={ ( variation = variations[ 1 ] ) => {
						onSelectVariation( variation );
					} }
					allowSkip
				/>
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
