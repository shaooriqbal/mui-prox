import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Navigate, Outlet } from 'react-router-dom';

export default function AuthLayout() {
    const [loading, accessToken] = useAuth();

            if(loading) { 
                return <div>Loading ...</div>
                 } 
    if(accessToken!=null) { 
                return <Navigate to={'/login'}/>
                }
    return <Outlet/>
}
