import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, fetchUser } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logout.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [fetchUser.fulfilled](state, action) {
      //! Have to change
      if (!action.payload) {
        return;
      }
      state.user = { ...action.payload.user };
      state.isLoggedIn = true;
    },
  },
});

export const authReducer = authSlice.reducer;
