import './style.scss';
import save from './save';
import defaultAttr from './defaultAttr.json';
import { registerBlockType } from '@wordpress/blocks';
import edit from "./edit";

registerBlockType('rachana-block/text-card', {
    attributes: {
        textCard: {
            type: 'array',
            default: [defaultAttr],
        },
    },
    edit,
    save,
});
