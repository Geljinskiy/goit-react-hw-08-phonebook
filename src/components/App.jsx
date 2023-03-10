import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/auth-operations';
import { ThemeProvider } from '@mui/material';

import MainApp from 'pages/MainApp';
import SharedLayout from './SharedLayout';
import SignUp from 'pages/SignUp';
import Login from 'pages/Login';
import theme from './Common/theme';
import PrivateRoute from './PrivateRoute';
import { fetchUser } from 'redux/auth/auth-operations';

export const App = () => {
  const dispatch = useDispatch();
  
  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);
  
  useEffect(() => {
      dispatch(fetchUser());
    }, [dispatch]);
    
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<MainApp />} />
          {/* <PrivateRoute path="/contacts">
            <MainApp/>
          </PrivateRoute> */}
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
