import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Homepage from "../pages/Homepage/Homepage";

export const routes = createBrowserRouter([{
    path: '/',
    element: <Main />,
    children: [
        {
            path: '/',
            element: <Homepage/>
        }
    ]
}])