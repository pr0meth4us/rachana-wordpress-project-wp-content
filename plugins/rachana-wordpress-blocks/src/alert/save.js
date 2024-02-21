const save = ({ attributes }) => {
    const { accordionItems } = attributes;

    return (
        <div className="cgds accordion" id="accordionExample">
            {accordionItems.map((item, index) => (
                <div className="accordion-item" key={index}>
                    <h2 className="accordion-header" id={`heading${index}`}>
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${index}`}
                            aria-expanded="true"
                            aria-controls={`collapse${index}`}
                            style={{ backgroundColor: item.buttonColor, color: item.titleColor, fontFamily: item.font }}
                        >
                            <i className={`bi ${item.iconType}`} style={{ color: item.iconColor }}></i>
                            {item.accordionTitle}
                        </button>
                    </h2>
                    <div
                        id={`collapse${index}`}
                        className="accordion-collapse collapse"
                        aria-labelledby={`heading${index}`}
                        data-bs-parent="#accordionExample"
                    >
                        <div
                            className="accordion-body"
                            style={{ color: item.bodyTextColor, fontFamily: item.font }}
                        >
                            {item.bodyContent}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default save;