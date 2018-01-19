/**
 * Internal block libraries
 */
const { __ } = wp.i18n;

const { Component } = wp.element;

const {
	InspectorControls,
	ColorPalette,
	MediaUpload,
} = wp.blocks;

const {
	PanelColor,
	Button,
} = wp.components;

const SelectControl = wp.blocks.InspectorControls.SelectControl;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class BackgroundOptions extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	getColorPanel() {

		let colorPanel = <PanelColor title={ __( 'Background Color' ) } colorValue={ this.props.attributes.backgroundColor } initialOpen={ false }>
							<ColorPalette
								value={ this.props.attributes.backgroundColor }
								onChange={ this.props.onChangeBackgroundColor }
							/>
						</PanelColor>;


		if ( 'color' !== this.props.attributes.backgroundType ) {
			this.props.onChangeBackgroundColor( '' );
			colorPanel = '';
		}

		return colorPanel;
	}

	getBackgroundUpload() {

		let backgroundUpload = <MediaUpload
									onSelect={ this.props.onChangeBackgroundImage }
									type="image"
									value={ this.props.attributes.backgroundImage ? this.props.attributes.backgroundImage : null }
									render={ ( { open } ) => (
										<Button onClick={ open }>
											{ __( 'Select Background Image' ) }
										</Button>
									) }
								/>

		if ( 'image' !== this.props.attributes.backgroundType ) {
			backgroundUpload = '';
		}

		return backgroundUpload;
	}

	render() {
		const backgroundType = this.props.attributes.backgroundType,
			colorPanel = this.getColorPanel(),
			backgroundUpload = this.getBackgroundUpload();

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

				{backgroundUpload}

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