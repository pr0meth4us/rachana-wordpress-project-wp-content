import { PanelBody, PanelRow, SelectControl } from '@wordpress/components';
import {InspectorControls, RichText, useBlockProps} from '@wordpress/block-editor';

const edit = (props) => {
    const { attributes, setAttributes } = props;
    const { type, message } = attributes;
    const blockProps = useBlockProps();

    const onChangeType = (newType) => {
        setAttributes({ type: newType });
    };

    const onChangeMessage = (newMessage) => {
        setAttributes({ message: newMessage });
    };

    return (
        <div  {...blockProps}>
            <InspectorControls>
                <PanelBody title="Button Settings">
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
            <button className={`cgds btn btn-${type}`}>
                <RichText
                    tagName="div"
                    value={message}
                    onChange={onChangeMessage}
                    placeholder="Write Button Purpose"
                />
            </button>
        </div>
    );
};

export default edit;
