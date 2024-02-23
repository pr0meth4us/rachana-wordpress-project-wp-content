import './style.scss';
import edit from './edit';
import save from './save';
import defaultAttr from './defaultAttr.json';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType('rachana-block/accordion-item', {
    title: 'Accordion',
    icon: 'editor-expand',
    category: 'common',
    attributes: {
        accordionItems: {
            type: 'array',
            default: [defaultAttr],
        },
    },
    edit,
    save,
});