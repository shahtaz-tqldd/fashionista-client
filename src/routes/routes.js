import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Homepage from "../pages/Homepage/Homepage";
import ProductPage from "../pages/Products/ProductPage";
import Products from "../pages/Products/Products";

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
            path: '/products/:id',
            loader: () => fetch('products.json'),
            element: <ProductPage />,
        },
    ]
}])