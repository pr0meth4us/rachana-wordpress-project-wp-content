import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

const save = ({ attributes }) => {
    const { cardItems } = attributes;
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps} className="wrapper-fluid">
            <section className="page-component-overview">
                <article>
                    <div className="cgds page-component-item-wrapper picture-item">
                        {cardItems.map((item, index) => (
                            <div className="cgds card" key={index + 1}>
                                <InnerBlocks.Content
                                    renderBlockLayout={(blocks) => (
                                        <img
                                            className="card-img-top"
                                            src={blocks[0]?.attributes?.url}
                                            alt="Card Image"
                                        />
                                    )}
                                />
                                <div className="card-body">
                                    <a
                                        className="stretched-link link-primary"
                                        href={item.href}
                                    >
                                        <div className="h5 text-primary card-title">
                                            <span
                                                style={{
                                                    color: item.titleColor,
                                                    fontFamily: item.font,
                                                }}
                                            >
                                                {item.title}
                                            </span>
                                        </div>
                                    </a>
                                    <p
                                        className="card-text"
                                        style={{
                                            color: item.contentColor,
                                            fontFamily: item.font,
                                        }}
                                    >
                                        {item.content}
                                    </p>
                                    <a className="card-link" href="#">
                                        <i className="bi bi-arrow-right-circle-fill"></i>{" "}
                                        {item.linkText}
                                    </a>
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
