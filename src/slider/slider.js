/**
 * Wordpress dependencies
 */
import clsx from 'clsx';
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
	( {
		clientId,
		attributes,
		setAttributes,
		innerBlocksProps,
		innerBlocks,
	} ) => {
		const swiperContainerRef = useRef( null );
		const swiperInstanceRef = useRef( null );

		const editorDeviceType = useSelect(
			( wpSelect ) => wpSelect( 'core/editor' ).getDeviceType(),
			[]
		);

		const isAnySlideFocused = useSelect(
			( wpSelect ) => {
				const selected =
					wpSelect( blockEditorStore ).getSelectedBlockClientId();
				if ( ! selected ) {
					return false;
				}

				if ( selected === clientId ) {
					return true;
				}

				const root =
					wpSelect( blockEditorStore ).getBlockHierarchyRootClientId(
						selected
					);
				return root === clientId;
			},
			[ clientId ]
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
						const totalSlides = slideOrder.length;
						const updated = { ...attributes.slidesPerView };
						let hasChanges = false;

						[ 'desktop', 'tablet', 'mobile' ].forEach(
							( device ) => {
								const current = updated[ device ] ?? 1;
								const maxAllowed = Math.max(
									totalSlides - 1,
									1
								); // always minimum of 1
								const newVal = Math.min( current, maxAllowed ); // auto-restrict if over limit

								if ( newVal !== current ) {
									updated[ device ] = newVal;
									hasChanges = true;
								}
							}
						);

						if ( hasChanges ) {
							setAttributes( { slidesPerView: updated } );
						}
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

		useEffect( () => {
			const swiper = swiperInstanceRef.current;
			if ( ! swiper || ! swiper.autoplay ) {
				return;
			}
			if ( isAnySlideFocused ) {
				swiper.autoplay.stop();
			} else if ( attributes.autoplay ) {
				swiper.autoplay.start();
			}
		}, [ isAnySlideFocused, attributes ] );

		const navigationStyles = generateNavigationStyles( attributes );
		const applyPadding = innerBlocks.length >= 2 ? '100px' : '';

		return (
			<div
				{ ...useBlockProps( {
					className: clsx(
						'bbb-slider-nav-position-' +
							( attributes.navigationPosition?.replace(
								/\s+/g,
								'-'
							) ?? 'center' ),
						'bbb-slider-pag-position-' +
							( attributes.paginationPosition?.replace(
								/\s+/g,
								'-'
							) ?? 'bottom-center' )
					),
					role: 'region',
					'aria-roledescription': 'carousel',
					'aria-label': 'Slider block',
					style: { ...navigationStyles, padding: applyPadding },
				} ) }
			>
				<div ref={ swiperContainerRef }>
					<div { ...innerBlocksProps } />
					<div className="bbb-slider-nav-container">
						<div className="swiper-button-prev"></div>
						<div className="swiper-button-next"></div>
					</div>
				</div>
			</div>
		);
	}
);

export default Slider;
