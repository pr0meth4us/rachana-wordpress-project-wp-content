import { PanelBody, SelectControl, TextControl } from '@wordpress/components';
import { InspectorControls, RichText } from '@wordpress/block-editor';

const edit = (props) => {
    const { attributes, setAttributes } = props;
    const { type, message, font } = attributes;

    const onChangeType = (newType) => {
        setAttributes({ type: newType });
    };

    const onChangeMessage = (newMessage) => {
        setAttributes({ message: newMessage });
    };

    const onChangeFont = (newFont) => {
        setAttributes({ font: newFont });
    };

    return (
        <>
            <InspectorControls>
                <PanelBody>
                    <SelectControl
                        label="Type"
                        value={type}
                        options={[
                            { label: 'Primary', value: 'primary' },
                            { label: 'Secondary', value: 'secondary' },
                            { label: 'Success', value: 'success' },
                            { label: 'Danger', value: 'danger' },
                            { label: 'Warning', value: 'warning' },
                            { label: 'Info', value: 'info' },
                            { label: 'Light', value: 'light' },
                            { label: 'Dark', value: 'dark' },
                        ]}
                        onChange={onChangeType}
                    />
                    <TextControl
                        label="Font"
                        value={font}
                        onChange={onChangeFont}
                    />
                </PanelBody>
            </InspectorControls>
            <div className={`cgds alert alert-${type} fade d-flex align-items-center alert-dismissible-link show`} role="alert" style={{ fontFamily: font }}>
                <i className="primary bi bi-exclamation-circle me-2"></i>
                <RichText
                    tagName="div"
                    value={message}
                    onChange={onChangeMessage}
                    placeholder="Write alert message"
                />
                <button type="button" className="btn-close btn-sm" aria-label="Close Alert"></button>
            </div>
        </>
    );
};

export default edit;