import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {UserContext} from "react"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
    <UserContext>
    <App />
    </UserContext>
    </BrowserRouter>
);