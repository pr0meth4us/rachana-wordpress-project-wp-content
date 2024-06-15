import { PanelBody, PanelRow, SelectControl } from '@wordpress/components';
import { InspectorControls, RichText, useBlockProps } from '@wordpress/block-editor';

const edit = (props) => {
    const { attributes, setAttributes } = props;
    const { type, message, size = '' } = attributes;
    const blockProps = useBlockProps();

    const onChangeType = (newType) => {
        setAttributes({ type: newType });
    };

    const onChangeMessage = (newMessage) => {
        setAttributes({ message: newMessage });
    };

    const onChangeSize = (newSize) => {
        setAttributes({ size: newSize });
    };

    return (
        <div {...blockProps}>
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
                    <PanelRow>
                        <SelectControl
                            label="Size"
                            value={size}
                            options={[
                                { label: 'Small', value: 'btn-sm' },
                                { label: 'Medium', value: '' },
                                { label: 'Large', value: 'btn-lg' },
                            ]}
                            onChange={onChangeSize}
                        />
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
            <button className={`btn btn-${type} ${size}`}>
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
