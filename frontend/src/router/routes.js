import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Login } from "../components/login";
import { PrivateRoute } from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <PrivateRoute><App /></PrivateRoute>
    },
    {
        path: "/login",
        element: <Login />
    }
]);