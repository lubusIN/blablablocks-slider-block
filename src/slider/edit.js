/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import { createBlock, createBlocksFromInnerBlocksTemplate } from '@wordpress/blocks';
import {
	useBlockProps,
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
	Notice,
	ToggleControl,
	ToolbarButton,
	ToolbarGroup,
	AlignmentMatrixControl,
	__experimentalText as Text, // eslint-disable-line
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
import { generateNavigationStyles } from '../utils/style';
import { QUERY_TEMPLATE } from './query-template';
import './editor.scss';

const DEFAULT_BLOCK = {
	name: 'blablablocks/slide',
};

// QUERY_TEMPLATE is shared with the Posts Carousel variation.

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
export default function Edit({ clientId, attributes, setAttributes }) {
	const isQuerySource = attributes.contentSource === 'query';
	const { insertBlock, selectBlock, replaceInnerBlocks, updateBlockAttributes } =
		useDispatch(blockEditorStore);

	const slideInnerBlocksProps = useInnerBlocksProps(
		{ className: 'swiper-wrapper' },
		{
			defaultBlock: DEFAULT_BLOCK,
			directInsert: true,
			orientation: 'horizontal',
			allowedBlocks: ['blablablocks/slide'],
		}
	);

	const queryInnerBlocksProps = useInnerBlocksProps(
		{ className: 'bbb-slider-query-inner' },
		{
			allowedBlocks: ['core/query'],
			template: QUERY_TEMPLATE,
			renderAppender: false,
		}
	);

	// Check if inner blocks exist using useSelect
	const innerBlocks = useSelect(
		(select) => select(blockEditorStore).getBlocks(clientId),
		[clientId]
	);

	const editorDeviceType = useSelect(
		(wpSelect) => wpSelect('core/editor').getDeviceType(),
		[]
	);

	const hasInnerBlocks = innerBlocks.length > 0;

		const queryBlock = innerBlocks.find((block) => block.name === 'core/query');
		const queryPerPage = queryBlock?.attributes?.query?.perPage;
		const deviceKey = (editorDeviceType || 'Desktop').toLowerCase();
		const navigationEnabled = !!attributes?.navigation?.[deviceKey];
		const paginationEnabled = !!attributes?.pagination?.[deviceKey];
		const slidesPerViewPreview =
			attributes.effects === 'fade'
				? 1
				: attributes?.slidesPerView?.[deviceKey] ?? 1;
		const slidesSpacingPreview = attributes?.slidesSpacing?.[deviceKey] ?? 0;
		const slidesPerViewNumber = Math.max(
			Number.parseFloat(slidesPerViewPreview) || 1,
			1
		);
		const slidesPerViewInverse = 1 / slidesPerViewNumber;
		const slidesPerViewGapCount = Math.max(slidesPerViewNumber - 1, 0);

	const slidesPerViewMax = isQuerySource
		? Math.max(Number.parseInt(queryPerPage, 10) || 10, 1)
		: Math.max(innerBlocks.length, 1);

	const {
		children: queryInnerBlocksChildren,
		...queryInnerBlocksWrapperProps
	} = queryInnerBlocksProps;

	const navigationStyles = generateNavigationStyles(attributes);
	const applyPadding =
		(Number.parseInt(queryPerPage, 10) || 0) >= 2 ? '100px' : '';

	const navPositionClass =
		'bbb-slider-nav-position-' +
		(attributes.navigationPosition?.replace(/\s+/g, '-') ?? 'center');
	const pagPositionClass =
		'bbb-slider-pag-position-' +
		(attributes.paginationPosition?.replace(/\s+/g, '-') ??
			'bottom-center');

		const paginationBulletCount = Math.min(
			6,
			Math.max(
				3,
				Math.ceil(
					(Number.parseInt(queryPerPage, 10) || 6) /
						Math.max(
							1,
							attributes?.slidesPerView?.[deviceKey] ?? 1
						)
				)
			)
		);

		const queryWrapperBlockProps = useBlockProps({
			className: ['bbb-slider-source-query', navPositionClass, pagPositionClass].join(
				' '
			),
			role: 'region',
			'aria-roledescription': 'carousel',
			'aria-label': 'Slider block',
			style: {
				...navigationStyles,
				padding: applyPadding,
				'--bbb-editor-slides-per-view': slidesPerViewNumber,
				'--bbb-editor-slides-per-view-inverse': slidesPerViewInverse,
				'--bbb-editor-slides-per-view-gap-count': slidesPerViewGapCount,
				'--bbb-editor-space-between': `${slidesSpacingPreview}px`,
			},
		});

	useEffect(() => {
		if (!isQuerySource) {
			return;
		}

		const hasExactlyOneQueryChild =
			innerBlocks.length === 1 && innerBlocks[0]?.name === 'core/query';
		if (hasExactlyOneQueryChild) {
			return;
		}

		const nextBlocks = queryBlock
			? [queryBlock]
			: createBlocksFromInnerBlocksTemplate(QUERY_TEMPLATE);

		replaceInnerBlocks(clientId, nextBlocks, true);
	}, [isQuerySource, clientId, innerBlocks, queryBlock, replaceInnerBlocks]);

	// If a Query Loop is pasted/inserted into a slide-based slider, automatically switch the mode.
	// This handles the case where the user didn't pick the Posts Carousel variation.
	useEffect(() => {
		if (isQuerySource) {
			return;
		}

		if (innerBlocks.length !== 1 || innerBlocks[0]?.name !== 'core/query') {
			return;
		}

		setAttributes({ contentSource: 'query' });
	}, [isQuerySource, innerBlocks, setAttributes]);

	useEffect(() => {
		if (!isQuerySource || !queryBlock?.clientId) {
			return;
		}

		const currentLock = queryBlock?.attributes?.lock || {};
		if (currentLock.move === true && currentLock.remove === true) {
			return;
		}

		updateBlockAttributes(queryBlock.clientId, {
			lock: {
				...currentLock,
				move: true,
				remove: true,
			},
		});
	}, [
		isQuerySource,
		queryBlock?.clientId,
		queryBlock?.attributes?.lock?.move,
		queryBlock?.attributes?.lock?.remove,
		updateBlockAttributes,
	]);

	const addSlide = () => {
		const block = createBlock('blablablocks/slide');
		insertBlock(block, innerBlocks.length, clientId, false);
		selectBlock(block.clientId);
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
			{isQuerySource ? (
				<div {...queryWrapperBlockProps}>
					<Notice status="info" isDismissible={false}>
						{__(
							'This carousel is driven by Query Loop. Swiping is available on the front end.',
							'blablablocks-slider-block'
						)}
					</Notice>
					<div className="swiper">
						<div {...queryInnerBlocksWrapperProps}>
							{queryInnerBlocksChildren}
						</div>

						{navigationEnabled && (
							<div className="bbb-slider-nav-container">
								<div className="swiper-button-prev"></div>
								<div className="swiper-button-next"></div>
							</div>
						)}

						{paginationEnabled && (
							<div className="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal">
								{Array.from({
									length: paginationBulletCount,
								}).map((_, index) => (
									<span
										// eslint-disable-next-line react/no-array-index-key
										key={index}
										className={
											'swiper-pagination-bullet' +
											(index === 0
												? ' swiper-pagination-bullet-active'
												: '')
										}
									/>
								))}
							</div>
						)}
					</div>
				</div>
			) : (
				<>
					<Slider
						clientId={clientId}
						attributes={attributes}
						innerBlocksProps={slideInnerBlocksProps}
						innerBlocks={innerBlocks}
						setAttributes={setAttributes}
					/>
					<BlockControls>
						<ToolbarGroup>
							<ToolbarButton onClick={addSlide}>
								{__(
									'Add Slide',
									'blablablocks-slider-block'
								)}
							</ToolbarButton>
						</ToolbarGroup>
					</BlockControls>
				</>
			)}
			<InspectorControls>
				<ToolsPanel
					label={__('Settings', 'blablablocks-slider-block')}
					resetAll={() => setAttributes(defaultSettings)}
				>
					<ToolsPanelItem
						label={__(
							'Slides Per View',
							'blablablocks-slider-block'
						)}
						isShownByDefault
						hasValue={() =>
							JSON.stringify(attributes.slidesPerView) !==
							JSON.stringify(defaultSettings.slidesPerView)
						}
						onDeselect={() =>
							setAttributes({
								slidesPerView: {
									...defaultSettings.slidesPerView,
								},
							})
						}
					>
						<VStack>
							<ResponsiveDropdown
								label="Slides Per View"
								attributes={attributes}
								setAttributes={setAttributes}
								responsiveKey="slidesPerView"
							/>
							<RangeControl
								__nextHasNoMarginBottom
								__next40pxDefaultSize
								help={__(
									"Number of slides visible at the same time on slider's container.",
									'blablablocks-slider-block'
								)}
								value={
									attributes.slidesPerView[
									attributes.slidesPerView.activeDevice
									]
								}
								min={1}
								step={0.1}
								max={slidesPerViewMax}
								onChange={(value) =>
									setAttributes({
										slidesPerView: {
											...attributes.slidesPerView,
											[attributes.slidesPerView
												.activeDevice]: value,
										},
									})
								}
							/>
						</VStack>
					</ToolsPanelItem>
					<ToolsPanelItem
						label={__(
							'Slides Spacing',
							'blablablocks-slider-block'
						)}
						isShownByDefault
						hasValue={() =>
							JSON.stringify(attributes.slidesSpacing) !==
							JSON.stringify(defaultSettings.slidesSpacing)
						}
						onDeselect={() =>
							setAttributes({
								slidesSpacing: {
									...defaultSettings.slidesSpacing,
								},
							})
						}
					>
						<VStack>
							<ResponsiveDropdown
								label={__(
									'Slides Spacing',
									'blablablocks-slider-block'
								)}
								attributes={attributes}
								setAttributes={setAttributes}
								responsiveKey="slidesSpacing"
							/>
							<RangeControl
								__nextHasNoMarginBottom
								__next40pxDefaultSize
								help={__(
									'Adjust the spacing between slides.',
									'blablablocks-slider-block'
								)}
								initialPosition={30}
								value={
									attributes.slidesSpacing[
									attributes.slidesSpacing.activeDevice
									]
								}
								min={0}
								onChange={(value) =>
									setAttributes({
										slidesSpacing: {
											...attributes.slidesSpacing,
											[attributes.slidesSpacing
												.activeDevice]: value,
										},
									})
								}
							/>
						</VStack>
					</ToolsPanelItem>
					<ToolsPanelItem
						label={__(
							'Speed (ms)',
							'blablablocks-slider-block'
						)}
						isShownByDefault
						hasValue={() =>
							attributes.speed !== defaultSettings.speed
						}
						onDeselect={() => setAttributes({ speed: 300 })}
					>
						<RangeControl
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							help={__(
								'Set the duration of transition between slides.',
								'blablablocks-slider-block'
							)}
							label={__(
								'Speed (ms)',
								'blablablocks-slider-block'
							)}
							min={100} // minimum speed in ms
							max={10000} // maximum speed in ms
							step={100}
							value={attributes.speed}
							onChange={(value) =>
								setAttributes({ speed: value })
							}
						/>
					</ToolsPanelItem>
					<ToolsPanelItem
						label={__('Effects', 'blablablocks-slider-block')}
						isShownByDefault
						hasValue={() =>
							attributes.effects !== defaultSettings.effects
						}
						onDeselect={() =>
							setAttributes({ effects: 'slide' })
						}
					>
						<ToggleGroupControl
							isBlock
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							label={__(
								'Effects',
								'blablablocks-slider-block'
							)}
							value={attributes.effects}
							onChange={(value) =>
								setAttributes({ effects: value })
							}
							help={__(
								'Select how slides transition.',
								'blablablocks-slider-block'
							)}
						>
							<ToggleGroupControlOption
								label={__(
									'Slide',
									'blablablocks-slider-block'
								)}
								value="slide"
							/>
							<ToggleGroupControlOption
								label={__(
									'Fade',
									'blablablocks-slider-block'
								)}
								value="fade"
							/>
						</ToggleGroupControl>
					</ToolsPanelItem>
					<ToolsPanelItem
						label={__(
							'Navigation',
							'blablablocks-slider-block'
						)}
						isShownByDefault
						hasValue={() =>
							JSON.stringify(attributes.navigation) !==
							JSON.stringify(defaultSettings.navigation)
						}
						onDeselect={() =>
							setAttributes({
								navigation: { ...defaultSettings.navigation },
							})
						}
					>
						<ToggleControl
							__nextHasNoMarginBottom
							className="responsive_field_control"
							help={__(
								'Enable navigation arrows to manually move between slides.',
								'blablablocks-slider-block'
							)}
							checked={
								attributes.navigation[
								attributes.navigation.activeDevice
								]
							}
							label={
								<ResponsiveDropdown
									label={__(
										'Navigation',
										'blablablocks-slider-block'
									)}
									attributes={attributes}
									setAttributes={setAttributes}
									responsiveKey="navigation"
								/>
							}
							onChange={(value) =>
								setAttributes({
									navigation: {
										...attributes.navigation,
										[attributes.navigation.activeDevice]:
											value,
									},
								})
							}
						/>
					</ToolsPanelItem>
					<ToolsPanelItem
						label={__(
							'Pagination',
							'blablablocks-slider-block'
						)}
						isShownByDefault
						hasValue={() =>
							JSON.stringify(attributes.pagination) !==
							JSON.stringify(defaultSettings.pagination)
						}
						onDeselect={() =>
							setAttributes({
								pagination: { ...defaultSettings.pagination },
							})
						}
					>
						<ToggleControl
							__nextHasNoMarginBottom
							className="responsive_field_control"
							help={__(
								'Enable pagination indicators to show slide positions.',
								'blablablocks-slider-block'
							)}
							checked={
								attributes.pagination[
								attributes.pagination.activeDevice
								]
							}
							label={
								<ResponsiveDropdown
									label={__(
										'Pagination',
										'blablablocks-slider-block'
									)}
									attributes={attributes}
									setAttributes={setAttributes}
									responsiveKey="pagination"
								/>
							}
							onChange={(value) =>
								setAttributes({
									pagination: {
										...attributes.pagination,
										[attributes.pagination.activeDevice]:
											value,
									},
								})
							}
						/>
					</ToolsPanelItem>
					<ToolsPanelItem
						label={__('Loop', 'blablablocks-slider-block')}
						hasValue={() =>
							attributes.loop !== defaultSettings.loop
						}
						onDeselect={() => setAttributes({ loop: false })}
					>
						<ToggleControl
							__nextHasNoMarginBottom
							help={__(
								'Enable loop to continuously cycle through slides.',
								'blablablocks-slider-block'
							)}
							checked={attributes.loop}
							label={__('Loop', 'blablablocks-slider-block')}
							onChange={(value) =>
								setAttributes({ loop: value })
							}
						/>
					</ToolsPanelItem>
					<ToolsPanelItem
						label={__('Autoplay', 'blablablocks-slider-block')}
						hasValue={() =>
							attributes.autoplay !== defaultSettings.autoplay
						}
						onDeselect={() =>
							setAttributes({
								autoplay: false,
								delay: 5000,
							})
						}
					>
						<VStack spacing={4}>
							<ToggleControl
								help={__(
									'Enable automatic slide transition.',
									'blablablocks-slider-block'
								)}
								checked={attributes.autoplay}
								label={__(
									'Autoplay',
									'blablablocks-slider-block'
								)}
								onChange={(value) =>
									setAttributes({ autoplay: value })
								}
							/>
							{attributes.autoplay && (
								<RangeControl
									__nextHasNoMarginBottom
									__next40pxDefaultSize
									help={__(
										'Set the delay between slides in milliseconds.',
										'blablablocks-slider-block'
									)}
									label={__(
										'Delay (ms)',
										'blablablocks-slider-block'
									)}
									min={100} // minimum delay in ms
									max={10000} // maximum delay in ms
									step={100}
									value={attributes.delay}
									onChange={(value) =>
										setAttributes({ delay: value })
									}
								/>
							)}
						</VStack>
					</ToolsPanelItem>
				</ToolsPanel>
			</InspectorControls>
			<InspectorControls group="styles">
				<ToolsPanel
					label={__('Navigation', 'blablablocks-slider-block')}
					resetAll={() =>
						setAttributes({
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
							navigationPosition: undefined,
							navigationSpacing: undefined,
							navigationBorderRadius: undefined,
						})
					}
				>
					<ToolsPanelItem
						label={__('Size', 'blablablocks-slider-block')}
						isShownByDefault
						hasValue={() => !!attributes.navigationSize}
						onDeselect={() =>
							setAttributes({ navigationSize: undefined })
						}
					>
						<FontSizePicker
							__next40pxDefaultSize
							withSlider
							withReset={false}
							onChange={(size) =>
								setAttributes({ navigationSize: size })
							}
							value={attributes.navigationSize}
						/>
					</ToolsPanelItem>
					<ToolsPanelItem
						label={__('Color', 'blablablocks-slider-block')}
						isShownByDefault
						hasValue={() =>
							!!attributes?.navigationColor?.arrowColor
								?.default ||
							!!attributes?.navigationColor?.arrowColor?.hover ||
							!!attributes?.navigationColor?.backgroundColor
								?.default ||
							!!attributes?.navigationColor?.backgroundColor
								?.hover
						}
						onDeselect={() =>
							setAttributes({
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
							})
						}
					>
						<VStack spacing={0}>
							<Heading
								lineHeight={1}
								level={3}
								weight={500}
								upperCase
							>
								Color
							</Heading>
							<VStack
								className="slider_color-support-panel"
								spacing={0}
							>
								<ColorControlDropdown
									label={__(
										'Arrow',
										'blablablocks-slider-block'
									)}
									colorValue={
										attributes?.navigationColor
											?.arrowColor || {}
									}
									onChangeColor={(newColor) =>
										setAttributes({
											navigationColor: {
												...attributes.navigationColor,
												arrowColor: newColor,
											},
										})
									}
									hasHover={true}
								/>
								<ColorControlDropdown
									label={__(
										'Background',
										'blablablocks-slider-block'
									)}
									colorValue={
										attributes?.navigationColor
											?.backgroundColor || {}
									}
									onChangeColor={(newColor) =>
										setAttributes({
											navigationColor: {
												...attributes?.navigationColor,
												backgroundColor: newColor,
											},
										})
									}
									hasHover={true}
								/>
							</VStack>
						</VStack>
					</ToolsPanelItem>
					<ToolsPanelItem
						label={__('Padding', 'blablablocks-slider-block')}
						hasValue={() => !!attributes.navigationPadding}
						onDeselect={() =>
							setAttributes({ navigationPadding: undefined })
						}
					>
						<SpacingSizesControl
							values={attributes.navigationPadding}
							onChange={(value) =>
								setAttributes({ navigationPadding: value })
							}
							label={__(
								'Padding',
								'blablablocks-slider-block'
							)}
							allowReset={false}
							splitOnAxis={true}
						/>
					</ToolsPanelItem>
					<ToolsPanelItem
						label={__('Position', 'blablablocks-slider-block')}
						hasValue={() => !!attributes.navigationPosition}
						onDeselect={() =>
							setAttributes({ navigationPosition: undefined })
						}
					>
						<VStack>
							<Text size={'11px'} weight={500} upperCase>
								Position
							</Text>
							<AlignmentMatrixControl
								className="bbb-slider-navigation-position"
								width={60}
								value={attributes.navigationPosition}
								defaultValue="center"
								label={__(
									'Position',
									'blablablocks-slider-block'
								)}
								onChange={(value) => {
									setAttributes({
										navigationPosition: value,
									});
								}}
							/>
						</VStack>
					</ToolsPanelItem>
					<ToolsPanelItem
						label={__('Spacing', 'blablablocks-slider-block')}
						hasValue={() => !!attributes.navigationSpacing}
						onDeselect={() =>
							setAttributes({ navigationSpacing: undefined })
						}
					>
						<SpacingSizesControl
							values={attributes.navigationSpacing}
							onChange={(value) =>
								setAttributes({ navigationSpacing: value })
							}
							label={__(
								'Spacing',
								'blablablocks-slider-block'
							)}
							allowReset={false}
							sides={['horizontal']}
						/>
					</ToolsPanelItem>
					<ToolsPanelItem
						label={__('Offset', 'blablablocks-slider-block')}
						hasValue={() => !!attributes.navigationOffset}
						onDeselect={() =>
							setAttributes({ navigationOffset: undefined })
						}
					>
						<SpacingSizesControl
							values={attributes.navigationOffset}
							onChange={(value) =>
								setAttributes({ navigationOffset: value })
							}
							label={__(
								'Offset',
								'blablablocks-slider-block'
							)}
							minimumCustomValue={-Infinity}
							allowReset={false}
							splitOnAxis={true}
						/>
					</ToolsPanelItem>
					<ToolsPanelItem
						label={__('Radius', 'blablablocks-slider-block')}
						hasValue={() => !!attributes.navigationBorderRadius}
						onDeselect={() =>
							setAttributes({
								navigationBorderRadius: undefined,
							})
						}
					>
						<BorderRadiusControl
							values={attributes.navigationBorderRadius}
							onChange={(value) =>
								setAttributes({
									navigationBorderRadius: value,
								})
							}
						/>
					</ToolsPanelItem>
				</ToolsPanel>
			</InspectorControls>
			<InspectorControls group="styles">
				<ToolsPanel
					label={__('Pagination', 'blablablocks-slider-block')}
					resetAll={() =>
						setAttributes({
							paginationSize: undefined,
							paginationColor: {
								activeColor: undefined,
								inactiveColor: undefined,
							},
							paginationOffset: undefined,
							paginationPosition: undefined,
						})
					}
				>
					<ToolsPanelItem
						label={__('Size', 'blablablocks-slider-block')}
						isShownByDefault
						hasValue={() => !!attributes.paginationSize}
						onDeselect={() =>
							setAttributes({ paginationSize: undefined })
						}
					>
						<FontSizePicker
							__next40pxDefaultSize
							withSlider
							withReset={false}
							onChange={(size) =>
								setAttributes({ paginationSize: size })
							}
							value={attributes.paginationSize}
						/>
					</ToolsPanelItem>
					<ToolsPanelItem
						label={__('Color', 'blablablocks-slider-block')}
						isShownByDefault
						hasValue={() =>
							!!attributes?.paginationColor?.activeColor ||
							!!attributes?.paginationColor?.inactiveColor
						}
						onDeselect={() =>
							setAttributes({
								paginationColor: {
									activeColor: undefined,
									inactiveColor: undefined,
								},
							})
						}
					>
						<VStack spacing={0}>
							<Heading
								lineHeight={1}
								level={3}
								weight={500}
								upperCase
							>
								Color
							</Heading>
							<VStack
								className="slider_color-support-panel"
								spacing={0}
							>
								<ColorControlDropdown
									label={__(
										'Active',
										'blablablocks-slider-block'
									)}
									colorValue={
										attributes?.paginationColor
											?.activeColor || {}
									}
									onChangeColor={(newColor) =>
										setAttributes({
											paginationColor: {
												...attributes.paginationColor,
												activeColor: newColor,
											},
										})
									}
								/>
								<ColorControlDropdown
									label={__(
										'Inactive',
										'blablablocks-slider-block'
									)}
									colorValue={
										attributes?.paginationColor
											?.inactiveColor || {}
									}
									onChangeColor={(newColor) =>
										setAttributes({
											paginationColor: {
												...attributes?.paginationColor,
												inactiveColor: newColor,
											},
										})
									}
								/>
							</VStack>
						</VStack>
					</ToolsPanelItem>
					<ToolsPanelItem
						label={__('Position', 'blablablocks-slider-block')}
						hasValue={() => !!attributes.paginationPosition}
						onDeselect={() =>
							setAttributes({ paginationPosition: undefined })
						}
					>
						<VStack>
							<Text size={'11px'} weight={500} upperCase>
								Position
							</Text>
							<AlignmentMatrixControl
								className="bbb-slider-pagination-position"
								width={60}
								value={attributes.paginationPosition}
								defaultValue="bottom center"
								label={__(
									'Position',
									'blablablocks-slider-block'
								)}
								onChange={(value) => {
									setAttributes({
										paginationPosition: value,
									});
								}}
							/>
						</VStack>
					</ToolsPanelItem>
					<ToolsPanelItem
						label={__('Offset', 'blablablocks-slider-block')}
						hasValue={() => !!attributes.paginationOffset}
						onDeselect={() =>
							setAttributes({ paginationOffset: undefined })
						}
					>
						<SpacingSizesControl
							values={attributes.paginationOffset}
							onChange={(value) =>
								setAttributes({ paginationOffset: value })
							}
							label={__(
								'Offset',
								'blablablocks-slider-block'
							)}
							minimumCustomValue={-Infinity}
							allowReset={false}
							splitOnAxis={true}
						/>
					</ToolsPanelItem>
				</ToolsPanel>
			</InspectorControls>
		</>
	) : (
		<Placeholder clientId={clientId} setAttributes={setAttributes} />
	);
}
