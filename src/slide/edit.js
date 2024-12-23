/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import './editor.scss';

const DEFAULT_BLOCK = [
    ['core/cover', { customOverlayColor: "#3858E9" }, [
        ['core/paragraph', { content: "Hello World" }],
    ]]
];

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 */
export default function Edit() {

    const blockProps = useBlockProps({
        className: 'swiper-slide'
    });
    const innerBlocksProps = useInnerBlocksProps(blockProps, {
        template: DEFAULT_BLOCK, // Define the default block template
        directInsert: true,
    });

    return (
        <div {...innerBlocksProps} />
    );
}
