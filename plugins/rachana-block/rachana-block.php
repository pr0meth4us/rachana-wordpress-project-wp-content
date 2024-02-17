<?php
/**
 * Plugin Name:       Rachana Blocks Plugin
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       rachana-block
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function create_block_rachana_block_init() {
	register_block_type(plugin_dir_path(__FILE__) . 'components/accordion/');

	// Additional components would be registered here
	register_block_type(plugin_dir_path(__FILE__) . 'components/hero/');
}
add_action( 'init', 'create_block_rachana_block_init' );
