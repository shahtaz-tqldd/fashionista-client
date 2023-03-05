import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import MyCartPage from "../pages/CartPage/MyCartPage";
import Checkout from "../pages/Checkout/Checkout";
import ContactPage from "../pages/ContactPage/ContactPage";
import Homepage from "../pages/Homepage/Homepage";
import Login from "../pages/LoginReegister/Login";
import Register from "../pages/LoginReegister/Register";
import ProductPage from "../pages/Products/ProductPage";
import Products from "../pages/Products/Products";
import StoreLocation from "../pages/StoreLocation.js/StoreLocation";
import SuccessPage from "../pages/SuccessPage/SuccessPage";
import WishList from "../pages/WishList/WishList";

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
            element: <Checkout />
        },
        {
            path: '/contact',
            element: <ContactPage />
        },
        {
            path: '/success',
            element: <SuccessPage />
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