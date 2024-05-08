import { useBlockProps } from "@wordpress/block-editor";

const save = ({ attributes }) => {
    const { cardItems, style } = attributes;
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps} className="wrapper-fluid">
            <section className="page-component-overview">
                <article>
                    <div className="cgds page-component-item-wrapper picture-item">
                        {cardItems.map((item, index) => (
                            <div className={`cgds card`} key={index + 1} variant={`${style}`}>
                                <div className="card-body">
                                    {item.lastUpdated && (
                                        <p className="card-text">
                                            <small className="text-muted">{item.lastUpdated}</small>
                                        </p>
                                    )}
                                    {item.imageUrl && (
                                        <img
                                            className={style === 'card-horizontal' ? 'card-img-left' : 'card-img-top'}
                                            src={item.imageUrl}
                                            alt="Card Image"
                                        />
                                    )}
                                    <a className="stretched-link link-primary h3 card-title"
                                       style={{color: item.titleColor}}>ចំណងជើងកាត</a>

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
