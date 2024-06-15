import { useBlockProps } from "@wordpress/block-editor";

const save = ({ attributes }) => {
    const { cardItems, style } = attributes;
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps} className="wrapper-fluid">
            <section className="card-wrapper">
                <article>
                    <div className="cgds card-item-wrapper picture-item">
                        {cardItems.map((item) => (
                            <div className={`cgds card ${style}`} key={item.id}>
                                {item.imageUrl && (
                                    <img
                                        className={style === 'card-horizontal' ? 'card-img-left' : 'card-img-top'}
                                        src={item.imageUrl}
                                        alt="Card Image"
                                    />
                                )}
                                <div className="card-body">
                                    {item.lastUpdated && (
                                        <p className="card-text">
                                            <small className="text-muted">{item.lastUpdated}</small>
                                        </p>
                                    )}
                                    <a className="stretched-link link-primary h3 card-title"
                                       style={{color: item.titleColor}}>{item.title}</a>

                                    <p className="card-text" style={{color: item.contentColor}}>
                                        {item.content}
                                    </p>
                                    {item.linkText && (
                                        <a className="card-link" href="#">
                                            <i className="bi bi-arrow-right-circle-fill"></i> {item.linkText}
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </article>
            </section>
        </div>
    );
};

export default save;
