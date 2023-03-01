import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Homepage from "../pages/Homepage/Homepage";
import Login from "../pages/LoginReegister/Login";
import Register from "../pages/LoginReegister/Register";
import ProductPage from "../pages/Products/ProductPage";
import Products from "../pages/Products/Products";
import StoreLocation from "../pages/StoreLocation.js/StoreLocation";

export const routes = createBrowserRouter([{
    path: '/',
    element: <Main />,
    children: [
        {
            path: '/',
            element: <Homepage />
        },
        {
            path: '/products',
            element: <Products />
        },
        {
            path: '/stores',
            element: <StoreLocation />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/register',
            element: <Register />
        },
        {
            path: '/products/:id',
            loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`),
            element: <ProductPage />,
        },
    ]
}])