import {PanelBody, TextControl, Button, RadioControl, RangeControl} from "@wordpress/components";
import { InspectorControls, RichText, useBlockProps } from "@wordpress/block-editor";
import {addNewBlockItem, customizeBlockItem, onChangeAttribute} from '../blockHelpers';
import defaultAttr from "./defaultAttr.json";

const edit = ({ attributes, setAttributes }) => {
    const { textCard, titleSize = defaultAttr.titleSize, contentSize = defaultAttr.contentSize } = attributes;
    const blockProps = useBlockProps();

    const addItem = () => {
        setAttributes({
            textCard: addNewBlockItem(textCard, defaultAttr),
        });
    };

    const customizeItem = (id, key, value) => {
        setAttributes({
            textCard: customizeBlockItem(textCard, id, key, value),
        });
    };

    const changeTitleSize = (value) => {
        onChangeAttribute("titleSize", value, setAttributes);
    }

    const changeContentSize = (value) => {
        onChangeAttribute("contentSize", value, setAttributes);
    }

    return (
        <div {...blockProps}>
            <InspectorControls>
                <PanelBody title="Text Card Settings">
                    <Button isSecondary onClick={addItem}>Add Text Card Item</Button>
                    <RangeControl
                        label="Title Size"
                        value={titleSize}
                        onChange={(value) => changeTitleSize(value)}
                        min={12}
                        max={36}
                    />
                    <RangeControl
                        label="Content Size"
                        value={contentSize}
                        onChange={(value) => changeContentSize(value)}
                        min={12}
                        max={36}
                    />
                </PanelBody>
            </InspectorControls>

            {textCard.map((item, index) => (
                <div key={item.id}>
                    <div className="card" id={"card-" + (index + 1)}>
                        <RichText
                            tagName="h1"
                            value={item.title}
                            onChange={(value) => customizeItem(item.id, "title", value)}
                            placeholder="Enter card title..."
                            className="card-title"
                            style={{ fontSize: `${titleSize}px`}}
                        />
                        <RichText
                            tagName="strong"
                            value={item.content}
                            onChange={(value) => customizeItem(item.id, "content", value)}
                            placeholder="Enter card content..."
                            className="card-text"
                            style={{ fontSize: `${contentSize}px` }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};
export default edit;