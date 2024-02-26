import './style.scss';
import save from './save';
import defaultAttr from './defaultAttr.json';
import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';
import {generateAttributes} from "../blockHelpers";
const attributes = generateAttributes(defaultAttr);
registerBlockType('rachana-block/alert', {
    title: 'Alert',
    icon: 'warning',
    category: 'common',
    attributes: attributes,
    edit,
    save,
});
