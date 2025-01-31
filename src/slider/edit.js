/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';
import { createBlock } from '@wordpress/blocks';
import {
	useInnerBlocksProps,
	InspectorControls,
	FontSizePicker,
	BlockControls,
	store as blockEditorStore,
	__experimentalSpacingSizesControl as SpacingSizesControl, // eslint-disable-line
	__experimentalBorderRadiusControl as BorderRadiusControl, // eslint-disable-line
} from '@wordpress/block-editor';
import {
	RangeControl,
	ToggleControl,
	ToolbarButton,
	ToolbarGroup,
	__experimentalVStack as VStack, // eslint-disable-line
	__experimentalHeading as Heading, // eslint-disable-line
	__experimentalToolsPanel as ToolsPanel, // eslint-disable-line
	__experimentalToolsPanelItem as ToolsPanelItem, // eslint-disable-line
	__experimentalToggleGroupControl as ToggleGroupControl, // eslint-disable-line
	__experimentalToggleGroupControlOption as ToggleGroupControlOption, // eslint-disable-line
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import Slider from './slider';
import Placeholder from './placeholder';
import { ColorControlDropdown, ResponsiveDropdown } from '../components';
import './editor.scss';

const DEFAULT_BLOCK = {
	name: 'blablablocks/slide',
};

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
	const { insertBlock, selectBlock } = useDispatch( blockEditorStore );

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
		const block = createBlock( 'blablablocks/slide' );
		insertBlock( block, innerBlocks.length, clientId, false );
		selectBlock( block.clientId );
	};

	const defaultSettings = {
		slidesPerView: {
			...attributes.slidesPerView,
			desktop: 1,
			tablet: 1,
			mobile: 1,
		},
		slidesSpacing: {
			...attributes.slidesSpacing,
			desktop: 30,
			tablet: 20,
			mobile: 10,
		},
		speed: 300,
		effects: 'slide',
		autoplay: false,
		delay: 5000,
		navigation: {
			...attributes.navigation,
			desktop: true,
			tablet: true,
			mobile: true,
		},
		pagination: {
			...attributes.pagination,
			desktop: true,
			tablet: true,
			mobile: true,
		},
		loop: false,
	};

	return hasInnerBlocks ? (
		<>
			<Slider
				clientId={ clientId }
				attributes={ attributes }
				innerBlocksProps={ innerBlocksProps }
				innerBlocks={ innerBlocks }
			/>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton onClick={ addSlide }>
						{ __( 'Add Slide', 'blablablocks-slider-block' ) }
					</ToolbarButton>
				</ToolbarGroup>
			</BlockControls>
			<InspectorControls>
				<ToolsPanel
					label={ __( 'Settings', 'blablablocks-slider-block' ) }
					resetAll={ () => setAttributes( defaultSettings ) }
				>
					<ToolsPanelItem
						label={ __(
							'Slides Per View',
							'blablablocks-slider-block'
						) }
						isShownByDefault
						hasValue={ () =>
							JSON.stringify( attributes.slidesPerView ) !==
							JSON.stringify( defaultSettings.slidesPerView )
						}
						onDeselect={ () =>
							setAttributes( {
								slidesPerView: {
									...defaultSettings.slidesPerView,
								},
							} )
						}
					>
						<VStack>
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
									'blablablocks-slider-block'
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
					</ToolsPanelItem>
					<ToolsPanelItem
						label={ __(
							'Slides Spacing',
							'blablablocks-slider-block'
						) }
						isShownByDefault
						hasValue={ () =>
							JSON.stringify( attributes.slidesSpacing ) !==
							JSON.stringify( defaultSettings.slidesSpacing )
						}
						onDeselect={ () =>
							setAttributes( {
								slidesSpacing: {
									...defaultSettings.slidesSpacing,
								},
							} )
						}
					>
						<VStack>
							<ResponsiveDropdown
								label={ __(
									'Slides Spacing',
									'blablablocks-slider-block'
								) }
								attributes={ attributes }
								setAttributes={ setAttributes }
								responsiveKey="slidesSpacing"
							/>
							<RangeControl
								__nextHasNoMarginBottom
								__next40pxDefaultSize
								help={ __(
									'Adjust the spacing between slides.',
									'blablablocks-slider-block'
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
					</ToolsPanelItem>
					<ToolsPanelItem
						label={ __(
							'Speed (ms)',
							'blablablocks-slider-block'
						) }
						isShownByDefault
						hasValue={ () =>
							attributes.speed !== defaultSettings.speed
						}
						onDeselect={ () => setAttributes( { speed: 300 } ) }
					>
						<RangeControl
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							help={ __(
								'Set the duration of transition between slides.',
								'blablablocks-slider-block'
							) }
							label={ __(
								'Speed (ms)',
								'blablablocks-slider-block'
							) }
							min={ 100 } // minimum speed in ms
							max={ 10000 } // maximum speed in ms
							step={ 100 }
							value={ attributes.speed }
							onChange={ ( value ) =>
								setAttributes( { speed: value } )
							}
						/>
					</ToolsPanelItem>
					<ToolsPanelItem
						label={ __( 'Effects', 'blablablocks-slider-block' ) }
						isShownByDefault
						hasValue={ () =>
							attributes.effects !== defaultSettings.effects
						}
						onDeselect={ () =>
							setAttributes( { effects: 'slide' } )
						}
					>
						<ToggleGroupControl
							isBlock
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							label={ __(
								'Effects',
								'blablablocks-slider-block'
							) }
							value={ attributes.effects }
							onChange={ ( value ) =>
								setAttributes( { effects: value } )
							}
							help={ __(
								'Select how slides transition.',
								'blablablocks-slider-block'
							) }
						>
							<ToggleGroupControlOption
								label={ __(
									'Slide',
									'blablablocks-slider-block'
								) }
								value="slide"
							/>
							<ToggleGroupControlOption
								label={ __(
									'Fade',
									'blablablocks-slider-block'
								) }
								value="fade"
							/>
						</ToggleGroupControl>
					</ToolsPanelItem>
					<ToolsPanelItem
						label={ __(
							'Navigation',
							'blablablocks-slider-block'
						) }
						isShownByDefault
						hasValue={ () =>
							JSON.stringify( attributes.navigation ) !==
							JSON.stringify( defaultSettings.navigation )
						}
						onDeselect={ () =>
							setAttributes( {
								navigation: { ...defaultSettings.navigation },
							} )
						}
					>
						<ToggleControl
							__nextHasNoMarginBottom
							className="responsive_field_control"
							help={ __(
								'Enable navigation arrows to manually move between slides.',
								'blablablocks-slider-block'
							) }
							checked={
								attributes.navigation[
									attributes.navigation.activeDevice
								]
							}
							label={
								<ResponsiveDropdown
									label={ __(
										'Navigation',
										'blablablocks-slider-block'
									) }
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
					</ToolsPanelItem>
					<ToolsPanelItem
						label={ __(
							'Pagination',
							'blablablocks-slider-block'
						) }
						isShownByDefault
						hasValue={ () =>
							JSON.stringify( attributes.pagination ) !==
							JSON.stringify( defaultSettings.pagination )
						}
						onDeselect={ () =>
							setAttributes( {
								pagination: { ...defaultSettings.pagination },
							} )
						}
					>
						<ToggleControl
							__nextHasNoMarginBottom
							className="responsive_field_control"
							help={ __(
								'Enable pagination indicators to show slide positions.',
								'blablablocks-slider-block'
							) }
							checked={
								attributes.pagination[
									attributes.pagination.activeDevice
								]
							}
							label={
								<ResponsiveDropdown
									label={ __(
										'Pagination',
										'blablablocks-slider-block'
									) }
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
					</ToolsPanelItem>
					<ToolsPanelItem
						label={ __( 'Loop', 'blablablocks-slider-block' ) }
						hasValue={ () =>
							attributes.loop !== defaultSettings.loop
						}
						onDeselect={ () => setAttributes( { loop: false } ) }
					>
						<ToggleControl
							__nextHasNoMarginBottom
							help={ __(
								'Enable loop to continuously cycle through slides.',
								'blablablocks-slider-block'
							) }
							checked={ attributes.loop }
							label={ __( 'Loop', 'blablablocks-slider-block' ) }
							onChange={ ( value ) =>
								setAttributes( { loop: value } )
							}
						/>
					</ToolsPanelItem>
					<ToolsPanelItem
						label={ __( 'Autoplay', 'blablablocks-slider-block' ) }
						hasValue={ () =>
							attributes.autoplay !== defaultSettings.autoplay
						}
						onDeselect={ () =>
							setAttributes( {
								autoplay: false,
								delay: 5000,
							} )
						}
					>
						<ToggleControl
							__nextHasNoMarginBottom
							help={ __(
								'Enable automatic slide transition.',
								'blablablocks-slider-block'
							) }
							checked={ attributes.autoplay }
							label={ __(
								'Autoplay',
								'blablablocks-slider-block'
							) }
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
									'blablablocks-slider-block'
								) }
								label={ __(
									'Delay (ms)',
									'blablablocks-slider-block'
								) }
								min={ 100 } // minimum delay in ms
								max={ 10000 } // maximum delay in ms
								step={ 100 }
								value={ attributes.delay }
								onChange={ ( value ) =>
									setAttributes( { delay: value } )
								}
							/>
						) }
					</ToolsPanelItem>
				</ToolsPanel>
			</InspectorControls>
			<InspectorControls group="styles">
				<ToolsPanel
					label={ __( 'Navigation', 'blablablocks-slider-block' ) }
					resetAll={ () =>
						setAttributes( {
							navigationSize: undefined,
							navigationColor: {
								arrow: { default: undefined, hover: undefined },
								background: {
									default: undefined,
									hover: undefined,
								},
							},
							navigationPadding: undefined,
							navigationOffset: undefined,
							navigationBorderRadius: undefined,
						} )
					}
				>
					<ToolsPanelItem
						label={ __( 'Size', 'blablablocks-slider-block' ) }
						isShownByDefault
						hasValue={ () => !! attributes.navigationSize }
						onDeselect={ () =>
							setAttributes( { navigationSize: undefined } )
						}
					>
						<FontSizePicker
							__next40pxDefaultSize
							withSlider
							withReset={ false }
							onChange={ ( size ) =>
								setAttributes( { navigationSize: size } )
							}
							value={ attributes.navigationSize }
						/>
					</ToolsPanelItem>
					<ToolsPanelItem
						label={ __( 'Color', 'blablablocks-slider-block' ) }
						isShownByDefault
						hasValue={ () =>
							!! attributes?.navigationColor?.arrowColor
								?.default ||
							!! attributes?.navigationColor?.arrowColor?.hover ||
							!! attributes?.navigationColor?.backgroundColor
								?.default ||
							!! attributes?.navigationColor?.backgroundColor
								?.hover
						}
						onDeselect={ () =>
							setAttributes( {
								navigationColor: {
									arrow: {
										default: undefined,
										hover: undefined,
									},
									background: {
										default: undefined,
										hover: undefined,
									},
								},
							} )
						}
					>
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
									label={ __(
										'Arrow',
										'blablablocks-slider-block'
									) }
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
									hasHover={ true }
								/>
								<ColorControlDropdown
									label={ __(
										'Background',
										'blablablocks-slider-block'
									) }
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
									hasHover={ true }
								/>
							</VStack>
						</VStack>
					</ToolsPanelItem>
					<ToolsPanelItem
						label={ __( 'Padding', 'blablablocks-slider-block' ) }
						hasValue={ () => !! attributes.navigationPadding }
						onDeselect={ () =>
							setAttributes( { navigationPadding: undefined } )
						}
					>
						<SpacingSizesControl
							values={ attributes.navigationPadding }
							onChange={ ( value ) =>
								setAttributes( { navigationPadding: value } )
							}
							label={ __(
								'Padding',
								'blablablocks-slider-block'
							) }
							allowReset={ false }
							splitOnAxis={ true }
						/>
					</ToolsPanelItem>
					<ToolsPanelItem
						label={ __( 'Offset', 'blablablocks-slider-block' ) }
						hasValue={ () => !! attributes.navigationOffset }
						onDeselect={ () =>
							setAttributes( { navigationOffset: undefined } )
						}
					>
						<SpacingSizesControl
							values={ attributes.navigationOffset }
							onChange={ ( value ) =>
								setAttributes( { navigationOffset: value } )
							}
							label={ __(
								'Offset',
								'blablablocks-slider-block'
							) }
							minimumCustomValue={ -Infinity }
							allowReset={ false }
							splitOnAxis={ true }
						/>
					</ToolsPanelItem>
					<ToolsPanelItem
						label={ __( 'Radius', 'blablablocks-slider-block' ) }
						hasValue={ () => !! attributes.navigationBorderRadius }
						onDeselect={ () =>
							setAttributes( {
								navigationBorderRadius: undefined,
							} )
						}
					>
						<BorderRadiusControl
							values={ attributes.navigationBorderRadius }
							onChange={ ( value ) =>
								setAttributes( {
									navigationBorderRadius: value,
								} )
							}
						/>
					</ToolsPanelItem>
				</ToolsPanel>
			</InspectorControls>
			<InspectorControls group="styles">
				<ToolsPanel
					label={ __( 'Pagination', 'blablablocks-slider-block' ) }
					resetAll={ () =>
						setAttributes( {
							paginationSize: undefined,
							paginationColor: {
								activeColor: undefined,
								inactiveColor: undefined,
							},
							paginationOffset: undefined,
						} )
					}
				>
					<ToolsPanelItem
						label={ __( 'Size', 'blablablocks-slider-block' ) }
						isShownByDefault
						hasValue={ () => !! attributes.paginationSize }
						onDeselect={ () =>
							setAttributes( { paginationSize: undefined } )
						}
					>
						<FontSizePicker
							__next40pxDefaultSize
							withSlider
							withReset={ false }
							onChange={ ( size ) =>
								setAttributes( { paginationSize: size } )
							}
							value={ attributes.paginationSize }
						/>
					</ToolsPanelItem>
					<ToolsPanelItem
						label={ __( 'Color', 'blablablocks-slider-block' ) }
						isShownByDefault
						hasValue={ () =>
							!! attributes?.paginationColor?.activeColor ||
							!! attributes?.paginationColor?.inactiveColor
						}
						onDeselect={ () =>
							setAttributes( {
								paginationColor: {
									activeColor: undefined,
									inactiveColor: undefined,
								},
							} )
						}
					>
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
									label={ __(
										'Active',
										'blablablocks-slider-block'
									) }
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
									label={ __(
										'Inactive',
										'blablablocks-slider-block'
									) }
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
					</ToolsPanelItem>
					<ToolsPanelItem
						label={ __( 'Offset', 'blablablocks-slider-block' ) }
						hasValue={ () => !! attributes.paginationOffset }
						onDeselect={ () =>
							setAttributes( { paginationOffset: undefined } )
						}
					>
						<SpacingSizesControl
							values={ attributes.paginationOffset }
							onChange={ ( value ) =>
								setAttributes( { paginationOffset: value } )
							}
							label={ __(
								'Offset',
								'blablablocks-slider-block'
							) }
							minimumCustomValue={ -Infinity }
							allowReset={ false }
							splitOnAxis={ true }
						/>
					</ToolsPanelItem>
				</ToolsPanel>
			</InspectorControls>
		</>
	) : (
		<Placeholder clientId={ clientId } setAttributes={ setAttributes } />
	);
}
