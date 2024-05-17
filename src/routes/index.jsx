import { createBrowserRouter } from 'react-router-dom';
import PrivateLayout from '../layout/PrivateLayout';
import HomeIndex from '../pages/home/HomeIndex';
import ProductIndex from '../pages/products/ProductIndex';
import ProductDetails from '../pages/products/ProductDetails';
import ShoppingCart from '../pages/products/ShoppingCart';
import ContacUsIndex from '../pages/contactUs/ContacUsIndex';
import TechnicalServiceIndex from '../pages/technicalService/TechnicalServiceIndex';
import Login from '../pages/login/Login';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PrivateLayout />,
        children: [
            {
                index: true,
                element: <HomeIndex />,
            },
            {
                path: 'productos',
                element: <ProductIndex />,
            },
            {
                path: 'productos/:productName',
                element: <ProductDetails />,
            },
            {
                path: 'shopping',
                element: <ShoppingCart />,
            },
            {
                path: 'contactanos',
                element: <ContacUsIndex />,
            },
            {
                path: 'servicios',
                element: <TechnicalServiceIndex />,
            },
            {
                path: 'login',
                element: <Login />,
            },
        ],
    },
]);
