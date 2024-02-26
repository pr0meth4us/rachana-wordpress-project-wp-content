const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { InspectorControls  } = wp.blockEditor
const { PanelBody, RadioControl, __experimentalNumberControl : NumberControl, CheckboxControl, TextControl } = wp.components
const { Fragment } = wp.element
import SingleTerm from '../components/SingleTerm.jsx'
import MarkText from '../components/MarkText.jsx'

registerBlockType( 'egov-block-2/section', {
	title: __( 'Section', 'egov' ),
	icon: 'admin-page',
	category: 'egov-block-2',
	keywords: [
		__( 'block section', 'egov' ),
		__( 'egov block', 'egov' )
	],
	attributes: {
		mark_text: {
            type: 'string',
			default: 'Section'
		},
		toggle_panel: {
			type: 'boolean',
			default: false
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
			type: 'string',
			default: ''
		},
		posts_per_page: {
			type: 'string',
			default: 1
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
		enable_title: {
			type: 'boolean',
			default: true
		},
		title: {
			type: 'string',
			default: 'Title'
		},
		enable_option_1: {
			type: 'boolean',
			default: false
		},
		option_1_title: {
			type: 'string',
			default: 'Option 1'
		},
		enable_option_2: {
			type: 'boolean',
			default: false
		},
		option_2_title: {
			type: 'string',
			default: 'Option 2'
		},
		enable_value: {
			type: 'boolean',
			default: true
		},
		value: {
			type: 'string',
			default: 'Value'
		},
		item_to_show: {
			type: 'string',
			default: 8
		}
	},
	edit: ( { attributes, setAttributes } ) => {
		const {
			mark_text, 
			toggle_panel, 
			offset, 
			order_by, 
			order, 
			posts_per_page,
			enable_title,
			title,
			enable_option_1,
			option_1_title,
			enable_option_2,
			option_2_title,
			enable_value,
			value,
			item_to_show
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
						<SingleTerm 
							attributes={attributes}
							setAttributes={setAttributes}
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
							label={ __( 'Enable Title', 'egov' ) }
							checked={ enable_title }
							onChange={ ( boolean ) => { setAttributes( { enable_title: boolean } ) } }
						/>
						<TextControl
							disabled= { ! enable_title }
							label= { __( 'Title', 'egov' ) }
							value={ title }
							onChange={ ( value ) => setAttributes( { title: value } ) }
						/>
						<CheckboxControl 
							label={ __( 'Enable Option 1', 'egov' ) }
							checked={ enable_option_1 }
							onChange={ ( boolean ) => { setAttributes( { enable_option_1: boolean } ) } }
						/>
						<TextControl
							disabled= { ! enable_option_1 }
							label= { __( 'Option 1 Title', 'egov' ) }
							value={ option_1_title }
							onChange={ ( value ) => setAttributes( { option_1_title: value } ) }
						/>
						<CheckboxControl 
							label={ __( 'Enable Option 2', 'egov' ) }
							checked={ enable_option_2 }
							onChange={ ( boolean ) => { setAttributes( { enable_option_2: boolean } ) } }
						/>
						<TextControl
							disabled= { ! enable_option_2 }
							label= { __( 'Option 1 Title', 'egov' ) }
							value={ option_2_title }
							onChange={ ( value ) => setAttributes( { option_2_title: value } ) }
						/>
						<CheckboxControl 
							label={ __( 'Enable Value', 'egov' ) }
							checked={ enable_value }
							onChange={ ( boolean ) => { setAttributes( { enable_value: boolean } ) } }
						/>
						<TextControl
							disabled= { ! enable_value }
							label= { __( 'Value', 'egov' ) }
							value={ value }
							onChange={ ( data ) => setAttributes( { value: data } ) }
						/>
						<NumberControl
							label={ __( 'Item To Show', 'egov' )  }
							isShiftStepEnabled={ true }
							shiftStep={ 10 }
							value={ item_to_show }
							onChange={ ( item ) => setAttributes( { item_to_show: item } ) }
							min={ -1 }
						/>
					</PanelBody>
				</InspectorControls>
				<div className={ 'border p-3' }>
					<small>{ mark_text }</small>
				</div>
			</Fragment>
		)
	},
	
	save: () => {
		return null
	}
} )
