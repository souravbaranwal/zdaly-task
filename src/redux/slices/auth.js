import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  isOnboarded: false,
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUserAction: state => {
      state.isLoggedIn = true;
    },

    logoutUserAction: () => initialState,

    onboardUserAction: (state, {payload}) => {
      const {isOnboarded} = payload;
      state.isOnboarded = isOnboarded;
    },
  },
});

export const {
  actions: {loginUserAction, logoutUserAction, onboardUserAction},
  reducer: authReducer,
} = auth;
