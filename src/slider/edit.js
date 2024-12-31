/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';
import { memo, useEffect, useRef } from '@wordpress/element';
import { createBlock } from '@wordpress/blocks';
import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
	FontSizePicker,
	BlockControls,
	store as blockEditorStore,
	__experimentalSpacingSizesControl as SpacingSizesControl,
	__experimentalBorderRadiusControl as BorderRadiusControl,
} from '@wordpress/block-editor';
import {
	PanelBody,
	RangeControl,
	ToggleControl,
	ToolbarButton,
	ToolbarGroup,
	__experimentalVStack as VStack,
	__experimentalHeading as Heading,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import Placeholder from './placeholder';
import { ColorControlDropdown, ResponsiveDropdown } from '../components';
import { SwiperInit } from './swiper-init';
import { generateNavigationStyles } from '../utils/style';
import './editor.scss';

const DEFAULT_BLOCK = {
	name: 'lubus/slide',
};

/**
 * Slider component.
 */
const Slider = memo( ( { attributes, innerBlocksProps, innerBlocks } ) => {
	const editorDeviceType = useSelect(
		( select ) => select( 'core/editor' ).getDeviceType(),
		[]
	);
	const swiperContainerRef = useRef( null );
	const swiperInstanceRef = useRef( null );

	useEffect( () => {
		if ( swiperContainerRef.current && innerBlocks.length > 0 ) {
			// Clear existing Swiper classes
			swiperContainerRef.current.className = 'swiper';

			// Destroy the existing Swiper instance, if any
			if ( swiperInstanceRef.current ) {
				swiperInstanceRef.current.destroy( true, true );
				swiperInstanceRef.current = null;
			}

			// Reinitialize Swiper with device-specific attributes
			swiperInstanceRef.current = SwiperInit(
				swiperContainerRef.current,
				{
					...attributes,
				},
				editorDeviceType, // Pass the current editor device type
				true
			);
		}

		// Cleanup on unmount
		return () => {
			if ( swiperInstanceRef.current ) {
				swiperInstanceRef.current.destroy( true, true );
			}
		};
	}, [ editorDeviceType, attributes, innerBlocks.length ] );

	// Inline styles for navigation
	const navigationStyles = generateNavigationStyles( attributes );
	const applyPadding = innerBlocks.length >= 2 ? '100px' : '';

	return (
		<div
			{ ...useBlockProps( {
				style: { ...navigationStyles, padding: applyPadding },
			} ) }
		>
			<div ref={ swiperContainerRef }>
				<div { ...innerBlocksProps } />
			</div>
		</div>
	);
} );

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param {Object}   props               Component props.
 * @param {string}   props.clientId      The client ID for this block instance.
 * @param {Object}   props.attributes    The block attributes.
 * @param {Function} props.setAttributes Function to update block attributes.
 *
 * @return {JSX.Element} The component rendering for the block editor.
 */
export default function Edit( { clientId, attributes, setAttributes } ) {
	const { allowedBlocks } = attributes;
	const { insertBlock } = useDispatch( blockEditorStore );

	const innerBlocksProps = useInnerBlocksProps(
		{ className: 'swiper-wrapper' },
		{
			defaultBlock: DEFAULT_BLOCK,
			directInsert: true,
			orientation: 'horizontal',
			allowedBlocks,
		}
	);

	// Check if inner blocks exist using useSelect
	const innerBlocks = useSelect(
		( select ) => select( blockEditorStore ).getBlocks( clientId ),
		[ clientId ]
	);

	const hasInnerBlocks = innerBlocks.length > 0;

	const addSlide = () => {
		const block = createBlock( 'lubus/slide' );
		insertBlock( block, innerBlocks.length, clientId, false );
	};

	return hasInnerBlocks ? (
		<>
			<Slider
				attributes={ attributes }
				innerBlocksProps={ innerBlocksProps }
				innerBlocks={ innerBlocks }
			/>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton onClick={ addSlide }>
						{ __( 'Add Slide', 'slider-block' ) }
					</ToolbarButton>
				</ToolbarGroup>
			</BlockControls>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'slider-block' ) }>
					<VStack style={ { marginBottom: '8px' } }>
						<ResponsiveDropdown
							label="Slides Per View"
							attributes={ attributes }
							setAttributes={ setAttributes }
							responsiveKey="slidesPerView"
						/>
						<RangeControl
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							help={ __(
								"Number of slides visible at the same time on slider's container.",
								'slider-block'
							) }
							value={
								attributes.slidesPerView[
									attributes.slidesPerView.activeDevice
								]
							}
							min={ 1 }
							max={ 30 }
							onChange={ ( value ) =>
								setAttributes( {
									slidesPerView: {
										...attributes.slidesPerView,
										[ attributes.slidesPerView
											.activeDevice ]: value,
									},
								} )
							}
						/>
					</VStack>
					<VStack style={ { marginBottom: '16px' } }>
						<ResponsiveDropdown
							label={ __( 'Slides Spacing', 'slider-block' ) }
							attributes={ attributes }
							setAttributes={ setAttributes }
							responsiveKey="slidesSpacing"
						/>
						<RangeControl
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							help={ __(
								'Adjust the spacing between slides.',
								'slider-block'
							) }
							initialPosition={ 30 }
							value={
								attributes.slidesSpacing[
									attributes.slidesSpacing.activeDevice
								]
							}
							min={ 0 }
							onChange={ ( value ) =>
								setAttributes( {
									slidesSpacing: {
										...attributes.slidesSpacing,
										[ attributes.slidesSpacing
											.activeDevice ]: value,
									},
								} )
							}
						/>
					</VStack>
					<RangeControl
						__nextHasNoMarginBottom
						__next40pxDefaultSize
						help={ __(
							'Set the duration of transition between slides.',
							'slider-block'
						) }
						label={ __( 'Speed (ms)', 'slider-block' ) }
						min={ 100 } // minimum speed in ms
						max={ 10000 } // maximum speed in ms
						step={ 100 }
						value={ attributes.speed }
						onChange={ ( value ) =>
							setAttributes( { speed: value } )
						}
					/>
					<ToggleGroupControl
						isBlock
						__nextHasNoMarginBottom
						__next40pxDefaultSize
						label={ __( 'Effects', 'slider-block' ) }
						value={ attributes.effects }
						onChange={ ( value ) =>
							setAttributes( { effects: value } )
						}
						help={ __(
							'Select how slides transition.',
							'slider-block'
						) }
					>
						<ToggleGroupControlOption
							label={ __( 'Slide', 'slider-block' ) }
							value="slide"
						/>
						<ToggleGroupControlOption
							label={ __( 'Fade', 'slider-block' ) }
							value="fade"
						/>
					</ToggleGroupControl>
					<ToggleControl
						__nextHasNoMarginBottom
						className='responsive_field_control'
						help={ __(
							'Enable navigation arrows to manually move between slides.',
							'slider-block'
						) }
						checked={
							attributes.navigation[
								attributes.navigation.activeDevice
							]
						}
						label={
							<ResponsiveDropdown
								label={ __( 'Navigation', 'slider-block' ) }
								attributes={ attributes }
								setAttributes={ setAttributes }
								responsiveKey="navigation"
							/>
						}
						onChange={ ( value ) =>
							setAttributes( {
								navigation: {
									...attributes.navigation,
									[ attributes.navigation.activeDevice ]:
										value,
								},
							} )
						}
					/>
					<ToggleControl
						__nextHasNoMarginBottom
						className='responsive_field_control'
						help={ __(
							'Enable pagination indicators to show slide positions.',
							'slider-block'
						) }
						checked={
							attributes.pagination[
								attributes.pagination.activeDevice
							]
						}
						label={
							<ResponsiveDropdown
								label={ __( 'Pagination', 'slider-block' ) }
								attributes={ attributes }
								setAttributes={ setAttributes }
								responsiveKey="pagination"
							/>
						}
						onChange={ ( value ) =>
							setAttributes( {
								pagination: {
									...attributes.pagination,
									[ attributes.pagination.activeDevice ]:
										value,
								},
							} )
						}
					/>
					<ToggleControl
						__nextHasNoMarginBottom
						help={ __(
							'Enable loop to continuously cycle through slides.',
							'slider-block'
						) }
						checked={ attributes.loop }
						label={ __( 'Loop', 'slider-block' ) }
						onChange={ ( value ) =>
							setAttributes( { loop: value } )
						}
					/>
					<ToggleControl
						__nextHasNoMarginBottom
						help={ __(
							'Enable automatic slide transition.',
							'slider-block'
						) }
						checked={ attributes.autoplay }
						label={ __( 'Autoplay', 'slider-block' ) }
						onChange={ ( value ) =>
							setAttributes( { autoplay: value } )
						}
					/>
					{ attributes.autoplay && (
						<RangeControl
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							help={ __(
								'Set the delay between slides in milliseconds.',
								'slider-block'
							) }
							label={ __( 'Delay (ms)', 'slider-block' ) }
							min={ 100 } // minimum delay in ms
							max={ 10000 } // maximum delay in ms
							step={ 100 }
							value={ attributes.delay }
							onChange={ ( value ) =>
								setAttributes( { delay: value } )
							}
						/>
					) }
				</PanelBody>
			</InspectorControls>
			<InspectorControls group="styles">
				<PanelBody
					title={ __( 'Navigation', 'slider-block' ) }
					initialOpen={ true }
				>
					<VStack spacing={ 4 }>
						<FontSizePicker
							__next40pxDefaultSize
							withSlider
							withReset={ false }
							onChange={ ( size ) =>
								setAttributes( { navigationSize: size } )
							}
							value={ attributes.navigationSize }
						/>
						<VStack spacing={ 0 }>
							<Heading
								lineHeight={ 1 }
								level={ 3 }
								weight={ 500 }
								upperCase
							>
								Color
							</Heading>
							<VStack
								className="slider_color-support-panel"
								spacing={ 0 }
							>
								<ColorControlDropdown
									label={ __( 'Arrow', 'slider-block' ) }
									colorValue={
										attributes?.navigationColor
											?.arrowColor || {}
									}
									onChangeColor={ ( newColor ) =>
										setAttributes( {
											navigationColor: {
												...attributes.navigationColor,
												arrowColor: newColor,
											},
										} )
									}
								/>
								<ColorControlDropdown
									label={ __( 'Background', 'slider-block' ) }
									colorValue={
										attributes?.navigationColor
											?.backgroundColor || {}
									}
									onChangeColor={ ( newColor ) =>
										setAttributes( {
											navigationColor: {
												...attributes?.navigationColor,
												backgroundColor: newColor,
											},
										} )
									}
								/>
							</VStack>
						</VStack>
						<SpacingSizesControl
							values={ attributes.navigationPadding }
							onChange={ ( value ) =>
								setAttributes( { navigationPadding: value } )
							}
							label={ __( 'Padding', 'slider-block' ) }
							allowReset={ false }
							splitOnAxis={ true }
						/>
						<SpacingSizesControl
							values={ attributes.navigationOffset }
							onChange={ ( value ) =>
								setAttributes( { navigationOffset: value } )
							}
							label={ __( 'Offset', 'slider-block' ) }
							minimumCustomValue={ -Infinity }
							allowReset={ false }
							splitOnAxis={ true }
						/>
						<BorderRadiusControl
							values={ attributes.navigationBorderRadius }
							onChange={ ( value ) =>
								setAttributes( {
									navigationBorderRadius: value,
								} )
							}
						/>
					</VStack>
				</PanelBody>
			</InspectorControls>
			<InspectorControls group="styles">
				<PanelBody
					title={ __( 'Pagination', 'slider-block' ) }
					initialOpen={ true }
				>
					<VStack spacing={ 4 }>
						<FontSizePicker
							__next40pxDefaultSize
							withSlider
							withReset={ false }
							onChange={ ( size ) =>
								setAttributes( { paginationSize: size } )
							}
							value={ attributes.paginationSize }
						/>
						<VStack spacing={ 0 }>
							<Heading
								lineHeight={ 1 }
								level={ 3 }
								weight={ 500 }
								upperCase
							>
								Color
							</Heading>
							<VStack
								className="slider_color-support-panel"
								spacing={ 0 }
							>
								<ColorControlDropdown
									label={ __( 'Active', 'slider-block' ) }
									colorValue={
										attributes?.paginationColor
											?.activeColor || {}
									}
									onChangeColor={ ( newColor ) =>
										setAttributes( {
											paginationColor: {
												...attributes.paginationColor,
												activeColor: newColor,
											},
										} )
									}
								/>
								<ColorControlDropdown
									label={ __( 'Inactive', 'slider-block' ) }
									colorValue={
										attributes?.paginationColor
											?.inactiveColor || {}
									}
									onChangeColor={ ( newColor ) =>
										setAttributes( {
											paginationColor: {
												...attributes?.paginationColor,
												inactiveColor: newColor,
											},
										} )
									}
								/>
							</VStack>
						</VStack>
						<SpacingSizesControl
							values={ attributes.paginationOffset }
							onChange={ ( value ) =>
								setAttributes( { paginationOffset: value } )
							}
							label={ __( 'Offset', 'slider-block' ) }
							minimumCustomValue={ -Infinity }
							allowReset={ false }
							splitOnAxis={ true }
						/>
					</VStack>
				</PanelBody>
			</InspectorControls>
		</>
	) : (
		<Placeholder
			clientId={ clientId }
			attributes={ attributes }
			setAttributes={ setAttributes }
		/>
	);
}
