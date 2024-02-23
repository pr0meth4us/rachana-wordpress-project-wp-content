const save = (props) => {

    const { type, message } = props.attributes;

    return (
        <div className={`cgds alert alert-${type} fade d-flex align-items-center alert-dismissible-link show`} role="alert">
            <div>
                <i className="primary bi bi-exclamation-circle me-2"></i>
                {message}
            </div>

            <button type="button" className="btn-close btn-sm"></button>
        </div>
    );

};

export default save;