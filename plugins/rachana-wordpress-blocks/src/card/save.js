const save = ({ attributes }) => {
    const { cardItems } = attributes;

    return (
        <div className="cgds page-component-item-wrapper picture-item">
            {cardItems.map((item, index) => (
                <div className="cgds card" key={index}>
                    <img className="card-img-top" src={item.imageUrl} alt={`image${index}`} />
                    <div className="card-body">
                        <a className="stretched-link link-primary" href={item.link}>
                            <div
                                className="h5 text-primary card-title"
                                style={{ color: item.cardTitleTextColor, fontFamily: item.font }}
                            >
                                {item.cardTitle}
                            </div>
                        </a>
                        <p
                            className="card-text"
                            style={{ color: item.bodyTextColor, fontFamily: item.font }}
                        >
                            {item.cardText}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default save;
