import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedLayout from '../layouts/protectedLayout';
import AuthLayout from '../layouts/authLayout';
import Login from '../features/auth/login';
import SignUp from '../features/auth/signUp';
import Home from '../features/auth/home/home';
import { useAuth } from '../hooks/useAuth';

export default function AppRoutes() {
  const [accessToken ] = useAuth();
  return (
      <BrowserRouter>
          <Suspense fallback={ <>Loading ...</>}>
        <Routes>
          <Route path='/' element={accessToken!=null?<Home/>:<Login/> } />
              <Route element={<ProtectedLayout/>}> 
                <Route path='/home' element={<Home/> } />
              </Route>
              
              <Route element={<AuthLayout />}>
                <Route path='/login' element={<Login />} />
                </Route>
                <Route path='/signUp' element={<SignUp />} />
              </Routes>
              </Suspense>
      </BrowserRouter>
  )
}
