import './style.scss';
import save from './save';
import defaultAttr from './defaultAttr.json';
import { registerBlockType } from '@wordpress/blocks';
import edit from "./edit";

registerBlockType('rachana-block/card', {
    attributes: {
        cardItems: {
            type: 'array',
            default: [defaultAttr],
        },
    },
    supports: {
        innerBlocks: true,
    },
    edit,
    save,
});