import { createBrowserRouter } from 'react-router-dom'
import UserLayout from '../Layout/UserLayout'
import HomePage from '../Pages/HomePage'
import AboutPage from '../Pages/AboutPage'
import ContactPage from '../Pages/ContactPage'
import Login from '../Auth/Login'
import Register from '../Auth/Register'
import ForgotPassword from '../Auth/ForgotPassword'
import ResetPassword from '../Auth/ResetPassword'
import UserDashboardLayout from '../Layout/UserDashboardLayout'
import Overview from '../Clients/Overview'
import Deposit from '../Clients/Deposit'
import Withdraw from '../Clients/Withdraw'
import Plans from '../Clients/Plan'
import Packages from '../Clients/Packages'
import History from '../Clients/History'
import Support from '../Clients/Support'
import AdminOverview from '../Admin/AdminOverview'
import AdminLayout from '../Layout/AdminLayout'
import AllUsers from '../Admin/AllUsers'
import AllWithdrawal from '../Admin/AllWithdrawal'
import AllTransactions from '../Admin/AllTransactions'
import Analytics from '../Admin/Analytics'
import UserDetails from '../Admin/UserDetails'
import Updatekyc from '../Clients/UpdateKyc'


export const router = createBrowserRouter([
    {
        path: "",
        element: <UserLayout />,
        children: [
            {
                path: "",
                element: <HomePage />
            },
            {
                path: "about",
                element: <AboutPage />
            },
            {
                path: "contact",
                element: <ContactPage />
            }
        ]
    },
    {
        path: "login",
        element: <Login />
    },
    {
        path: "register",
        element: <Register />
    },
    {
        path:"forgot-password",
        element:<ForgotPassword/>
    },
    {
        path:"reset-password",
        element:<ResetPassword/>
    },
    {
        path:"user",
        element:<UserDashboardLayout/>,
        children:[
            {
                path:"overview",
                element:<Overview/>
            },
            {
                path:"deposit",
                element:<Deposit/>
            },
            {
                path:"withdraw",
                element:<Withdraw/>
            },
            {
                path:"my-plans",
                element: <Plans/>
            },
            {
                path:"packages",
                element:<Packages/>
            },
            {
                path:"history",
                element:<History/>
            },
            {
                path:"support",
                element:<Support/>
            },
            {
                path:"updatekyc",
                element:<Updatekyc/>
            }
        ]
    },
      {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        path: "adminhome",
        element: <AdminOverview />,
      },
      {
        path: "allusers",
        element: <AllUsers />,
      },
      {
        path:"withdrawals",
        element:<AllWithdrawal/>
      },
      {
        path:"transactions",
        element:<AllTransactions/>
      },
      {
        path:"analytics",
        element:<Analytics/>
      },
      {
        path:"userdetails/:_id",
        element: <UserDetails />,
      }
    ],
  },
])