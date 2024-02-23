import './style.scss';
import save from './save';
import edit from './edit';
import defaultAttr from './defaultAttr.json';
import {registerBlockType} from "@wordpress/blocks";

registerBlockType('rachana-wordpress-block/alert', {
    title: 'Alert',
    icon: 'warning',
    category: 'common',
    attributes: {
        type: {
            type: 'string',
            default: defaultAttr.type
        },
        message: {
            type: 'string',
            default: defaultAttr.message
        }
    },
    edit,
    save
});