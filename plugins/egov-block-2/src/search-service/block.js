const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { InspectorControls  } = wp.blockEditor
const { PanelBody, __experimentalNumberControl : NumberControl, __experimentalInputControl : InputControl } = wp.components
const { Fragment } = wp.element
import MarkText from '../components/MarkText.jsx'

registerBlockType( 'egov-block-2/search-service', {
	title: __( 'Search Service', 'egov' ),
	icon: 'admin-page',
	category: 'egov-block-2',
	keywords: [
		__( 'search service', 'egov' ),
		__( 'egov block', 'egov' )
	],
	attributes: {
		mark_text: {
            type: 'string',
			default: 'Search Service'
		},
		toggle_panel: {
			type: 'boolean',
			default: false
		},
		api: {
			type: 'string',
			default: ''
		},
		page: {
			type: 'string',
			default: ''
		},
		base: {
			type: 'string',
			default: ''
		},
		lang: {
			type: 'string',
			default: ''
		},
		post_type: {
			type: 'string',
			default: ''
		},
		level: {
			type: 'string',
			default: ''
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
			api,
			page,
			base,
			lang,
			post_type,
			level,
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
							label={ __( 'API', 'egov' ) }
							value={ api }
							onChange={ ( value ) => setAttributes( { api: value } ) }
						/>
						<InputControl
							label={ __( 'Post Type', 'egov' ) }
							value={ post_type }
							onChange={ ( value ) => setAttributes( { post_type: value } ) }
						/>
						<InputControl
							label={ __( 'Service Level (id)', 'egov' ) }
							value={ level }
							onChange={ ( value ) => setAttributes( { level: value } ) }
						/>
						<InputControl
							label={ __( 'Lang (km/en)', 'egov' ) }
							value={ lang }
							onChange={ ( value ) => setAttributes( { lang: value } ) }
						/>
						<InputControl
							label={ __( 'Base (example.com)', 'egov' ) }
							value={ base }
							onChange={ ( value ) => setAttributes( { base: value } ) }
						/>
						<InputControl
							label={ __( 'Page (slug)', 'egov' ) }
							value={ page }
							onChange={ ( value ) => setAttributes( { page: value } ) }
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
			api,
			page,
			base,
			lang,
			post_type,
			level,
			placeholder,
			button_text
		} = attributes
		return (
			<section className={`form-search without-slideshow ${className}`}>
				<div class="input-field input-group">
					<div class="text-field form-control p-0">
						<input autocomplete="off" data-apiurl={`${api}/type=${post_type}/level=${level}/lang=${lang}/base=${base}/page=${page}`} type="search" class="text-field form-control search-typeahead typeahead" placeholder={placeholder} />
					</div>
					<div class="input-group-append">
						<button type="button" class="submit-field btn btn-primary"><span class="d-none d-md-inline">{button_text}</span> <i class="icofont-search"></i></button>
					</div>
				</div>
            </section>
		)
	}
} )
