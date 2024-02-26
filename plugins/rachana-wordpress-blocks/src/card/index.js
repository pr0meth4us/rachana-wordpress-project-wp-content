import './style.scss';
import save from './save';
import defaultAttr from './defaultAttr.json';
import { registerBlockType } from '@wordpress/blocks';
import edit from "./edit";

registerBlockType('rachana-block/card-item', {
    title: 'Card',
    icon: 'editor-expand',
    category: 'common',
    attributes: {
        cardItems: {
            type: 'array',
            default: [defaultAttr],
        },
    },
    edit,
    save,
});