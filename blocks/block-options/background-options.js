/**
 * Internal block libraries
 */
const { __ } = wp.i18n;

const { Component } = wp.element;

const {
	InspectorControls,
	ColorPalette,
} = wp.blocks;

const {
	PanelColor,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class BackgroundOptions extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	render() {
		return (
			<InspectorControls key="inspector">
				<PanelColor title={ __( 'Background Color' ) } colorValue={ this.props.attributes.backgroundColor } initialOpen={ false }>
					<ColorPalette
						value={ this.props.attributes.backgroundColor }
						onChange={ this.props.onChangeBackgroundColor }
					/>
				</PanelColor>
				<PanelColor title={ __( 'Text Color' ) } colorValue={ this.props.attributes.textColor } initialOpen={ false }>
					<ColorPalette
						value={ this.props.attributes.textColor }
						onChange={ this.props.onChangeTextColor }
					/>
				</PanelColor>
			</InspectorControls>
		);
	}

}