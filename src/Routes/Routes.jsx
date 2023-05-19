import { createBrowserRouter } from "react-router-dom";
import AllToys from "../Home/AllToys/AllToys";
import Home from "../Home/Home/Home";
import Main from "../Layout/Main";
import AddToyTwo from "../pages/AddToy/AddToyTwo";
import GalaryPage from "../pages/GalaryPage/GalaryPage";
import Login from "../pages/Login/Login";
import MyToys from "../pages/MyToys/MyToys";
import Registration from "../pages/Registration/Registration";
import TestPage from "../pages/TestPage/TestPage";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

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
                // loader: () => fetch('http://localhost:5000/allToys')
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'registration',
                element: <Registration></Registration>
            },
            {
                path: 'addToy',
                element: <AddToyTwo></AddToyTwo>
            },
            {
                path: 'myToys',
                element: <PrivetRoute><MyToys></MyToys></PrivetRoute>
            },
            {
                path: 'testPage',
                element: <TestPage></TestPage>
            },
            {
                path: 'galary',
                element: <GalaryPage></GalaryPage>
            }

        ]
    },
]);

export default router