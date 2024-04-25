import './style.scss';
import save from './save';
import defaultAttr from './defaultAttr.json';
import { registerBlockType } from '@wordpress/blocks';
import edit from "./edit";
import { generateAttributes } from '../blockHelpers';

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
