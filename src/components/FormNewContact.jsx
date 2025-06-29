export const FormNewContact = () => {

    return (

        <div style={{margin: "15px"}}>

            <h1 className="text-center">New Contact</h1>

            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Name Lastname"/>
                
            </div>

            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                
            </div>

            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Phone</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="+34 XXX XXX XXX"/>
                
            </div>

            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Example Street, XX. ZIP CODE, City"/>
                
            </div>

            <button className="btn btn-primary text-center" style={{width: "100%"}}>Save</button>

        </div>

    );
};