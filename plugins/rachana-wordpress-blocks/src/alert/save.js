const save = (props) => {
    const { type, message, font } = props.attributes;

    return (
        <div className={`cgds alert alert-${type} fade d-flex align-items-center alert-dismissible-link show`} role="alert" style={{ fontFamily: font }}>
            <div>
                <i className="primary bi bi-exclamation-circle me-2"></i>
                {message}
            </div>
            <button type="button" className="btn-close btn-sm" aria-label="Close Alert"></button>
        </div>
    );
};

export default save;
