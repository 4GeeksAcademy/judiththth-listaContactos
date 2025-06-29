// Import necessary components and functions from react-router-dom.

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { NewContact } from "./pages/NewContact";

export const router =

  createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/new-contact" element={<NewContact />} />
      </>

    )
  );


