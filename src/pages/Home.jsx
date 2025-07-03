import { CardContact } from "../components/CardContact.jsx";
import { NavLink } from "react-router-dom";
import React, {useState, useEffect} from "react";


export const Home = () => {

	const [contact, setContact] = useState("");

	const [list, setList] = useState([]);

	function getContactList() {
		fetch("https://playground.4geeks.com/contact/agendas/judith/contacts", { method: "GET" })
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

	function deleteContact(id) {
		fetch(`https://playground.4geeks.com/contact/agendas/judith/contacts/${id}`, { method: "DELETE" })
			.then(resp => {
				if (resp.ok) {
					getContactList()
				}
				return resp.json();
			})
			.then((data) => {
				console.log(data)
				
			})
			.catch((error) => console.log(error))
			}

			
useEffect(() => {
	getContactList()
}, []);


return (
	<div className="text-center m-5">

		<div className="d-flex justify-content-end" style={{ marginRight: "10px" }}>
			<NavLink className="btn btn-success" to="/new-contact">	New Contact	</NavLink>
		</div>

		{list.map((item) => (
			<CardContact key={item.id} name={item.name} phone={item.phone} email={item.email} address={item.address} onDelete={() => deleteContact(item.id)}/>
		))}

	</div>
);
}; 