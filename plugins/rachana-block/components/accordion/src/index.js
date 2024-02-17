import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'rachana-block/accordion-item', {
	title: __( 'Accordion Item', 'rachana' ),
	icon: 'editor-expand',
	category: 'common',
	attributes: {
		buttonContent: {
			type: 'string',
			default: '',
		},
		bodyContent: {
			type: 'string',
			default: '',
		},
	},
	edit: ( { attributes, setAttributes } ) => {
		const onChangeButtonContent = ( event ) => {
			setAttributes( { buttonContent: event.target.value } );
		};

		const onChangeBodyContent = ( event ) => {
			setAttributes( { bodyContent: event.target.value } );
		};

		return (
			<div class="cgds accordion" id="accordionExample">
				<div class="accordion-item">
					<h2 class="accordion-header" id="headingOne">
						<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
								aria-expanded="true" aria-controls="collapseOne">
							<i class="bi bi-info-circle-fill"></i>
							<input
								type="text"
								value={ attributes.buttonContent }
								placeholder={ __( 'Accordion Item #1', 'your-text-domain' ) }
								onChange={ onChangeButtonContent }
							/>
						</button>
					</h2>
					<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
						 data-bs-parent="#accordionExample">
						<div class="accordion-body">
                            <textarea
								value={ attributes.bodyContent }
								placeholder={ __( 'Enter your content here...', 'your-text-domain' ) }
								onChange={ onChangeBodyContent }
							/>
						</div>
					</div>
				</div>
			</div>
		);
	},
	save: ( { attributes } ) => {
		return (
			<div class="cgds accordion" id="accordionExample">
				<div class="accordion-item">
					<h2 class="accordion-header" id="headingOne">
						<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
								aria-expanded="true" aria-controls="collapseOne">
							<i class="bi bi-info-circle-fill"></i>
							{ attributes.buttonContent }
						</button>
					</h2>
					<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
						 data-bs-parent="#accordionExample">
						<div class="accordion-body">
							{ attributes.bodyContent }
						</div>
					</div>
				</div>
			</div>
		);
	},
} );
