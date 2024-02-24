import './style.scss';
import save from './save';
import defaultAttr from './defaultAttr.json';
import { registerBlockType } from '@wordpress/blocks';
import edit from "./edit";

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