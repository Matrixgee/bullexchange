import {createBrowserRouter} from 'react-router-dom'
import UserLayout from '../Layout/UserLayout'
import HomePage from '../Pages/HomePage'
import AboutPage from '../Pages/AboutPage'
import ContactPage from '../Pages/ContactPage'


export const router = createBrowserRouter([
    {
        path:"",
        element:<UserLayout/>,
        children:[
            {
                path:"",
                element: <HomePage/>
            },
            {
                path:"about",
                element: <AboutPage/>
            },
            {
                path:"contact",
                element:<ContactPage/>
            }
        ]
    }
])