import { PanelBody, TextControl, ColorPicker, SelectControl } from '@wordpress/components';
import { InspectorControls, RichText } from '@wordpress/block-editor';
import defaultAttr from './defaultAttr.json';

const edit = ({ attributes, setAttributes }) => {
    const { accordionItems } = attributes;

    const customizedAccordionItems = (index, key, value) => {
        const customizedAccordionItems = [...accordionItems];
        customizedAccordionItems[index][key] = value;
        setAttributes({ accordionItems: customizedAccordionItems });
    };

    const addNewAccordionItem = () => {
        setAttributes({ accordionItems: [...accordionItems, defaultAttr] });
    };

    return (
        <div>
            <InspectorControls>
                <PanelBody title="Accordion Settings">
                    <button className="components-button is-secondary" onClick={addNewAccordionItem}>
                        Add Accordion Item
                    </button>
                </PanelBody>
            </InspectorControls>
            <div className="cgds accordion" id="accordionExample">
                {accordionItems.map((item, index) => (
                    <div className="accordion-item" key={index}>
                        <InspectorControls>
                            <PanelBody title={`Accordion Item ${index + 1}`}>
                                <TextControl
                                    label="Font"
                                    value={item.font}
                                    onChange={(value) => customizedAccordionItems(index, 'font', value)}
                                />
                                <SelectControl
                                    label="Icon Type"
                                    value={item.iconType}
                                    options={[
                                        { label: 'None', value: '' },
                                        { label: 'Info Circle', value: 'bi bi-info-circle-fill' },
                                        { label: 'Person', value: 'bi bi-person-fill' },
                                        { label: 'Heart', value: 'bi bi-heart-fill' },
                                    ]}
                                    onChange={(value) => customizedAccordionItems(index, 'iconType', value)}
                                />
                                <div className="components-base-control">
                                    <label className="components-base-control__label">Icon Color</label>
                                    <ColorPicker
                                        color={item.iconColor}
                                        onChangeComplete={(value) => customizedAccordionItems(index, 'iconColor', value.hex)}
                                        disableAlpha
                                    />
                                </div>
                                <div className="components-base-control">
                                    <label className="components-base-control__label">Title Color</label>
                                    <ColorPicker
                                        color={item.titleColor}
                                        onChangeComplete={(value) => customizedAccordionItems(index, 'titleColor', value.hex)}
                                        disableAlpha
                                    />
                                </div>
                                <div className="components-base-control">
                                    <label className="components-base-control__label">Button Color</label>
                                    <ColorPicker
                                        color={item.buttonColor}
                                        onChangeComplete={(value) => customizedAccordionItems(index, 'buttonColor', value.hex)}
                                        disableAlpha
                                    />
                                </div>
                                <div className="components-base-control">
                                    <label className="components-base-control__label">Body Text Color</label>
                                    <ColorPicker
                                        color={item.bodyTextColor}
                                        onChangeComplete={(value) => customizedAccordionItems(index, 'bodyTextColor', value.hex)}
                                        disableAlpha
                                    />
                                </div>
                            </PanelBody>
                        </InspectorControls>
                        <h2 className="accordion-header" id={`heading${index}`}>
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse${index}`}
                                aria-expanded="true"
                                aria-controls={`collapse${index}`}
                                style={{ backgroundColor: item.buttonColor, color: item.titleColor, fontFamily: item.font }}
                            >
                                {item.iconType ? (
                                    <i className={`${item.iconType}`} style={{ color: item.iconColor }}></i>
                                ) : null}
                                <RichText
                                    tagName="span"
                                    value={item.accordionTitle}
                                    onChange={(value) => customizedAccordionItems(index, 'accordionTitle', value)}
                                    placeholder="Accordion Title"
                                />
                            </button>
                        </h2>
                        <div
                            id={`collapse${index}`}
                            className="accordion-collapse collapse show"
                            aria-labelledby={`heading${index}`}
                            data-bs-parent="#accordionExample"
                        >
                            <RichText
                                tagName="div"
                                className="accordion-body"
                                value={item.bodyContent}
                                onChange={(value) => customizedAccordionItems(index, 'bodyContent', value)}
                                style={{ color: item.bodyTextColor, fontFamily: item.font }}
                                placeholder="Write your content here"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default edit;