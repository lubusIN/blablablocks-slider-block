/**
 * Wordpress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { SVG, Path } from '@wordpress/components';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';

/**
 * Register a slide block
 */
registerBlockType(metadata.name, {
    icon: (
        <SVG width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ fill: 'none' }}>
            <Path d="M8 21.25H16C17.66 21.25 19 19.91 19 18.25V5.75C19 4.09 17.66 2.75 16 2.75H8C6.34 2.75 5 4.09 5 5.75V18.25C5 19.91 6.34 21.25 8 21.25Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </SVG>
    ),

    /**
     * @see ./edit.js
     */
    edit: Edit,

    /**
     * @see ./save.js
     */
    save,
});
