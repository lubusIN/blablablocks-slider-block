/**
 * Wordpress dependencies
 */
import { memo, useEffect, useRef } from '@wordpress/element';
import { useSelect, subscribe, select } from '@wordpress/data';
import {
	useBlockProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { SwiperInit } from './swiper-init';
import { generateNavigationStyles } from '../utils/style';

/**
 * Slider Component
 * Responsible for rendering and managing the Swiper slider instance.
 *
 * @param {Object} props                  - Component properties.
 * @param {string} props.clientId         - The client ID for this block instance.
 * @param {Object} props.attributes       - The block attributes.
 * @param {Object} props.innerBlocksProps - Properties for inner blocks.
 * @param {Array}  props.innerBlocks      - List of inner blocks.
 *
 * @return {JSX.Element} The slider component.
 */
const Slider = memo(
	( { clientId, attributes, innerBlocksProps, innerBlocks } ) => {
		const swiperContainerRef = useRef( null );
		const swiperInstanceRef = useRef( null );

		const editorDeviceType = useSelect(
			( wpSelect ) => wpSelect( 'core/editor' ).getDeviceType(),
			[]
		);

		/**
		 * Initialize the Swiper slider instance.
		 */
		const initializeSwiper = () => {
			if ( swiperContainerRef.current && innerBlocks.length > 0 ) {
				swiperContainerRef.current.className = 'swiper';

				// Destroy any existing Swiper instance.
				if ( swiperInstanceRef.current ) {
					swiperInstanceRef.current.destroy( true, true );
					swiperInstanceRef.current = null;
				}

				// Create a new Swiper instance.
				swiperInstanceRef.current = SwiperInit(
					swiperContainerRef.current,
					{ ...attributes },
					editorDeviceType,
					true
				);
			}
		};

		/**
		 * Update the Swiper instance when slides are added, removed, or reordered.
		 *
		 * @param {string[]} slideOrder - Array of block client IDs representing the slide order.
		 */
		const manageSwiperUpdates = ( slideOrder ) => {
			const currentSlidesOrder =
				select( blockEditorStore ).getBlockOrder( clientId );

			if ( currentSlidesOrder.toString() !== slideOrder.toString() ) {
				const selectedBlock =
					select( blockEditorStore ).getSelectedBlock();
				const slideAdded =
					currentSlidesOrder.length > slideOrder.length;
				const slideRemoved =
					currentSlidesOrder.length < slideOrder.length;
				const slideMoved =
					currentSlidesOrder.length === slideOrder.length;

				// Save the active slide index.
				const activeIndex = swiperInstanceRef.current?.activeIndex || 0;
				slideOrder = currentSlidesOrder;

				// Destroy and reinitialize the Swiper instance.
				swiperInstanceRef.current?.destroy();
				window.requestAnimationFrame( () => {
					initializeSwiper();

					let slideToIndex = activeIndex;

					if ( slideAdded ) {
						slideToIndex = slideOrder.length - 1;
					} else if ( slideRemoved ) {
						slideToIndex = Math.max( activeIndex - 1, 0 );
					} else if ( slideMoved ) {
						slideToIndex = slideOrder.findIndex(
							( blockClientId ) =>
								blockClientId === selectedBlock?.clientId
						);
					}

					swiperInstanceRef.current?.slideTo(
						slideToIndex >= 0 ? slideToIndex : 0,
						0
					);
				} );
			}
		};

		useEffect( () => {
			initializeSwiper();

			const slideOrder =
				select( blockEditorStore ).getBlockOrder( clientId );

			// Subscribe to updates in the block editor.
			const unsubscribe = subscribe( () =>
				manageSwiperUpdates( slideOrder )
			);

			// Cleanup on component unmount.
			return () => {
				unsubscribe();
				swiperInstanceRef.current?.destroy( true, true );
			};
		}, [ editorDeviceType, attributes, innerBlocks.length ] );

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
	}
);

export default Slider;
