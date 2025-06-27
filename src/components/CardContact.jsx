
export const CardContact = () => {

    return (
        <div className="card mb-3" style={{maxWidth: "540px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="..." className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Nombre Contacto</h5>
                        <p className="card-text">Teléfono</p>
                        <p className="card-text"><small className="text-body-secondary">Email</small></p>
                    </div>
                </div>
            </div>
        </div>

    );
};