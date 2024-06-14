import { PanelBody, PanelRow, SelectControl } from '@wordpress/components';
import {InspectorControls, RichText, useBlockProps} from '@wordpress/block-editor';

const edit = (props) => {
    const { attributes, setAttributes } = props;
    const { type, message, font } = attributes;
    const blockProps = useBlockProps();

    const onChangeType = (newType) => {
        setAttributes({ type: newType });
    };

    const onChangeMessage = (newMessage) => {
        setAttributes({ message: newMessage });
    };

    return (
        <div {...blockProps}>
            <InspectorControls>
                <PanelBody title="Alert Settings">
                    <PanelRow>
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
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
            <div className={`cgds alert alert-${type} fade d-flex align-items-center alert-dismissible-link show`} role="alert" style={{ fontFamily: font }}>
                <RichText
                    tagName="div"
                    value={message}
                    onChange={onChangeMessage}
                    placeholder="Write alert message"
                />
            </div>
        </div>
    );
};

export default edit;
