export const FormNewContact = () => {

function addContact() {
    // fetch fetch("https://playground.4geeks.com/contact/agendas/Judith", { method: "POST" })
        // fetch("https://playground.4geeks.com/contact/agendas/Judith", { method: "GET" })
		// 	.then(resp => {
		// 		console.log(resp.ok);
		// 		console.log(resp.status);
		// 		return resp.json();
		// 	})
		// 	.then((data) => {
		// 		console.log(data.contacts)
		// 		setList(data.contacts)
		// 	})
		// 	.catch((error) => console.log(error))
		// 	}

}

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