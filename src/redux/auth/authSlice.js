import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, register, refreshUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state, action) {
      state.isLoading = true;
      state.error = null;
    },
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [register.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [logIn.pending](state, action) {
      state.isLoading = true;
      state.error = null;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [logOut.pending](state, action) {
      state.isLoading = true;
      state.error = null;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [logOut.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [refreshUser.fulfilled](state, action) {
      const { name, email } = action.payload;
      state.user.name = name;
      state.user.email = email;
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;
