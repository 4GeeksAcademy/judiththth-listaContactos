import { CardContact } from "../components/CardContact.jsx";
import { NavLink } from "react-router-dom";


export const Home = () => {

	return (
		<div className="text-center m-5">

			<div className="d-flex justify-content-end" style={{marginRight: "10px"}}>
				<NavLink to="/new-contact">
					<button className="btn btn-success">New Contact</button>
				</NavLink>
			</div>

			<CardContact />

		</div>
	);
}; 