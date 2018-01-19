/**
 * Block dependencies
 */
import classnames from 'classnames';
import BackgroundOptions from '../block-options/background-options';
import './style.scss';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;

const {
	registerBlockType,
	Editable,
	AlignmentToolbar,
	BlockControls,
} = wp.blocks;

const {} = wp.components;

const { getComputedStyle } = window;

/**
  * Register block
 */
export default registerBlockType(
	'wds/generic-content',
	{
		title: __( 'Generic Content' ),
		category: 'common',
		icon: 'format-aside',
		attributes: {
			content: {
				type: 'array',
				source: 'children',
				selector: '.generic-content',
			},
			alignment: {
				type: 'string',
			},
			textColor: {
				type: 'string',
			},
			backgroundType: {
				type: 'string',
			},
			backgroundColor: {
				type: 'string',
			},
			fontSize: {
				type: 'number',
			},
		},
		supports: {
			className: true,
		},
		edit: props => {

			const onChangeBackgroundType = value => {
				props.setAttributes( { backgroundType: value } );
			}

			const onChangeBackgroundColor = value => {
				props.setAttributes( { backgroundColor: value } );
			}

			const onChangeTextColor = value => {
				props.setAttributes( { textColor: value } );
			}

			return [
				!! props.focus && (
					<BackgroundOptions
						{ ...{ onChangeBackgroundType, onChangeBackgroundColor, onChangeTextColor, ...props} }
					/>
				),
				!! props.focus && (
					<BlockControls key="controls">
						<AlignmentToolbar
							value={ props.attributes.alignment }
							onChange={ ( value ) => props.setAttributes( { alignment: value } ) }
						/>
					</BlockControls>
				),
				<section
					className={ classnames(
						props.className,
					) }
				>
					<Editable
						tagName="div"
						multiline="p"
						value={ props.attributes.content }
						style={ {
							backgroundColor: props.attributes.backgroundColor,
							color: props.attributes.textColor,
							textAlign: props.attributes.alignment
						} }
						onChange={ ( value ) => props.setAttributes( { content: value } ) }
						focus={ props.focus }
					/>
				</section>
			];
		},
		save: props => {
			return (
				<section
					className={ classnames(
						'generic-content',
					) }
					style={ { textAlign: props.attributes.alignment } }
				>
					{ props.attributes.content }
				</section>
			);
		},
	},
);