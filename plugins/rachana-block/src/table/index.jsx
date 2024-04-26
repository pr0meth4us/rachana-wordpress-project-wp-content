import './style.scss';
import save from './save';
import defaultAttr from './defaultAttr.json';
import { registerBlockType } from '@wordpress/blocks';
import edit from "./edit";

registerBlockType('rachana-block/table', {
    attributes: {
        tableItems: {
            type: 'array',
            default: defaultAttr.tableItems,
        },
    },
    edit,
    save,
});
