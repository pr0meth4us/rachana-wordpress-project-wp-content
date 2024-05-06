import { PanelBody, TextControl, ColorPicker, Button, SelectControl } from "@wordpress/components";
import { InspectorControls, RichText, useBlockProps, MediaUpload } from "@wordpress/block-editor";
import defaultAttr from "./defaultAttr.json";
import { addNewBlockItem, customizeBlockItem } from "../blockHelpers";

const edit = ({ attributes, setAttributes }) => {
    const { cardItems, style } = attributes;
    const blockProps = useBlockProps();

    const handleStyleChange = (value) => {
        setAttributes({ style: value });
    };

    const addItem = () => {
        setAttributes({
            cardItems: [...cardItems, { ...defaultAttr }],
        });
    };

    const updateItem = (index, key, value) => {
        const updatedItems = cardItems.map((item, i) => {
            if (i === index) {
                return { ...item, [key]: value };
            }
            return item;
        });
        setAttributes({ cardItems: updatedItems });
    };

    const onSelectImage = (index, media) => {
        updateItem(index, "imageUrl", media.url);
    };

    return (
        <div {...blockProps}>
            <InspectorControls>
                <PanelBody title="Card Settings">
                    <Button isSecondary onClick={addItem}>
                        Add Card Item
                    </Button>
                    <SelectControl
                        label="Card Style"
                        value={style || ""}
                        options={[
                            { label: "Vertical", value: "" },
                            { label: "Horizontal", value: "card-horizontal" },
                        ]}
                        onChange={handleStyleChange}
                    />
                </PanelBody>
            </InspectorControls>

            {cardItems.map((item, index) => (
                <div key={index} className="card">
                    <InspectorControls>
                        <PanelBody title={`Card Item ${index + 1}`}>
                            <TextControl
                                label="Font"
                                value={item.font}
                                onChange={(value) => updateItem(index, "font", value)}
                            />
                            <ColorPicker
                                label="Body Text Color"
                                color={item.contentColor}
                                onChangeComplete={(value) => updateItem(index, "contentColor", value.hex)}
                                disableAlpha
                            />
                            <ColorPicker
                                label="Card Title Color"
                                color={item.titleColor}
                                onChangeComplete={(value) => updateItem(index, "titleColor", value.hex)}
                                disableAlpha
                            />
                        </PanelBody>
                    </InspectorControls>

                    <RichText
                        tagName="p"
                        value={item.lastUpdated}
                        onChange={(value) => updateItem(index, "lastUpdated", value)}
                        placeholder="Last updated: [date/time]..."
                        className="card-text"
                    />
                    <MediaUpload
                        onSelect={(media) => onSelectImage(index, media)}
                        allowedTypes={["image"]}
                        value={item.imageUrl}
                        render={({ open }) => (
                            <div className="image-upload-placeholder">
                                <Button onClick={open}>
                                    {item.imageUrl ? (
                                        <img src={item.imageUrl} alt="Card Image" />
                                    ) : (
                                        "Upload Image"
                                    )}
                                </Button>
                            </div>
                        )}
                    />
                    <RichText
                        tagName="h2"
                        value={item.title}
                        onChange={(value) => updateItem(index, "title", value)}
                        placeholder="Enter card title..."
                        className="card-title"
                    />
                    <RichText
                        tagName="p"
                        value={item.content}
                        onChange={(value) => updateItem(index, "content", value)}
                        placeholder="Enter card content..."
                        className="card-content"
                        allowedFormats={["core/bold", "core/heading"]}
                    />
                    <RichText
                        tagName="p"
                        value={item.linkText}
                        onChange={(value) => updateItem(index, "linkText", value)}
                        placeholder="Enter link text..."
                        className="card-link-text"
                    />
                    <TextControl
                        label="Link URL"
                        value={item.href}
                        onChange={(value) => updateItem(index, "href", value)}
                        placeholder="Enter link URL..."
                    />
                </div>
            ))}
        </div>
    );
};

export default edit;