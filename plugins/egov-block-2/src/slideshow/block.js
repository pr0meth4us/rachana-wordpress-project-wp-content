import './style.scss'
import './editor.scss'
import MarkText from '../components/MarkText.jsx'
import NestedButton from '../components/NestedButton.jsx'
import MultiTerm from '../components/MultiTerm.jsx'
import Aspectratio from '../components/Aspectratio.jsx'
import MetaOption from '../components/MetaOption.jsx'
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, CheckboxControl, SelectControl, RangeControl, RadioControl, __experimentalNumberControl : NumberControl } = wp.components
const { Fragment } = wp.element
const ALLOWED_BLOCKS = []

registerBlockType( 'egov-block-2/slideshow', {
	title: __( 'Slide Show', 'egov' ),
	icon: 'admin-page',
	category: 'egov-block-2', 
	keywords: [
		__( 'slide show', 'egov' ),
		__( 'egov block', 'egov' )
	],
	attributes: {
		client_id: {
			type: 'string',
			default: null
		},
		mark_text: {
            type: 'string',
			default: 'Slide Show'
		},
		toggle_panel: {
			type: 'boolean',
			default: false
		},
		adaptive_height: {
			type: 'boolean',
			default: false
		},
		mobile_first: {
			type: 'boolean',
			default: true
		},
		pause_on_dots_hover: {
			type: 'boolean',
			default: true
		},
		dots: {
			type: 'boolean',
			default: true
		},
		autoplay: {
			type: 'boolean',
			default: true
		},
		autoplay_speed: {
			type: 'string',
			default: 5000
		},
		arrows: {
			type: 'boolean',
			default: true
		},
		css_ease: {
			type: 'string',
			default: 'ease-in-out'
		},
		post_type: {
			type: 'array',
			default: []
		},
		post_type_selected: {
			type: 'string',
			default: ''
		},
		taxonomy: {
			type: 'array',
			default: []
		},
		taxonomy_selected: {
			type: 'string',
			default: ''
		},
		term: {
			type: 'array',
			default: []
		},
		term_selected: {
			type: 'array',
			default: []
		},
		posts_per_page: {
			type: 'string',
			default: 6
		},
		offset: {
			type: 'string',
			default: 0
		},
		order_by: {
			type: 'string',
			default: 'date'
		},
		order: {
			type: 'string',
			default: 'DESC'
		},
		enable_thumbnail: {
			type: 'boolean',
			default: true
		},
		thumbnail_size: {
			type: 'string',
			default: 'medium'
		},
		enable_title: {
			type: 'boolean',
			default: true
		},
		title_length: {
			type: 'string',
			default: 200
		},
		enable_excerpt: {
			type: 'boolean',
			default: false
		},
		excerpt_length: {
			type: 'string',
			default: 250
		},
		enable_meta: {
			type: 'boolean',
			default: true
		},
		enable_post_date: {
			type: 'boolean',
			default: true
		},
		enable_post_author: {
			type: 'boolean',
			default: false
		},
		enable_post_read_more: {
			type: 'boolean',
			default: false
		},
		enable_post_view_count: {
			type: 'boolean',
			default: false
		},
		enable_post_tag: {
			type: 'boolean',
			default: true
		},
		aspectratio_xs: {
			type: 'string',
			default: 'aspectratio-16-9'
		},
		aspectratio_sm: {
			type: 'string',
			default: ''
		},
		aspectratio_md: {
			type: 'string',
			default: ''
		},
		aspectratio_lg: {
			type: 'string',
			default: ''
		},
		aspectratio_xl: {
			type: 'string',
			default: ''
		}
	},
	edit: ( { attributes, setAttributes, clientId  } ) => {
		const {
			client_id,
			mark_text, 
			toggle_panel, 
			adaptive_height, 
			mobile_first, 
			pause_on_dots_hover, 
			dots, 
			autoplay, 
			autoplay_speed, 
			arrows, 
			css_ease,
			offset, 
			order_by, 
			order, 
			posts_per_page,
			enable_thumbnail,
			thumbnail_size
		} = attributes
		if ( ! client_id ) {
			setAttributes( { client_id: clientId } )
		}

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
						<CheckboxControl
							label= { __( 'Adaptive Height', 'egov' ) }
							checked={ adaptive_height }
							onChange={ ( boolean ) => {
								setAttributes( { adaptive_height: boolean } )
							} }
						/>
						<CheckboxControl
							label= { __( 'Mobile First', 'egov' ) }
							checked={ mobile_first }
							onChange={ ( boolean ) => {
								setAttributes( { mobile_first: boolean })
							} }
						/>
						<CheckboxControl
							label= { __( 'Pause On Dots Hover', 'egov' ) }
							checked={ pause_on_dots_hover }
							onChange={ ( boolean ) => {
								setAttributes( { pause_on_dots_hover: boolean })
							} }
						/>
						<CheckboxControl
							label= { __( 'Dots', 'egov' ) }
							checked={ dots }
							onChange={ ( boolean ) => {
								setAttributes( { dots: boolean })
							} }
						/>
						<CheckboxControl
							label= { __( 'Auto Play', 'egov' ) }
							checked={ autoplay }
							onChange={ ( boolean ) => {
								setAttributes( { autoplay: boolean })
							} }
						/>
						<CheckboxControl
							label= { __( 'Arrows', 'egov' ) }
							checked={ arrows }
							onChange={ ( boolean ) => {
								setAttributes( { arrows: boolean })
							} }
						/>
						<NumberControl
							label={ __( 'Auto Play Speed (ms)', 'egov' ) }
							value={ autoplay_speed }
							onChange={ ( value ) => setAttributes( { autoplay_speed: value } ) }
							isShiftStepEnabled={ true }
							shiftStep={ 100 }
						/>
						<br/>
						<SelectControl
							label={ __( 'CSS3 Animation Easing', 'egov' ) }
							value={ css_ease }
							options={ [
								{ label: __( 'easing', 'egov' ), value: 'easing' },
								{ label: __( 'ease-in', 'egov' ), value: 'ease-in' },
								{ label: __( 'ease-out', 'egov' ), value: 'ease-out' },
								{ label: __( 'ease-in-out', 'egov' ), value: 'ease-in-out' },
								{ label: __( 'step-start', 'egov' ), value: 'step-start' },
								{ label: __( 'step-end', 'egov' ), value: 'step-end' }
							] }
							onChange={ ( value ) => { setAttributes( { css_ease: value } ) } }
						/>
						<MultiTerm 
							attributes={ attributes }
							setAttributes={ setAttributes }
						/>
						<br/>
						<NumberControl
							label={ __( 'Number of Post', 'egov' )  }
							isShiftStepEnabled={ true }
							shiftStep={ 10 }
							value={ posts_per_page }
							onChange={ ( posts ) => setAttributes( { posts_per_page: posts } ) }
							min={ -1 }
						/>
						<br/>
						<NumberControl
							label={ __( 'Post Offset', 'egov' )  }
							isShiftStepEnabled={ true }
							shiftStep={ 10 }
							value={ offset }
							onChange={ ( posts ) => setAttributes( { offset: posts } ) }
							min={ 0 }
						/>
						<br/>
						<RadioControl
							label={ __( 'Order By', 'egov' ) }
							selected={ order_by }
							options={ [ 
								{ label: 'Date', value: 'date' }, 
								{ label: 'Title', value: 'title' }, 
								{ label: 'Random ', value: 'rand' },
								{ label: 'View Count', value: 'meta_value_num' }
							] }
							onChange={ ( boolean ) => setAttributes( { order_by: boolean } ) }
						/>
						<RadioControl
							label={ __( 'Order', 'egov' ) }
							selected={ order }
							options={ [ { label: 'DESC', value: 'DESC' }, { label: 'ASC', value: 'ASC' } ] }
							onChange={ ( boolean ) => setAttributes( { order: boolean } ) }
						/>
						<CheckboxControl
							label={ __( 'Enable Thumbnail', 'egov' ) }
							checked={ enable_thumbnail }
							onChange={ ( boolean ) => { setAttributes( { enable_thumbnail: boolean } ) } }
						/>
						<SelectControl
							label={ __( 'Thumbnail Size', 'egov' ) }
							value={ thumbnail_size }
							disabled={ ! enable_thumbnail }
							options={ [
								{
									label: __( 'Thumbnail', 'egov' ),
									value: 'thumbnail'
								},
								{
									label: __( 'Medium', 'egov' ),
									value: 'medium'
								},
								{
									label: __( 'Large', 'egov' ),
									value: 'large'
								},
								{
									label: __( 'Full', 'egov' ),
									value: 'full'
								}
							] }
							onChange={ ( size ) => { setAttributes( { thumbnail_size: size } ) } }
						/>
						<Aspectratio
							attributes = { attributes }
							setAttributes = { setAttributes }
						/>
						<br/>
						<MetaOption 
							attributes={ attributes }
							setAttributes={ setAttributes }
						/>
					</PanelBody>
				</InspectorControls>
				
				<div className={ 'border p-3' }>
					<small>{ mark_text }</small>
					<NestedButton
						allowedBlocks={ ALLOWED_BLOCKS }
					/>
				</div>
				
			</Fragment>
		)
	},
	save: () => {
		return null		
	}
} )