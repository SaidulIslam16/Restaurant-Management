import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import OrderFood from "../pages/OrderFood/OrderFood/OrderFood";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Secrect from "../pages/Secrect/Secrect";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import Reservation from "../pages/Dashboard/Reservation/Reservation";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/orderfood/:category',
                element: <OrderFood></OrderFood>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/secrect',
                element: <PrivateRoutes><Secrect></Secrect></PrivateRoutes>
            }
        ]
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'mycart',
                element: <MyCart></MyCart>
            },
            {
                path: 'home',
                element: <UserHome></UserHome>
            },
            {
                path: 'reservation',
                element: <Reservation></Reservation>
            },
            {
                path: 'payment-history',
                element: <PaymentHistory></PaymentHistory>
            }
        ]
    }
]);