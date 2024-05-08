import {useBlockProps} from "@wordpress/block-editor";

const save = ({ attributes }) => {
    const { textCard } = attributes;
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps}>
            {textCard.map((item, index) => (
                <div className="cgds-example-card-grid">
                    <div className="cgds card">
                        <div className="card-body" key={index}>
                            {item.titleTag === 'h1' ? (
                                <h1 className="card-title" style={{ color: item.titleColor }}>{item.title}</h1>
                            ) : (
                                <h5 className="card-title" style={{ color: item.titleColor }}>{item.title}</h5>
                            )}
                            {item.contentTag === 'strong' ? (
                                <strong className="card-text" style={{ color: item.contentColor }}>{item.content}</strong>
                            ) : (
                                <a className="card-text" style={{ color: item.contentColor }}>{item.content}</a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default save;
