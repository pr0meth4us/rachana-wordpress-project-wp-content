const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { InspectorControls  } = wp.blockEditor
const { PanelBody, __experimentalNumberControl : NumberControl, __experimentalInputControl : InputControl } = wp.components
const { Fragment } = wp.element
import MarkText from '../components/MarkText.jsx'

registerBlockType( 'egov-block-2/search', {
	title: __( 'Search', 'egov' ),
	icon: 'admin-page',
	category: 'egov-block-2',
	keywords: [
		__( 'search', 'egov' ),
		__( 'egov block', 'egov' )
	],
	attributes: {
		mark_text: {
            type: 'string',
			default: 'Search'
		},
		toggle_panel: {
			type: 'boolean',
			default: false
		},
		action: {
			type: 'string',
			default: '/'
		},
		placeholder: {
			type: 'string',
			default: 'Search'
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
			action,
			placeholder,
			button_text
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
						<InputControl
							label={ __( 'Action', 'egov' ) }
							value={ action }
							onChange={ ( value ) => setAttributes( { action: value } ) }
						/>
						<InputControl
							label={ __( 'Placeholder', 'egov' ) }
							value={ placeholder }
							onChange={ ( value ) => setAttributes( { placeholder: value } ) }
						/>
						<InputControl
							label={ __( 'Button Search', 'egov' ) }
							value={ button_text }
							onChange={ ( value ) => setAttributes( { button_text: value } ) }
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
			action,
			placeholder
		} = attributes
		return (
			<section className={`form-search without-slideshow ${className}`}>
                <form action={action} method="GET" class="col-md-8 mx-auto">
                    <div class="input-field input-group">
                        <input name="s" type="search" class="text-field form-control" placeholder={placeholder} />
                        <div class="input-group-append">
                            <button type="submit" class="submit-field btn btn-primary"><span class="d-none d-md-inline">{button_text}</span> <i class="icofont-search"></i></button>
                        </div>
                    </div>
                </form>
            </section>
		)
	}
} )
