import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile/Profile";
import Skills from "../Pages/Skills/Skills";
import SkillDetails from "../Pages/SkillDetails/SkillDetails";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import AuthLayouts from "../Components/AuthLayouts/AuthLayouts";

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
            path:'/skills',
            element:<Skills></Skills>,
        },
        {
            path:'/profile',
            Component:Profile
        },
         {
            path:'/skills/:id',
           element: <SkillDetails></SkillDetails>
        },


          ]
        },
        {
          path:'/auth',
          element:<AuthLayouts></AuthLayouts>,
          children:[
              {
                path: '/auth/login',
                element:<Login></Login>,
              },
              {
                path: '/auth/register',
                element:<Register></Register>,
              }
          ],
        }
]);