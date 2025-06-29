import { FormNewContact } from "../components/FormNewContact.jsx";
import { NavLink } from "react-router-dom";

export const NewContact = () => {

    return (
        <div>

            <FormNewContact />
            <NavLink to="/">
                <button className="btn btn-secondary" style={{marginLeft: "15px"}}>Go back to Contacts</button>
            </NavLink>

        </div>
    )
}