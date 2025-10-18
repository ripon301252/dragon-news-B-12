import { createBrowserRouter } from "react-router";
import HomeLayOut from "../layouts/HomeLayOut";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

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
                loader: ()=> fetch('../news.json')
            },
        ]
    },
    {
        path: '/auth',
        element: <h2>Authentication Layout</h2>,
    },
    {
        path: '/news',
        element: <h2>Authentication Layout</h2>,
    },
    {
        path: '/*',
        element: <h2>Error 404</h2>,
    },
])