const save = ({ attributes }) => {
    const { cardItems } = attributes;

    return (
        <div
            className="cgds page-component-item-wrapper picture-item"
        >
            {cardItems.map((item, index) => (

                <div className="cgds card" key={index + 1}>
                    <img
                        className="card-img-top"
                        src={item.imageUrl}
                        alt="Card Image"
                    />

                    <div className="card-body">
                        <a
                            className="stretched-link link-primary"
                            href={item.href}
                        >
                            <div
                                className="h5 text-primary card-title"
                                style={{
                                    color: item.titleColor,
                                    fontFamily: item.font,
                                }}
                            >
                                <span>{item.title}</span>
                            </div>
                        </a>
                        <p
                            className="card-text"
                            style={{color: item.contentColor, fontFamily: item.font}}
                        >
                            {item.content}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );};

export default save;
