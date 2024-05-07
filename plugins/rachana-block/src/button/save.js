import {useBlockProps} from "@wordpress/block-editor";

const save = (props) => {
    const { type, message } = props.attributes;
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps}>
            <button className={`btn btn-${type} cgds`}>
                {message}
            </button>
        </div>
    );
};

export default save;
