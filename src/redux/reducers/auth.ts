import {createSlice} from '@reduxjs/toolkit';

const auth = createSlice({
  name: 'auth',
  initialState: {
    isAppInitialized: false,
    isAuthenticated: false,
    uid: 999999999,
    accessToken: 999999999,
  },
  reducers: {
    SIGN_UP: state => {
      state.isAppInitialized = true;
    },
    SIGN_IN: state => {
      state.isAuthenticated = true;
    },
    SIGN_OUT: state => {
      state.isAuthenticated = false;
    },
    STORE_UID: (state, action) => {
      state.uid = action.payload;
    },
    STORE_ACCESS_TOKEN: (state, action) => {
      state.accessToken = action.payload;
    },
  },
});

export const authActions = auth.actions;

export default auth;
