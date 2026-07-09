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
import transforms from './transforms';
import { SliderLogo } from '../components';
import './style.scss';

/**
 * Register a slider block
 */
registerBlockType( metadata.name, {
	icon: SliderLogo,
	transforms,
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
} );
