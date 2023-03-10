import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, fetchUser } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: handlePending,
    [login.pending]: handlePending,
    [logout.pending]: handlePending,
    [fetchUser.pending]: handlePending,

    [register.rejected]: handleRejected,
    [login.rejected]: handleRejected,
    [logout.rejected]: handleRejected,
    [fetchUser.rejected]: handleRejected,

    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [logout.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [fetchUser.fulfilled](state, action) {
      state.isLoading = false;
      console.log('need to change this :', action);
      if (!action.payload) {
        return;
      }
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export const authReducer = authSlice.reducer;
