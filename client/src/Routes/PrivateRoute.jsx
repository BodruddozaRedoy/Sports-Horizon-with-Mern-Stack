import React, { useContext } from 'react';
import Spinner from '../Components/Spinner';
import { NavLink, Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';

const PrivateRoute = ({children}) => {
    const {user, loading, setLoading} = useContext(UserContext)
    const location = useLocation()
    if(loading){
        return <Spinner/>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to={'/login'}/>
};

export default PrivateRoute;