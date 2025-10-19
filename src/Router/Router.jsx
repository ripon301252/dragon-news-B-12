import { createBrowserRouter } from "react-router";
import HomeLayOut from "../layouts/HomeLayOut";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";
import Loading from "../Pages/Loading";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayOut,
        
        children: [
            {
                path: '/',
                Component: Home,
            },
            {
                path: '/category/:id',
                Component: CategoryNews,
                loader: ()=> fetch('../news.json'),
                hydrateFallbackElement: <Loading></Loading>,
            },
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>,
            },
            {
                path: '/auth/register',
                element: <Register></Register>,
            },
        ]
    },
    {
        path: '/news-details/:id',
        element:(
        <PrivateRoute>
            <NewsDetails></NewsDetails>
        </PrivateRoute>),
        loader: ()=> fetch('../news.json'),
        hydrateFallbackElement: <Loading></Loading>,
    },
    {
        path: '/*',
        element: <h2>Error 404</h2>,
    },
])