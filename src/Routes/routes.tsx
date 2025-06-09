import { createBrowserRouter } from 'react-router-dom'
import UserLayout from '../Layout/UserLayout'
import HomePage from '../Pages/HomePage'
import AboutPage from '../Pages/AboutPage'
import ContactPage from '../Pages/ContactPage'
import Login from '../Auth/Login'
import Register from '../Auth/Register'
import ForgotPassword from '../Auth/ForgotPassword'
import ResetPassword from '../Auth/ResetPassword'


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
    }
])