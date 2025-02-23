/**
 * Wordpress dependencies
 */
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { generateNavigationStyles } from '../utils/style';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @param {Object} props            Component properties.
 * @param {Object} props.attributes The block's attributes.
 * @return {JSX.Element}                      The block's save component.
 */
export default function save( { attributes } ) {
	const blockProps = useBlockProps.save( {
		style: generateNavigationStyles( attributes ),
	} );

	const innerBlocksProps = useInnerBlocksProps.save( {
		className: 'swiper-wrapper',
	} );

	return (
		<div { ...blockProps }>
			<div
				className="swiper"
				data-swiper={ JSON.stringify( attributes ) }
			>
				<div { ...innerBlocksProps } />
			</div>
		</div>
	);
}
