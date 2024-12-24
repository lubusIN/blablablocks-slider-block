/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { createBlocksFromInnerBlocksTemplate } from '@wordpress/blocks';
import { useDispatch } from '@wordpress/data';
import {
	Placeholder as PlaceholderComponent,
	Button,
	Modal,
	__experimentalGrid as Grid,
	__experimentalVStack as VStack,
	__experimentalText as Text,
} from '@wordpress/components';
import {
	useBlockProps,
	BlockPreview,
	__experimentalBlockVariationPicker as BlockVariationPicker,
	store as blockEditorStore,
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import variations from './variations';
import { Testimonial2, Services, Testimonial } from '../templates';
import SliderLogo from '../components/slider-logo';

/**
 * Default patterns for modal preview.
 */
const defaultPatterns = [ Testimonial, Testimonial2, Services ];

/**
 * This component serves as a placeholder for the Slider block, displaying a block variation picker.
 * It allows users to choose from predefined variations for initializing the block with default settings.
 *
 * @param {Object}   props               Component props.
 * @param {string}   props.clientId      The client ID for this block instance.
 * @param {Function} props.setAttributes Function to update block attributes.
 *
 * @param            props.attributes
 * @return {JSX.Element} The placeholder component for the Slider block.
 */
function Placeholder( { clientId, attributes, setAttributes } ) {
	const { replaceInnerBlocks } = useDispatch( blockEditorStore );
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

	const skipToDefault = () => {
		const defaultVariation = variations[ 1 ]; // Assuming the first variation is the default
		if ( defaultVariation ) {
			onSelectVariation( defaultVariation );
		}
		setStep( 'default' );
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

	return (
		<div { ...blockProps }>
			{ ! step && (
				<PlaceholderComponent
					icon={ 'slides' }
					instructions={ __(
						"Choose how you'd like to get started with your slider.",
						'slider-block'
					) }
					label={ __(
						"Let's Begin Creating Your Slider!",
						'slider-block'
					) }
				>
					<Button
						variant="secondary"
						onClick={ () => setStep( 'variations' ) }
					>
						{ __( 'Explore Variations', 'slider-block' ) }
					</Button>
					<Button variant="secondary" onClick={ openTemplatesModal }>
						{ __( 'Browse Templates', 'slider-block' ) }
					</Button>
					<Button variant="primary" onClick={ skipToDefault }>
						{ __( 'Skip and Use Default', 'slider-block' ) }
					</Button>
				</PlaceholderComponent>
			) }

			{ step === 'variations' && (
				<BlockVariationPicker
					icon={ SliderLogo }
					label={ __( 'Slider', 'slider-block' ) }
					instructions={ __(
						'Select a slide variation to start with',
						'slider-block'
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
					title={ __( 'Choose a Template', 'slider-block' ) }
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
