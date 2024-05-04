import { useBlockProps } from "@wordpress/block-editor";

const save = ({ attributes }) => {
    const { cardItems, styles } = attributes;
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps}>
            {cardItems.map((item, index) => (
                <div key={index} className="cgds-example-card-grid">
                    <div className="card cgds" variant={styles === "horizontal" ? "card-horizontal" : undefined}>
                        {item.imageUrl && (
                            <img src={item.imageUrl} alt="Card Image" className="card-img-top" />
                        )}
                        <div className="card-body">
                            {item.title && (
                                <h2 className="card-title" style={{ color: item.titleColor, fontFamily: item.font }}>
                                    {item.title}
                                </h2>
                            )}
                            {item.content && (
                                <p className="card-text" style={{ color: item.contentColor, fontFamily: item.font }}>
                                    {item.content}
                                </p>
                            )}
                            {item.linkText && item.href && (
                                <a href={item.href} className="btn btn-primary">
                                    {item.linkText}
                                </a>
                            )}
                            {item.lastUpdated && (
                                <p className="card-text">
                                    <small className="text-muted">Last updated: {item.lastUpdated}</small>
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default save;
