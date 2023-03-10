import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import MyCartPage from "../pages/CartPage/MyCartPage";
import Checkout from "../pages/Checkout/Checkout";
import ContactPage from "../pages/ContactPage/ContactPage";
import Homepage from "../pages/Homepage/Homepage";
import Login from "../pages/LoginRegister/Login";
import Register from "../pages/LoginRegister/Register";
import ProductPage from "../pages/Products/ProductPage";
import Products from "../pages/Products/Products";
import StoreLocation from "../pages/StoreLocation.js/StoreLocation";
import SuccessPage from "../pages/SuccessPage/SuccessPage";
import WishList from "../pages/WishList/WishList";
import PrivateRoute from "./PrivateRoute";

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
            path: '/checkout',
            element: <PrivateRoute><Checkout /></PrivateRoute>
        },
        {
            path: '/contact',
            element: <ContactPage />
        },
        {
            path: '/success',
            element: <PrivateRoute><SuccessPage /></PrivateRoute>
        },
        {
            path: '/cart',
            element: <MyCartPage />
        },
        {
            path: '/wish-list',
            element: <WishList />
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
            loader: async({params}) => await fetch(`https://fashionista-server.vercel.app/products/${params.id}`),
            element: <ProductPage />,
        },
    ]
}])