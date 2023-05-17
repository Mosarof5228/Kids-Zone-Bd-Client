import { createBrowserRouter } from "react-router-dom";
import AllToys from "../Home/AllToys/AllToys";
import Home from "../Home/Home/Home";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: 'allToys',
                element: <AllToys></AllToys>,
                loader: () => fetch('http://localhost:5000/allToys')
            }
        ]
    },
]);

export default router