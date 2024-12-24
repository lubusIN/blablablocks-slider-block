/**
 * Wordpress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import './style.scss';
import { SliderLogo } from '../components';

/**
 * Register a slider block
 */
registerBlockType( metadata.name, {
	icon: SliderLogo,
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
} );
