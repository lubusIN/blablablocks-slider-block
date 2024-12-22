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
    __experimentalBorderRadiusControl as BorderRadiusControl
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
import './editor.scss';
import ColorControlDropdown from '../components/color-control';
import { SwiperInit } from './swiper-init';
import { generateNavigationStyles } from '../utils/style';
import ResponsiveDropdown from '../components/responsive-dropdown';

const DEFAULT_BLOCK = {
    name: 'lubus/slide',
};

/**
 * Simulate device-specific preview for editor.
 *
 * @param {Object} swiperInstance The Swiper instance.
 * @param {string} deviceType     The current editor device type.
 * @param {Object} attributes     The block attributes.
 */
/**
 * Simulate device-specific preview for editor.
 *
 * @param {Object} swiperInstance The Swiper instance.
 * @param {string} deviceType     The current editor device type.
 * @param {Object} attributes     The block attributes.
 */
function simulateDevicePreview(swiperInstance, deviceType, attributes) {
    const isFadeEffect = attributes?.effects === 'fade';

    const breakpointSettings = {
        Desktop: {
            slidesPerView: isFadeEffect ? 1 : attributes?.slidesPerView?.desktop ?? 3,
            spaceBetween: attributes?.slidesSpacing?.desktop ?? 30,
        },
        Tablet: {
            slidesPerView: isFadeEffect ? 1 : attributes?.slidesPerView?.tablet ?? 2,
            spaceBetween: attributes?.slidesSpacing?.tablet ?? 20,
        },
        Mobile: {
            slidesPerView: isFadeEffect ? 1 : attributes?.slidesPerView?.mobile ?? 1,
            spaceBetween: attributes?.slidesSpacing?.mobile ?? 10,
        },
    };

    const settings = breakpointSettings[deviceType];
    if (settings && swiperInstance) {
        swiperInstance.params.slidesPerView = settings.slidesPerView;
        swiperInstance.params.spaceBetween = settings.spaceBetween;
        swiperInstance.update();
    }
}

/**
 * Slider component.
 */
const Slider = memo(({ attributes, innerBlocksProps, innerBlocks }) => {
    const editorDeviceType = useSelect((select) => select('core/editor').getDeviceType(), []);
    const swiperContainerRef = useRef(null);
    const swiperInstanceRef = useRef(null);

    useEffect(() => {
        if (swiperContainerRef.current && innerBlocks.length > 0) {
            // Cleanup: Remove any residual Swiper-related classes
            swiperContainerRef.current.className = 'swiper';

            // Destroy the existing Swiper instance, if any
            if (swiperInstanceRef.current) {
                swiperInstanceRef.current.destroy(true, true);
                swiperInstanceRef.current = null;
            }

            // Reinitialize Swiper with updated attributes
            swiperInstanceRef.current = SwiperInit(swiperContainerRef.current, {
                ...attributes,
            });

            // Simulate device-specific preview in editor
            simulateDevicePreview(swiperInstanceRef.current, editorDeviceType, attributes);
        }

        // Cleanup on unmount
        return () => {
            if (swiperInstanceRef.current) {
                swiperInstanceRef.current.destroy(true, true);
            }
        };
    }, [editorDeviceType, attributes, innerBlocks.length]);

    // Inline styles for navigation
    const navigationStyles = generateNavigationStyles(attributes);

    return (
        <div {...useBlockProps({ style: navigationStyles })}>
            <div ref={swiperContainerRef}>
                <div {...innerBlocksProps} />
            </div>
        </div>
    );
});

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 * 
 * @param {Object} props Component props.
 * @param {string} props.clientId The client ID for this block instance.
 * @param {Object} props.attributes The block attributes.
 * @param {Function} props.setAttributes Function to update block attributes.
 *
 * @return {JSX.Element} The component rendering for the block editor.
 */
export default function Edit({ clientId, attributes, setAttributes }) {
    const { allowedBlocks } = attributes;
    const { insertBlock } = useDispatch(blockEditorStore);

    const innerBlocksProps = useInnerBlocksProps(
        { className: 'swiper-wrapper' },
        {
            defaultBlock: DEFAULT_BLOCK,
            directInsert: true,
            orientation: 'horizontal',
            allowedBlocks: allowedBlocks,
        }
    );

    // Check if inner blocks exist using useSelect
    const innerBlocks = useSelect(
        (select) => select(blockEditorStore).getBlocks(clientId),
        [clientId]
    );

    const hasInnerBlocks = innerBlocks.length > 0;

    const addSlide = () => {
        const block = createBlock('lubus/slide');
        insertBlock(block, innerBlocks.length, clientId, false);
    }

    return (
        hasInnerBlocks ? (
            <>
                <Slider
                    attributes={attributes}
                    innerBlocksProps={innerBlocksProps}
                    innerBlocks={innerBlocks}
                />
                <BlockControls>
                    <ToolbarGroup>
                        <ToolbarButton icon="plus" onClick={addSlide}>
                            {__('Add Slide', 'lubus-slider')}
                        </ToolbarButton>
                    </ToolbarGroup>
                </BlockControls>
                <InspectorControls>
                    <PanelBody title={__('Settings', 'lubus-slider')}>
                        <VStack style={{ marginBottom: '8px' }}>
                            <ResponsiveDropdown
                                label="Slides Per View"
                                attributes={attributes}
                                setAttributes={setAttributes}
                                responsiveKey="slidesPerView"
                            />
                            <RangeControl
                                __nextHasNoMarginBottom
                                __next40pxDefaultSize
                                help={__("Number of slides visible at the same time on slider's container.", 'lubus-slider')}
                                value={attributes.slidesPerView[attributes.slidesPerView.activeDevice]}
                                min={1}
                                max={30}
                                onChange={(value) =>
                                    setAttributes({
                                        slidesPerView: {
                                            ...attributes.slidesPerView,
                                            [attributes.slidesPerView.activeDevice]: value,
                                        },
                                    })
                                }
                            />
                        </VStack>
                        <VStack style={{ marginBottom: '16px' }}>
                            <ResponsiveDropdown
                                label="Slides Spacing"
                                attributes={attributes}
                                setAttributes={setAttributes}
                                responsiveKey="slidesSpacing"
                            />
                            <RangeControl
                                __nextHasNoMarginBottom
                                __next40pxDefaultSize
                                help={__("Adjust the spacing between slides.", 'lubus-slider')}
                                initialPosition={30}
                                value={attributes.slidesSpacing[attributes.slidesSpacing.activeDevice]}
                                min={0}
                                onChange={(value) =>
                                    setAttributes({
                                        slidesSpacing: {
                                            ...attributes.slidesSpacing,
                                            [attributes.slidesSpacing.activeDevice]: value,
                                        },
                                    })
                                }
                            />
                        </VStack>
                        <RangeControl
                            __nextHasNoMarginBottom
                            __next40pxDefaultSize
                            help={__('Set the duration of transition between slides.', 'lubus-slider')}
                            label={__('Speed (ms)', 'lubus-slider')}
                            min={100} // minimum speed in ms
                            max={10000} // maximum speed in ms
                            step={100}
                            value={attributes.speed}
                            onChange={(value) => setAttributes({ speed: value })}
                        />
                        <ToggleGroupControl
                            isBlock
                            __nextHasNoMarginBottom
                            __next40pxDefaultSize
                            label="Effects"
                            value={attributes.effects}
                            onChange={(value) => setAttributes({ effects: value })}
                            help="Select how slides transition."
                        >
                            <ToggleGroupControlOption
                                label="Slide"
                                value="slide"
                            />
                            <ToggleGroupControlOption
                                label="Fade"
                                value="fade"
                            />
                        </ToggleGroupControl>
                        <ToggleControl
                            __nextHasNoMarginBottom
                            help={__('Enable navigation arrows to manually move between slides.', 'lubus-slider')}
                            checked={attributes.navigation}
                            label={__('Navigation', 'lubus-slider')}
                            onChange={(value) => setAttributes({ navigation: value })}
                        />
                        <ToggleControl
                            __nextHasNoMarginBottom
                            help={__('Enable pagination indicators to show slide positions.', 'lubus-slider')}
                            checked={attributes.pagination}
                            label={__('Pagination', 'lubus-slider')}
                            onChange={(value) => setAttributes({ pagination: value })}
                        />
                        <ToggleControl
                            __nextHasNoMarginBottom
                            help={__('Enable loop to continuously cycle through slides.', 'lubus-slider')}
                            checked={attributes.loop}
                            label={__('Loop', 'lubus-slider')}
                            onChange={(value) => setAttributes({ loop: value })}
                        />
                        <ToggleControl
                            __nextHasNoMarginBottom
                            help={__('Enable automatic slide transition.', 'lubus-slider')}
                            checked={attributes.autoplay}
                            label={__('Autoplay', 'lubus-slider')}
                            onChange={(value) => setAttributes({ autoplay: value })}
                        />
                        {attributes.autoplay &&
                            <RangeControl
                                __nextHasNoMarginBottom
                                __next40pxDefaultSize
                                help={__('Set the delay between slides in milliseconds.', 'lubus-slider')}
                                label={__('Delay (ms)', 'lubus-slider')}
                                min={100} // minimum delay in ms
                                max={10000} // maximum delay in ms
                                step={100}
                                value={attributes.delay}
                                onChange={(value) => setAttributes({ delay: value })}
                            />
                        }
                    </PanelBody>
                </InspectorControls>
                <InspectorControls group="styles">
                    <PanelBody title={__('Navigation', 'lubus-slider')} initialOpen={true}>
                        <VStack spacing={4}>
                            <FontSizePicker
                                __next40pxDefaultSize
                                withSlider
                                withReset={false}
                                onChange={(size) => setAttributes({ navigationSize: size })}
                                value={attributes.navigationSize}
                            />
                            <VStack spacing={0}>
                                <Heading lineHeight={1} level={3} weight={500} upperCase>Color</Heading>
                                <VStack className='slider_color-support-panel' spacing={0}>
                                    <ColorControlDropdown
                                        label={__('Arrow')}
                                        colorValue={attributes?.navigationColor?.arrowColor || {}}
                                        onChangeColor={(newColor) =>
                                            setAttributes({
                                                navigationColor: {
                                                    ...attributes.navigationColor,
                                                    arrowColor: newColor,
                                                },
                                            })
                                        }
                                    />
                                    <ColorControlDropdown
                                        label={__('Background')}
                                        colorValue={attributes?.navigationColor?.backgroundColor || {}}
                                        onChangeColor={(newColor) =>
                                            setAttributes({
                                                navigationColor: {
                                                    ...attributes?.navigationColor,
                                                    backgroundColor: newColor,
                                                },
                                            })
                                        }
                                    />
                                </VStack>
                            </VStack>
                            <SpacingSizesControl
                                values={attributes.navigationPadding}
                                onChange={(value) => setAttributes({ navigationPadding: value })}
                                label={'Padding'}
                                allowReset={false}
                                splitOnAxis={true}
                            />
                            <SpacingSizesControl
                                values={attributes.navigationOffset}
                                onChange={(value) => setAttributes({ navigationOffset: value })}
                                label={'Offset'}
                                minimumCustomValue={-Infinity}
                                allowReset={false}
                                splitOnAxis={true}
                            />
                            <BorderRadiusControl
                                values={attributes.navigationBorderRadius}
                                onChange={(value) => setAttributes({ navigationBorderRadius: value })}
                            />
                        </VStack>
                    </PanelBody>
                </InspectorControls>
                <InspectorControls group="styles">
                    <PanelBody title={__('Pagination', 'lubus-slider')} initialOpen={true}>
                        <VStack spacing={4}>
                            <FontSizePicker
                                __next40pxDefaultSize
                                withSlider
                                withReset={false}
                                onChange={(size) => setAttributes({ paginationSize: size })}
                                value={attributes.paginationSize}
                            />
                            <VStack spacing={0}>
                                <Heading lineHeight={1} level={3} weight={500} upperCase>Color</Heading>
                                <VStack className='slider_color-support-panel' spacing={0}>
                                    <ColorControlDropdown
                                        label={__('Active')}
                                        colorValue={attributes?.paginationColor?.activeColor || {}}
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
                                        label={__('Inactive')}
                                        colorValue={attributes?.paginationColor?.inactiveColor || {}}
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
                            <SpacingSizesControl
                                values={attributes.paginationOffset}
                                onChange={(value) => setAttributes({ paginationOffset: value })}
                                label={'Offset'}
                                minimumCustomValue={-Infinity}
                                allowReset={false}
                                splitOnAxis={true}
                            />
                        </VStack>
                    </PanelBody>
                </InspectorControls>
            </>
        ) : (
            <Placeholder clientId={clientId} attributes={attributes} setAttributes={setAttributes} />
        )
    );
}