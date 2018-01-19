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

const SelectControl = wp.blocks.InspectorControls.SelectControl;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class BackgroundOptions extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	render() {
		const backgroundType = this.props.attributes.backgroundType;

		let colorPanel = <PanelColor title={ __( 'Background Color' ) } colorValue={ this.props.attributes.backgroundColor } initialOpen={ false }>
							<ColorPalette
								value={ this.props.attributes.backgroundColor }
								onChange={ this.props.onChangeBackgroundColor }
							/>
						</PanelColor>;

		// Don't show the colour panel if the background type is not "color".
		if ( 'color' !== backgroundType ) {
			colorPanel = '';
			this.props.onChangeBackgroundColor( '' );
		}

		return (
			<InspectorControls key="inspector">

				<SelectControl
					key="background-type"
					label={ __( 'Background' ) }
					value={ this.props.attributes.backgroundType ? this.props.attributes.backgroundType : '' }
					options={ [
						{
							label: __( 'None' ),
							value: ''
						},
						{
							label: __( 'Image' ),
							value: 'image'
						},
						{
							label: __( 'Color' ),
							value: 'color'
						},
					] }
					onChange={ this.props.onChangeBackgroundType }
				/>

				{colorPanel}

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