import {useBlockProps} from "@wordpress/block-editor";

const save = ({ attributes }) => {
    const { cardItems, style } = attributes;
    const blockProps = useBlockProps.save({
        className: "cgds card",
        variant: style,
    });

    return (
        <div {...blockProps}>
            {cardItems.map((item, index) => (
                <div key={index} className="card-item">
                    {item.lastUpdated && (
                        <p className="card-text">
                            <small className="text-muted">{item.lastUpdated}</small>
                        </p>
                    )}
                    {item.imageUrl && (
                        <img
                            className={`card-image ${style === "card-horizontal" ? "card-image-left" : "card-image-top"}`}
                            src={item.imageUrl}
                            alt="Card Image"
                        />
                    )}
                    <h2
                        className="card-title"
                        style={{ color: item.titleColor, fontFamily: item.font }}
                    >
                        {item.title}
                    </h2>
                    <p className="card-content" style={{ color: item.contentColor, fontFamily: item.font }}>
                        {item.content}
                    </p>
                    {item.linkText && (
                        <a className="card-link" href={item.href}>
                            <i className="bi bi-arrow-right-circle-fill"></i> {item.linkText}
                        </a>
                    )}
                </div>
            ))}
        </div>
    );
};

export default save;
