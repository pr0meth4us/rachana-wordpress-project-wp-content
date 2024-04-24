import { PanelBody, TextControl, ColorPicker, Button } from "@wordpress/components";
import {InnerBlocks, InspectorControls, RichText, useBlockProps} from "@wordpress/block-editor";
import defaultAttr from "./defaultAttr.json";
import { addNewBlockItem, customizeBlockItem } from "../blockHelpers";

const edit = ({ attributes, setAttributes }) => {
    const { cardItems } = attributes;
    const blockProps = useBlockProps();

    const addItem = () => {
        setAttributes({
            cardItems: addNewBlockItem(cardItems, defaultAttr),
        });
    };

    const customizeItem = (index, key, value) => {
        setAttributes({
            cardItems: customizeBlockItem(cardItems, index, key, value),
        });
    };

    return (
        <div {...blockProps}>
            <InspectorControls>
                <PanelBody title="Card Settings">
                    <Button isSecondary onClick={addItem}>
                        Add Card Item
                    </Button>
                </PanelBody>
            </InspectorControls>

            {cardItems.map((item, index) => (
                <div key={index}>
                    <InspectorControls>
                        <PanelBody title={`Card Item ${index + 1}`}>
                            <TextControl
                                label="Font"
                                value={item.font}
                                onChange={(value) => customizeItem(index, "font", value)}
                            />

                            <div className="components-base-control">
                                <label className="components-base-control__label">Body Text Color</label>
                                <ColorPicker
                                    color={item.contentColor}
                                    onChangeComplete={(value) => customizeItem(index, "contentColor", value.hex)}
                                    disableAlpha
                                />
                            </div>
                            <div className="components-base-control">
                                <label className="components-base-control__label">Card Title Color</label>
                                <ColorPicker
                                    color={item.titleColor}
                                    onChangeComplete={(value) => customizeItem(index, "titleColor", value.hex)}
                                    disableAlpha
                                />
                            </div>
                        </PanelBody>
                    </InspectorControls>
                    <div className="card" id={"card-" + (index + 1)}>
                        <span>Card {index + 1}</span>
                        <RichText
                            tagName="h2"
                            value={item.title}
                            onChange={(value) => customizeItem(index, "title", value)}
                            placeholder="Enter card title..."
                            className="card-title"
                        />
                        <div className="col-md-12 image-upload-placeholder">
                            <InnerBlocks allowedBlocks={['core/image']}/>
                            <div className="image-upload-instructions">Click to add image</div>
                        </div>
                        <RichText
                            tagName="p"
                            value={item.content}
                            onChange={(value) => customizeItem(index, "content", value)}
                            placeholder="Enter card content..."
                            className="card-content"
                        />
                        <RichText
                            tagName="p"
                            value={item.linkText}
                            onChange={(value) => customizeItem(index, "linkText", value)}
                            placeholder='Enter link guide e.g., "Click here for more details" ...'
                            className="card-content"
                        />
                        <RichText
                            tagName="p"
                            value={item.linkText}
                            onChange={(value) => customizeItem(index, "linkText", value)}
                            placeholder='Enter link guide e.g., "Click here for more details" ...'
                            className="card-content"
                        />
                        <RichText
                            tagName="p"
                            value={item.href}
                            onChange={(value) => customizeItem(index, "href", value)}
                            placeholder='Enter the link to the page ...'
                            className="card-content"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default edit;
