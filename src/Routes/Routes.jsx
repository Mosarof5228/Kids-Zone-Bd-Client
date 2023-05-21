import { createBrowserRouter } from "react-router-dom";
import AllToys from "../Home/AllToys/AllToys";
import Home from "../Home/Home/Home";
import Main from "../Layout/Main";
import AddToyTwo from "../pages/AddToy/AddToyTwo";
import BlogPage from "../pages/BlogPage/BlogPage";
import CategoryViewDetails from "../pages/Category/CategoryViewDetails";
import GalaryPage from "../pages/GalaryPage/GalaryPage";
import Login from "../pages/Login/Login";
import MyToys from "../pages/MyToys/MyToys";
import UpdateToys from "../pages/MyToys/UpdateToys/UpdateToys";
import Registration from "../pages/Registration/Registration";
import TestPage from "../pages/TestPage/TestPage";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import NotFoundPage from "../Shared/NotFoundPage";

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
                // loader: () => fetch('https://kids-zone-bd-server.vercel.app/allToys')
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
            },
            {
                path: '/viewDetails/:id',
                element: <PrivetRoute><ViewDetails></ViewDetails></PrivetRoute>,
                loader: ({ params }) => fetch(`https://kids-zone-bd-server.vercel.app/allToys/${params.id}`)

            },
            {
                path: '/editDetails/:id',
                element: <UpdateToys></UpdateToys>,
                loader: ({ params }) => fetch(`https://kids-zone-bd-server.vercel.app/allToys/${params.id}`)
            },
            {
                path: '/blog',
                element: <BlogPage></BlogPage>
            },
            {
                path: '/categoryViewDetails/:id',
                element: <PrivetRoute><CategoryViewDetails></CategoryViewDetails></PrivetRoute>,
                loader: ({ params }) => fetch(`https://kids-zone-bd-server.vercel.app/allToys/${params.id}`)

            },



        ]
    },
    {
        path: '*',
        element: <NotFoundPage></NotFoundPage>
    },
]);

export default router