import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Error from "../Pages/Error/Error";
import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import DashBoard from "../Pages/DashBoard/DashBoard";
import MyClasses from "../Pages/Stu_Dashboard/MyClasses";
import AllUsers from "../Pages/AdminDashboard/AllUsers";
import AddClass from "../Ins_Dashboard/AddClass";
import Payment from "../Pages/Payment/Payment";
import AdminRoute from "./AdminRoute";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/instructors',
            element: <Instructors></Instructors>
        },
        {
            path: '/classes',
            element: <Classes></Classes>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },

      ]
    },
    {
      path: 'dashboard',
      element: <DashBoard></DashBoard>,
      children: [
        {
          path: 'myclasses',
          element: <MyClasses></MyClasses>
        },
        {
          path: 'allusers',
          element: <AllUsers></AllUsers>
        },
        {
          path: 'addclass',
          element: <AdminRoute><AddClass></AddClass></AdminRoute>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        }
      ]
    }
  ]);