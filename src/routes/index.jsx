import { createBrowserRouter } from 'react-router-dom';
import PrivateLayout from '../layout/PrivateLayout';
import HomeIndex from '../pages/home/HomeIndex';
import ProductIndex from '../pages/products/ProductIndex';
import ProductDetails from '../pages/products/ProductDetails';
import ShoppingCart from '../pages/products/ShoppingCart';
import ContacUsIndex from '../pages/contactUs/ContacUsIndex';
import TechnicalServiceIndex from '../pages/technicalService/TechnicalServiceIndex';
import Login from '../pages/login/Login';
import PublicLayout from '../layout/PublicLayout';
import User from '../pages/user/User';
import Register from '../pages/login/Register';
import Recover from '../pages/login/recover';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicLayout />,
        children: [
            {
                index: true,
                element: <HomeIndex />,
            },
            {
                path: '/productos/:productId',
                element: <ProductDetails />,
            },
            {
                path: 'productos',
                element: <ProductIndex />,
            },
            {
                path: 'productos/:productId',
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
            {
                path: '/login/recover',
                element: <Recover />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/*',
                element: <NotFound />,
            },
            {
                path: 'private',
                element: <PrivateLayout />,
                children: [
                    {
                        index: true,
                        element: <User />,
                    },
                ],
            },
        ],
    },
]);
