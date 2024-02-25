import { PanelBody, TextControl, ColorPicker, MediaUpload } from '@wordpress/components';
import { InspectorControls, RichText } from '@wordpress/block-editor';
import defaultAttr from './defaultAttr.json';
import { addNewBlockItem, customizeBlockItem } from "../blockHelpers";

const edit = ({ attributes, setAttributes }) => {
    const { cardItems } = attributes;

    const customizedCardItems = (index, key, value) => {
        customizeBlockItem(index, key, value, setAttributes, cardItems, defaultAttr);
    };

    const addNewCardItem = () => {
        addNewBlockItem(setAttributes, cardItems, defaultAttr);
    };

    return (
        <div>
            <InspectorControls>
                <PanelBody title="Card Settings">
                    <button className="components-button is-secondary" onClick={addNewCardItem}>
                        Add Card Item
                    </button>
                </PanelBody>
            </InspectorControls>
            <div className="cgds page-component-item-wrapper picture-item">
                {cardItems.map((item, index) => (
                    <div className="cgds card" key={index + 1}>
                        <InspectorControls>
                            <PanelBody title={`Card Item ${index + 1}`}>
                                <MediaUpload
                                    onSelect={(media) => customizedCardItems(index, 'imageUrl', media.url)}
                                    type="image"
                                    render={({open}) => (
                                        <img
                                            className="card-img-top"
                                            src={item.imageUrl}
                                            alt={`image${index}`}
                                            onClick={open}
                                        />
                                    )}
                                />
                                <TextControl
                                    label="Font"
                                    value={item.font}
                                    onChange={(value) => customizedCardItems(index, 'font', value)}
                                />
                                <TextControl
                                    label="Card Title"
                                    value={item.cardTitle}
                                    onChange={(value) => customizedCardItems(index, 'cardTitle', value)}
                                />
                                <TextControl
                                    label="Card Text"
                                    value={item.cardText}
                                    onChange={(value) => customizedCardItems(index, 'cardText', value)}
                                />
                                <div className="components-base-control">
                                    <label className="components-base-control__label">Body Text Color</label>
                                    <ColorPicker
                                        color={item.bodyTextColor}
                                        onChangeComplete={(value) => customizedCardItems(index, 'bodyTextColor', value.hex)}
                                        disableAlpha
                                    />
                                </div>
                                <div className="components-base-control">
                                    <label className="components-base-control__label">Card Title Color</label>
                                    <ColorPicker
                                        color={item.cardTitleTextColor}
                                        onChangeComplete={(value) => customizedCardItems(index, 'cardTitleTextColor', value.hex)}
                                        disableAlpha
                                    />
                                </div>
                            </PanelBody>
                        </InspectorControls>
                        <div className="card-body">
                            <a className="stretched-link link-primary">
                                <div
                                    className="h5 text-primary card-title"
                                    style={{color: item.cardTitleTextColor, fontFamily: item.font}}
                                >
                                    <RichText
                                        tagName="span"
                                        value={item.cardTitle}
                                        onChange={(value) => customizedCardItems(index, 'cardTitle', value)}
                                        placeholder="Card Title"
                                    />
                                </div>
                            </a>
                            <RichText
                                tagName="p"
                                value={item.cardText}
                                onChange={(value) => customizedCardItems(index, 'cardText', value)}
                                placeholder="Card Text"
                                className="card-text"
                                style={{ color: item.bodyTextColor, fontFamily: item.font }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default edit;
