<?php
/**
 * Plugin Name: WDS Gutenberg Page Blocks
 * Plugin URI: https://webdevstudios.com
 * Description: Gutenberg blocks.
 * Author: WebDevStudios
 * Author URI: https://webdevstudios.com
 * Version: 1.0.0
 * License: GPL3+
 * License URI: http://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package wds-gutenberg
 */

//  Exit if accessed directly.
defined('ABSPATH') || exit;

/**
 * Enqueue block editor only JavaScript and CSS
 */
function wds_enqueue_editor_scripts() {

	// Make paths variables so we don't write em twice ;)
	$blockPath = '/assets/js/editor.blocks.js';
	$editorStylePath = '/assets/css/blocks.editor.css';

	// Enqueue the bundled block JS file
	wp_enqueue_script(
		'wds-gutenberg-blocks-js',
		plugins_url( $blockPath, __FILE__ ),
		[ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-api' ],
		filemtime( plugin_dir_path(__FILE__) . $blockPath )
	);

	// Pass in REST URL
	wp_localize_script (
		'wds-gutenberg-blocks-js',
		'wds-gutenberg_globals',
		[
			'rest_url' => esc_url( rest_url() )
		]
	);

	// Enqueue optional editor only styles
	wp_enqueue_style(
		'wds-gutenberg-blocks-editor-css',
		plugins_url( $editorStylePath, __FILE__),
		[ 'wp-blocks' ],
		filemtime( plugin_dir_path( __FILE__ ) . $editorStylePath )
	);
}
// Hook scripts function into block editor hook
add_action( 'enqueue_block_editor_assets', 'wds_enqueue_editor_scripts' );
