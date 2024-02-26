import { PanelBody, TextControl, ColorPicker, Button } from "@wordpress/components";
import { InspectorControls, MediaUpload, RichText } from "@wordpress/block-editor";
import defaultAttr from "./defaultAttr.json";
import { addNewBlockItem, customizeBlockItem, onChangeAttribute } from "../blockHelpers";

const edit = ({ attributes, setAttributes }) => {
    const { cardItems } = attributes;

    const customizeItem = (index, key, value) => {
        customizeBlockItem(index, key, value, setAttributes, cardItems);
    };

    const addItem = () => {
        addNewBlockItem(setAttributes, cardItems, defaultAttr);
    };

    const onSelectImage = (index, media) => {
        setAttributes({
            [`cardItems[${index}].imageUrl`]: media.url
        })
    }

    return (
        <div>
            <InspectorControls>
                <PanelBody title="Card Settings">
                    <Button isSecondary onClick={addItem}>
                        Add Card Item
                    </Button>
                </PanelBody>
            </InspectorControls>
            <div className="cgds page-component-item-wrapper picture-item" >

                {cardItems.map((item, index) => (
                    <div className="cgds card" key={index}>
                        <InspectorControls>
                            <PanelBody>
                                <MediaUpload
                                    onSelect={(media) => onSelectImage(index, media)}
                                    value={item.imageUrl}
                                    render={(open) => (
                                        <Button onClick={open}>Upload Image</Button>
                                    )}
                                />

                                <TextControl
                                    label="Font"
                                    value={item.font}
                                    onChange={(value) => customizeItem(index, "font", value)}
                                />


                                <TextControl
                                    label="Card Title"
                                    value={item.title}
                                    onChange={(value) => customizeItem(index, "title", value)}
                                />

                                <TextControl
                                    label="Card Text"
                                    value={item.content}
                                    onChange={(value) => customizeItem(index, "content", value)}
                                />

                                <TextControl
                                    label="Card Href"
                                    value={item.href}
                                    onChange={(value) => customizeItem(index, "href", value)}
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

                        <div className="cgds card">

                            <img className="card-img-top" src={item.imageUrl} alt={`Card ${index} image`}/>

                            <div className="card-body" style={{color: item.titleColor, fontFamily: item.font}}>

                                <a className="stretched-link link-primary" href={item.href} onClick={(e) => {e.preventDefault();}}>

                                    <RichText
                                        className="h5 text-primary card-title"
                                        value={item.title}
                                        onChange={value => customizeItem(index, "title", value)}
                                        placeholder="Add card title"
                                    />

                                </a>
                                <p style={{color: item.contentColor, fontFamily: item.font}}>

                                    <RichText
                                        className="card-text"
                                        value={item.content}
                                        onChange={value => customizeItem(index, "content", value)}
                                        placeholder="Add card description"
                                    />
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default edit;
