/**
 * Wordpress dependencies
 */
import { useSelect } from '@wordpress/data';
import {
	useBlockProps,
	useInnerBlocksProps,
	store as blockEditorStore,
	InnerBlocks,
} from '@wordpress/block-editor';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param {Object} props          Component props.
 * @param {string} props.clientId The client ID for this block instance.
 */
export default function Edit( { clientId } ) {
	const { hasChildBlocks } = useSelect(
		( select ) => {
			const { getBlockOrder } = select( blockEditorStore );
			return {
				hasChildBlocks: getBlockOrder( clientId ).length > 0,
			};
		},
		[ clientId ]
	);

	const blockProps = useBlockProps( {
		className: 'swiper-slide',
	} );

	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		renderAppender: hasChildBlocks
			? undefined
			: InnerBlocks.ButtonBlockAppender,
	} );

	return <div { ...innerBlocksProps } />;
}
