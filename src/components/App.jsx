import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeProvider } from '@mui/material';

import MainApp from 'pages/MainApp';
import SharedLayout from './SharedLayout';
import SignUp from 'pages/SignUp';
import Login from 'pages/Login';
import theme from './Common/theme';

import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { fetchUser } from 'redux/auth/auth-operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            path="/register"
            element={
              <RestrictedRoute component={SignUp} redirectTo="/contacts" />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={Login} redirectTo="/contacts" />
            }
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={MainApp} redirectTo="/login" />}
          />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
