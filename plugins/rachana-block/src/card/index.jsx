import './style.scss';
import save from './save';
import defaultAttr from './defaultAttr.json';
import { registerBlockType } from '@wordpress/blocks';
import edit from "./edit";
import { generateAttributes, generateStyleOptions } from '../blockHelpers';

const styleOptions = generateStyleOptions(defaultAttr.styles);

registerBlockType('rachana-block/card', {
    attributes: {
        ...generateAttributes(defaultAttr),
        styles: {
            type: 'string',
            default: Object.keys(defaultAttr.styles)[0],
        },
    },
    edit: (props) => {
        return edit({
            ...props,
            styleOptions,
        });
    },
    save,
});
