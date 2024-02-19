import './style.scss';
import edit from './edit';
import save from './save';

import { registerBlockType } from '@wordpress/blocks';

registerBlockType('rachana-block/accordion-item', {
    title: 'Accordion',
    icon: 'editor-expand',
    category: 'common',
    attributes: {
        accordionItems: {
            type: 'array',
            default: [
                {
                    accordionTitle: '',
                    titleColor: '#1c4076',
                    bodyContent: '',
                    buttonColor: '#000000',
                    iconColor: '#1c4076',
                    iconType: 'bi-info-circle-fill',
                    bodyTextColor: '#1c4076',
                    font: 'Kantumruy Pro',
                },
            ],
        },
    },
    edit,
    save,
});