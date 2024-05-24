import { PanelBody, ColorPicker, Button, SelectControl, DatePicker, ToggleControl } from "@wordpress/components";
import { InspectorControls, RichText, useBlockProps, MediaUpload } from "@wordpress/block-editor";
import defaultAttr from "./defaultAttr.json";
import { addNewBlockItem, customizeBlockItem, formatDate } from "../blockHelpers";

const edit = ({ attributes, setAttributes }) => {
    const { cardItems, style } = attributes;
    const blockProps = useBlockProps();

    const handleStyleChange = (value) => {
        setAttributes({ style: value });
    };

    const addItem = () => {
        setAttributes({
            cardItems: addNewBlockItem(cardItems, defaultAttr),
        });
    };

    const customizeItem = (id, key, value) => {
        setAttributes({
            cardItems: customizeBlockItem(cardItems, id, key, value),
        });
    };

    const onSelectImage = (id, media) => {
        customizeItem(id, "imageUrl", media.url);
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
                <div key={item.id}>
                    <InspectorControls>
                        <PanelBody title={`Card Item ${index + 1}`}>
                            <div className="components-base-control">
                                <label className="components-base-control__label">Body Text Color</label>
                                <ColorPicker
                                    color={item.contentColor}
                                    onChangeComplete={(value) => customizeItem(item.id, "contentColor", value.hex)}
                                    disableAlpha
                                />
                            </div>
                            <div className="components-base-control">
                                <label className="components-base-control__label">Card Title Color</label>
                                <ColorPicker
                                    color={item.titleColor}
                                    onChangeComplete={(value) => customizeItem(item.id, "titleColor", value.hex)}
                                    disableAlpha
                                />
                            </div>
                            <div className="components-base-control">
                                <label className="components-base-control__label">Show Last Updated</label>
                                <ToggleControl
                                    label="Show Last Updated"
                                    checked={item.showLastUpdated}
                                    onChange={(value) => customizeItem(item.id, "showLastUpdated", value)}
                                />
                            </div>
                            {item.showLastUpdated && (
                                <div className="components-base-control">
                                    <label className="components-base-control__label">Last Updated</label>
                                    <DatePicker
                                        currentDate={item.lastUpdated}
                                        onChange={(date) => customizeItem(item.id, "lastUpdated", formatDate(date))}
                                        isClearable
                                    />
                                </div>
                            )}
                        </PanelBody>
                    </InspectorControls>
                    <div className="card" id={"card-" + item.id}>
                        <span>Card {index + 1}</span>
                        {item.showLastUpdated && (
                            <RichText
                                tagName="p"
                                value={item.lastUpdated}
                                onChange={(value) => customizeItem(item.id, "lastUpdated", value)}
                                placeholder="Last updated: [date/time]..."
                                className="card-text"
                            />
                        )}
                        <div className="col-md-12 image-upload-placeholder">
                            <MediaUpload
                                onSelect={(media) => onSelectImage(item.id, media)}
                                allowedTypes={['image']}
                                value={item.imageUrl}
                                render={({ open }) => (
                                    <button onClick={open}>
                                        {!item.imageUrl ? 'Upload Image' : <img src={item.imageUrl} alt="Card Image" />}
                                    </button>
                                )}
                            />
                        </div>
                        <RichText
                            tagName="h2"
                            value={item.title}
                            onChange={(value) => customizeItem(item.id, "title", value)}
                            placeholder="Enter card title..."
                            className="card-title"
                        />
                        <RichText
                            tagName="p"
                            value={item.content}
                            onChange={(value) => customizeItem(item.id, "content", value)}
                            placeholder="Enter card content..."
                            className="card-content"
                            allowedFormats={["core/bold", "core/heading"]}
                        />
                        <RichText
                            tagName="p"
                            value={item.linkText}
                            onChange={(value) => customizeItem(item.id, "linkText", value)}
                            placeholder='Enter link guide e.g., "Click here for more details" ...'
                            className="card-content"
                            allowedFormats={["core/bold", "core/heading"]}
                        />
                        <RichText
                            tagName="p"
                            value={item.href}
                            onChange={(value) => customizeItem(item.id, "href", value)}
                            placeholder='Enter the link to the page ...'
                            className="card-content"
                            allowedFormats={["core/bold", "core/heading"]}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default edit;
