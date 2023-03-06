import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from 'redux/auth/auth-operations';
import { ThemeProvider } from '@mui/material';

import MainApp from 'pages/MainApp';
import SharedLayout from './SharedLayout';
import SignUp from 'pages/SignUp';
import Login from 'pages/Login';
import theme from './Common/theme';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/contacts" element={<MainApp />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
