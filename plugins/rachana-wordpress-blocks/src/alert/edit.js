import React from 'react';
import { PanelBody, PanelRow, SelectControl, TextControl } from '@wordpress/components';
import { InspectorControls, RichText } from '@wordpress/block-editor';
import { onChangeAttribute } from "../blockHelpers";

const Edit = ({ attributes, setAttributes }) => {
    const { type, message, font } = attributes;

    return (
        <>
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
                            onChange={(value) => onChangeAttribute('type', value, setAttributes)}
                        />
                    </PanelRow>
                    <PanelRow>
                        <TextControl
                            label="Font"
                            value={font}
                            onChange={(value) => onChangeAttribute('font', value, setAttributes)}
                        />
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
            <div className={`cgds alert alert-${type} fade d-flex align-items-center alert-dismissible-link show`} role="alert" style={{ fontFamily: font }}>
                <i className={`bi bi-exclamation-circle me-2`}></i>
                <RichText
                    tagName="div"
                    value={message}
                    onChange={(value) => onChangeAttribute('message', value, setAttributes)}
                    placeholder="Write alert message"
                />
                <button type="button" className="btn-close btn-sm" aria-label="Close Alert"></button>
            </div>
        </>
    );
};

export default Edit;
