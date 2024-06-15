import './style.css';
import save from './save';
import defaultAttr from './defaultAttr.json';
import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';
import {generateAttributes} from "../blockHelpers";
const attributes = generateAttributes(defaultAttr);
registerBlockType('rachana-block/alert', {
    attributes: attributes,
    edit,
    save,
});
