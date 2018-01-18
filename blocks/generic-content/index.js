/**
 * Block dependencies
 */
import classnames from 'classnames';
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
	InspectorControls,
	BlockDescription,
	ColorPalette,
} = wp.blocks;

const {
	Toolbar,
	Button,
	Tooltip,
	PanelBody,
	PanelColor,
	PanelRow,
} = wp.components;

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

			return [
				!! props.focus && (
					<InspectorControls key="inspector">
						<PanelColor title={ __( 'Background Color' ) } colorValue={ props.attributes.backgroundColor } initialOpen={ false }>
							<ColorPalette
								value={ props.attributes.backgroundColor }
								onChange={ ( colorValue ) => props.setAttributes( { backgroundColor: colorValue } ) }
							/>
						</PanelColor>
						<PanelColor title={ __( 'Text Color' ) } colorValue={ props.attributes.textColor } initialOpen={ false }>
							<ColorPalette
								value={ props.attributes.textColor }
								onChange={ ( colorValue ) => props.setAttributes( { textColor: colorValue } ) }
							/>
						</PanelColor>
					</InspectorControls>
				),
				!! props.focus && (
					<BlockControls key="controls">
						<AlignmentToolbar
							value={ props.attributes.alignment }
							onChange={ ( value ) => props.setAttributes( { alignment: value } ) }
						/>
					</BlockControls>
				),
				<div
					className={ classnames(
						props.className,
					) }
				>
					<Editable
						tagName="div"
						multiline="p"
						placeholder={ __( 'Enter your message here..' ) }
						value={ props.attributes.content }
						style={ {
							backgroundColor: props.attributes.backgroundColor,
							color: props.attributes.textColor,
							textAlign: props.attributes.alignment
						} }
						onChange={ ( value ) => props.setAttributes( { content: value } ) }
						focus={ props.focus }
					/>
				</div>
			];
		},
		save: props => {
			return (
				<div
					className={ classnames(
						'generic-content',
					) }
					style={ { textAlign: props.attributes.alignment } }
				>
					{ props.attributes.content }
				</div>
			);
		},
	},
);