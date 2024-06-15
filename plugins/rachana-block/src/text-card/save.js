import { RichText, useBlockProps } from "@wordpress/block-editor";

const save = ({ attributes }) => {
    const { textCard, titleSize, contentSize } = attributes;
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps}>
            {textCard.map((item, index) => (
                <div className="cgds-example-card-grid">
                    <div key={item.id} className="cgds card" id={"card-" + (index + 1)}>
                        <div className="card-body">
                            <h1 className="card-title" style={{ fontSize: `${titleSize}px` }}>{item.title}</h1>
                            <strong className="card-text" style={{ fontSize: `${contentSize}px` }}>{item.content}</strong>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default save;

