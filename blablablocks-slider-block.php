<?php

/**
 * Plugin Name:       BlaBlaBlocks Slider Block
 * Description:       Slider Block is a WordPress plugin built specifically for the Block Editor, allowing you to create responsive sliders effortlessly.
 * Requires at least: 6.6
 * Requires PHP:      7.4
 * Version:           1.0.0
 * Author:            Lubus
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
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
function bbb_slider_block_init()
{
	register_block_type(__DIR__ . '/build/slider');
	register_block_type(__DIR__ . '/build/slide');
}
add_action('init', 'bbb_slider_block_init');
