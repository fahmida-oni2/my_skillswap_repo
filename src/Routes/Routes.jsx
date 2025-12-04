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
import PrivateRoutes from "./PrivateRoutes";
import Loading from "../Components/Loading/Loading";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";
import Support from "../Pages/Support/Support";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<ErrorPage></ErrorPage>,
    hydrateFallbackElement: <Loading></Loading>,
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
            element: <PrivateRoutes>
              <Profile></Profile>
            </PrivateRoutes>
            
        },
         {
            path:'/skills/:skillId',
           element: 
            <SkillDetails></SkillDetails>
          
        },
         {
            path:'/about-us',
            element:<AboutUs></AboutUs>,
        },
         {
            path:'/contact',
            element:<Contact></Contact>,
        },
         {
            path:'/support',
            element:<Support></Support>,
        }


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