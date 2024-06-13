import { registerBlockType } from '@wordpress/blocks';
import './style.css';
import {generateAttributes} from "../blockHelpers";
import defaultAttr from "./defaultAttr.json";
import edit from "../news-block/edit";
import save from "../news-block/save";

registerBlockType('rachana-block/announcement-block', {
    attributes:generateAttributes(defaultAttr),
    edit,
    save: (props) => save({ ...props, includeImage: false }),
});
