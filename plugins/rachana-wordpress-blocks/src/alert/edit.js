import { PanelBody, TextControl, ColorPicker, SelectControl } from '@wordpress/components';
import { InspectorControls, RichText } from '@wordpress/block-editor';

const edit = ({ attributes, setAttributes }) => {
    const { accordionItems } = attributes;

    const updateAccordionItem = (index, key, value) => {
        const updatedAccordionItems = [...accordionItems];
        updatedAccordionItems[index][key] = value;
        setAttributes({ accordionItems: updatedAccordionItems });
    };

    const addAccordionItem = () => {
        const newItem = {
            accordionTitle: '',
            titleColor: '#1c4076',
            bodyContent: '',
            buttonColor: '#f3f5f8',
            iconColor: '#1c4076',
            iconType: 'bi-info-circle-fill',
            bodyTextColor: '#414c5f',
            font: 'Kantumruy Pro',
        };
        setAttributes({ accordionItems: [...accordionItems, newItem] });
    };

    return (
        <div>
            <InspectorControls>
                <PanelBody title="Accordion Settings">
                    <button className="components-button is-secondary" onClick={addAccordionItem}>
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
                                    onChange={(value) => updateAccordionItem(index, 'font', value)}
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
                                    onChange={(value) => updateAccordionItem(index, 'iconType', value)}
                                />
                                <div className="components-base-control">
                                    <label className="components-base-control__label">Icon Color</label>
                                    <ColorPicker
                                        color={item.iconColor}
                                        onChangeComplete={(value) => updateAccordionItem(index, 'iconColor', value.hex)}
                                        disableAlpha
                                    />
                                </div>
                                <div className="components-base-control">
                                    <label className="components-base-control__label">Title Color</label>
                                    <ColorPicker
                                        color={item.titleColor}
                                        onChangeComplete={(value) => updateAccordionItem(index, 'titleColor', value.hex)}
                                        disableAlpha
                                    />
                                </div>
                                <div className="components-base-control">
                                    <label className="components-base-control__label">Button Color</label>
                                    <ColorPicker
                                        color={item.buttonColor}
                                        onChangeComplete={(value) => updateAccordionItem(index, 'buttonColor', value.hex)}
                                        disableAlpha
                                    />
                                </div>
                                <div className="components-base-control">
                                    <label className="components-base-control__label">Body Text Color</label>
                                    <ColorPicker
                                        color={item.bodyTextColor}
                                        onChangeComplete={(value) => updateAccordionItem(index, 'bodyTextColor', value.hex)}
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
                                    onChange={(value) => updateAccordionItem(index, 'accordionTitle', value)}
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
                                onChange={(value) => updateAccordionItem(index, 'bodyContent', value)}
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