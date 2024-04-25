import { PanelBody, TextControl, Button, RadioControl } from "@wordpress/components";
import { InspectorControls, RichText, useBlockProps } from "@wordpress/block-editor";
import defaultAttr from "./defaultAttr.json";
import { addNewBlockItem, customizeBlockItem } from '../blockHelpers';

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
                    <Button isSecondary onClick={addItem}>Add Card Item</Button>
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
                            <RadioControl
                                label="Title Tag"
                                selected={item.titleTag}
                                options={[
                                    { label: 'H1', value: 'h1' },
                                    { label: 'H5', value: 'h5' }
                                ]}
                                onChange={(value) => customizeItem(index, "titleTag", value)}
                            />
                            <RadioControl
                                label="Content Tag"
                                selected={item.contentTag}
                                options={[
                                    { label: 'Strong', value: 'strong' },
                                    { label: 'Anchor', value: 'a' }
                                ]}
                                onChange={(value) => customizeItem(index, "contentTag", value)}
                            />
                        </PanelBody>
                    </InspectorControls>
                    <div className="card" id={"card-" + (index + 1)}>
                        <RichText
                            tagName={item.titleTag}
                            value={item.title}
                            onChange={(value) => customizeItem(index, "title", value)}
                            placeholder="Enter card title..."
                            className="card-title"
                        />
                        <RichText
                            tagName={item.contentTag}
                            value={item.content}
                            onChange={(value) => customizeItem(index, "content", value)}
                            placeholder="Enter card content..."
                            className="card-text"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default edit;
