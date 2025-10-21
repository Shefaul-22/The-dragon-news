import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/pages/Home";
import CategoryNews from "../components/pages/CategoryNews";


import AuthLayout from "../layouts/AuthLayout";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";


const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout></HomeLayout>,
            children: [
                {
                    path: '',
                    element: <Home></Home>
                },
                {
                    path: '/category/:id',
                    element: <CategoryNews></CategoryNews>,
                    loader: () => fetch('/news.json')
                }

            ]

        },

        {
            path: "/auth",
            element: <AuthLayout></AuthLayout>,
            children: [
               
                {
                    path: "/auth/login",
                    element: <Login></Login>
                },
                {
                    path: "/auth/register",
                    element: <Register></Register>
                }
            ]
        },

        {
            path: "/news",
            element: <h2>News layout</h2>
        },

        {
            path: "/*",
            element: <h2>Error</h2>
        },


    ]
)

export default router;