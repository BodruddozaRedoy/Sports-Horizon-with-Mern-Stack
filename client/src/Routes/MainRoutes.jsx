import {createBrowserRouter} from 'react-router-dom'
import MainLayout from '../Layouts/MainLayout'
import ErrorPage from '../Pages/ErrorPage'
import HomePage from '../Pages/HomePage'
import ShopSection from '../Components/ShopSection'
import AddEquipmentPage from '../Pages/AddEquipmentPage'
import AllEquipmentPage from '../Pages/AllEquipmentPage'
import RegisterPage from '../Pages/RegisterPage'
import LoginPage from '../Pages/LoginPage'
import PrivateRoute from './PrivateRoute'
import MyEquipmentPage from '../Pages/MyEquipmentPage'
import CardDetailsPage from '../Pages/CardDetailsPage'
import UpdatePage from '../Pages/UpdatePage'
import UsersPage from '../Pages/UsersPage'
import AboutPage from '../Pages/AboutPage'
import ContactPage from '../Pages/ContactPage'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <HomePage/>,
                children: [
                    {
                        path: '/',
                        element: <ShopSection/>,
                        loader: () => fetch(`${import.meta.env.VITE_SERVER_URI}/limited-items`)
                    },
                    {
                        path: '/shop/:category',
                        element: <ShopSection/>,
                        loader: () => fetch(`${import.meta.env.VITE_SERVER_URI}/limited-items`)
                    }
                ]
            },
            {
                path: '/add-equipment',
                element: <PrivateRoute><AddEquipmentPage/></PrivateRoute>
            },
            {
                path: '/all-equipment',
                element: <AllEquipmentPage/>
            },
            {
                path: '/my-equipment',
                element: <PrivateRoute><MyEquipmentPage/></PrivateRoute>
            },
            {
                path: '/item/:id',
                element: <PrivateRoute><CardDetailsPage/></PrivateRoute>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_SERVER_URI}/item/${params.id}`)
            },
            {
                path: '/item-update/:id',
                element: <PrivateRoute><UpdatePage/></PrivateRoute>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_SERVER_URI}/item/${params.id}`)
            },
            {
                path: "/users",
                element: <UsersPage/>,
                loader: () => fetch(`${import.meta.env.VITE_SERVER_URI}/users`)
            },
            {
                path: "/about",
                element: <AboutPage/>,
            },
            {
                path: "/contact",
                element: <ContactPage/>,
            },
        ]
    },
    {
        path: '/register',
        element: <RegisterPage/>
    },
    {
        path: '/login',
        element: <LoginPage/>
    }
    
])