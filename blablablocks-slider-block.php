<?php

/**
 * Plugin Name:       BlaBlaBlocks Slider Block
 * Description:       Slider Block is a WordPress plugin built specifically for the Block Editor, allowing you to create responsive sliders effortlessly.
 * Requires at least: 6.6
 * Requires PHP:      7.4
 * Version:           1.1.1
 * Author:            Lubus
 * License:           MIT
 * License URI:       https://www.gnu.org/licenses/MIT
 * Text Domain:       blablablocks-slider-block
 *
 * @package blablablocks-slider-block
 */

if (! defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 */
function blabslbl_slider_block_init()
{
	register_block_type(__DIR__ . '/build/slider');
	register_block_type(__DIR__ . '/build/slide');
}
add_action('init', 'blabslbl_slider_block_init');

/**
 * Enqueue editor assets for the slider block.
 */
function blabslbl_slider_enqueue_editor_assets()
{
	wp_localize_script(
		'blablablocks-slider-editor-script',
		'BlablablocksData',
		[
			'assetsUrl' => plugin_dir_url(__FILE__) . 'assets',
		]
	);
}
add_action('enqueue_block_editor_assets', 'blabslbl_slider_enqueue_editor_assets');
