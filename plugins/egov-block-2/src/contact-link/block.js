const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { InspectorControls  } = wp.blockEditor
const { PanelBody, TextareaControl, __experimentalInputControl : InputControl } = wp.components
const { Fragment } = wp.element
import MarkText from '../components/MarkText.jsx'

registerBlockType( 'egov-block-2/contact-link', {
	title: __( 'Contact Link', 'egov' ),
	icon: 'admin-page',
	category: 'egov-block-2',
	keywords: [
		__( 'contact link', 'egov' ),
		__( 'egov block', 'egov' )
	],
	attributes: {
		mark_text: {
            type: 'string',
			default: 'Contact Link'
		},
		toggle_panel: {
			type: 'boolean',
			default: false
		},
		description: {
			type: 'string',
			default: ''
		},
		button_link: {
			type: 'string',
			default: ''
		},
		button_text: {
			type: 'string',
			default: ''
		}
	},
	edit: ( { attributes, setAttributes } ) => {
		const {
			mark_text, 
			toggle_panel,
			button_text,
			button_link,
			description
		} = attributes
		
		return (
			<Fragment>
				<InspectorControls>
					<PanelBody>
						<MarkText
							attributes={attributes}
							setAttributes={setAttributes}
						/>
					</PanelBody>
					<PanelBody 
						title={ __( 'Block Options', 'egov' ) }
						initialOpen={ toggle_panel }
						onToggle={ () => {
							setAttributes( { toggle_panel: ! toggle_panel } ) 
						} }
					>	
						<TextareaControl
							label={ __( 'Description', 'egov' ) }
							value={ description }
							onChange={ ( value ) => setAttributes( { description: value } ) }
						/>
						<InputControl
							label={ __( 'Button Text', 'egov' ) }
							value={ button_text }
							onChange={ ( value ) => setAttributes( { button_text: value } ) }
						/>
						<InputControl
							label={ __( 'Button Link', 'egov' ) }
							value={ button_link }
							onChange={ ( value ) => setAttributes( { button_link: value } ) }
						/>
					</PanelBody>
				</InspectorControls>
				<div className={ 'border p-3' }>
					<small>{ mark_text }</small>
				</div>
			</Fragment>
		)
	},
	
	save: ( { attributes, className } ) => {
		const {
			button_text,
			button_link,
			description
		} = attributes
		return (
			<section className={`banner-province text-center p-3 p-md-5 ${className}` }>
				<h5 class="text-white mt-5 mb-4">{description}</h5>
				<a href={button_link} class="btn btn-light w-25 rounded-pill mb-3">{button_text}</a>
			</section>  
		)
	}
} )
