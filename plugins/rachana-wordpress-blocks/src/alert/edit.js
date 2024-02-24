import { PanelBody, SelectControl } from '@wordpress/components';
import { InspectorControls, RichText } from '@wordpress/block-editor';
import defaultAttr from './defaultAttr.json';

const edit = (props) => {

    const { attributes, setAttributes } = props;

    const {
        type,
        message
    } = attributes;

    const onChangeType = (newType) => {
        setAttributes({type: newType});
    };

    const onChangeMessage = (newMessage) => {
        setAttributes({message: newMessage});
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
                            { label: 'Secondary', value: 'secondary'},
                            // Other options
                        ]}
                        onChange={onChangeType}
                    />
                </PanelBody>
            </InspectorControls>
            <div className={`cgds alert alert-${type} fade d-flex align-items-center alert-dismissible-link show`} role="alert">
                <i className="primary bi bi-exclamation-circle me-2"></i>
                <RichText
                    tagName="div"
                    value={message}
                    onChange={onChangeMessage}
                    placeholder="Write alert message"
                />
                <button type="button" className="btn-close btn-sm"></button>
            </div>
        </>
    );
};

export default edit;