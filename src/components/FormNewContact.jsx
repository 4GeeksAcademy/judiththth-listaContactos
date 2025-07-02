import React, {useState, useEffect} from "react";

export const FormNewContact = () => {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")

    function addContact() {
        fetch("https://playground.4geeks.com/contact/agendas/judith",
            {
                method: "POST", body: JSON.stringify({
                    name: name,
                    phone: phone,
                    email: email,
                    address: address
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(resp => {
                console.log(resp.ok);
                console.log(resp.status);
                return resp.json();
            })
            .then((data) => {
                console.log(data.contacts)
                setList(data.contacts)
            })
            .catch((error) => console.log(error))
    }

    return (
               

        <form style={{ margin: "15px" }} onSubmit={addContact}> 

            <h1 className="text-center">New Contact</h1>

            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name Lastname" onChange={(event) => setName(event.target.value)} />

            </div>

            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={(event) => setEmail(event.target.value)} />

            </div>

            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="+34 XXX XXX XXX" onChange={(event) => setPhone(event.target.value)} />

            </div>

            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Address</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Example Street, XX. ZIP CODE, City" onChange={(event) => setAddress(event.target.value)} />

            </div>

            <button className="btn btn-primary text-center" type="submit" style={{ width: "100%" }}>Save</button>

        </form>

    );
};