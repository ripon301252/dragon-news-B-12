import { createBrowserRouter } from "react-router";
import HomeLayOut from "../layouts/HomeLayOut";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayOut,
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