import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<ErrorPage></ErrorPage>,
    hydrateFallbackElement: <p>loading.....</p>,
    children:[
        {
            index: true,
            Component:Home
        },
        {
            path:'/profile',
            Component:Profile
        },

    ]
  },
]);