import { CardContact } from "../components/CardContact.jsx";
import { NavLink } from "react-router-dom";


export const Home = () => {

	return (
		<div className="text-center mt-5">

			<NavLink to="/new-contact" className="justify-content flex-end">
				<button className="btn btn-success">New Contact</button>
			</NavLink>
			<CardContact />

		</div>
	);
}; 