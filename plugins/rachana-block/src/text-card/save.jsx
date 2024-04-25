import { useBlockProps } from "@wordpress/block-editor";

const save = ({ attributes }) => {
    const { cardItems } = attributes;
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps}>
            {cardItems.map((item, index) => (
                <div className="card" key={index}>
                    {item.titleTag === 'h1' ? (
                        <h1 className="card-title" style={{ color: item.titleColor, fontFamily: item.font }}>{item.title}</h1>
                    ) : (
                        <h5 className="card-title" style={{ color: item.titleColor, fontFamily: item.font }}>{item.title}</h5>
                    )}
                    {item.contentTag === 'strong' ? (
                        <strong className="card-text" style={{ color: item.contentColor, fontFamily: item.font }}>{item.content}</strong>
                    ) : (
                        <a className="card-text" style={{ color: item.contentColor, fontFamily: item.font }}>{item.content}</a>
                    )}
                </div>
            ))}
        </div>
    );
};

export default save;
