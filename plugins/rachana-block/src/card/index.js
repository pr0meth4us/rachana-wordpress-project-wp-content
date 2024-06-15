import './style.css';
import save from './save';
import defaultAttr from './defaultAttr.json';
import { registerBlockType } from '@wordpress/blocks';
import edit from "./edit";
import {getDefaultAttributesWithId} from "../blockHelpers";

registerBlockType('rachana-block/card', {
    attributes: {
        cardItems: {
            type: 'array',
            default: [getDefaultAttributesWithId(defaultAttr)],
        },
    },
    edit,
    save,
});
