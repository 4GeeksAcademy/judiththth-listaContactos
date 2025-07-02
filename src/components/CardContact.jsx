
export const CardContact = ({name, phone, address, email}) => {

    return (
        <div className="card mb-3" style={{margin:"10px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://files.jotform.com/jotformapps/fa7716f93e1a40894d4ea2ab704842d1.png"
                    className="img-fluid rounded-start"
                    style={{ maxHeight: "200px", objectFit: "contain", margin: "5px" }} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{phone}</p>
                        <p className="card-text">{email}</p>
                        <p className="card-text">{address}</p>
                    </div>
                </div>
            </div>
        </div>

    );
};
