
export const CardContact = ({ name, phone, address, email, onDelete }) => {

    return (
        <div className="card mb-3" style={{ margin: "10px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://files.jotform.com/jotformapps/fa7716f93e1a40894d4ea2ab704842d1.png"
                        className="img-fluid rounded-start"
                        style={{ maxHeight: "200px", objectFit: "contain", margin: "5px" }} />
                </div>
                <div className="col-md-8">
                    <div className="card-body d-flex justify-content-between align-items-start">
                        <div className="w-100 text-center">
                            <h5 className="card-title">{name}</h5><br></br>
                            <p className="card-text"><i class="fa-solid fa-phone text-primary"></i> {phone}</p>
                            <p className="card-text"><i class="fa-solid fa-at text-primary"></i> {email}</p>
                            <p className="card-text"><i class="fa-solid fa-map-location-dot text-primary"></i> {address}</p>
                        </div>

                        <button onClick={onDelete} className="btn btn-secondary ms-3"><i class="fa-solid fa-trash"></i>Delete</button>
                    </div>
                </div>
            </div>
        </div>
       
    );
};
