import './style.scss';
import save from './save';
import defaultAttr from './defaultAttr.json';
import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';

registerBlockType('rachana-block/alert', {
    title: 'Alert',
    icon: 'warning',
    category: 'common',
    attributes: defaultAttr,
    edit,
    save,
});
