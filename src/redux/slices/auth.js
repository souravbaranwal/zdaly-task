import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUserAction: (state, {payload}) => {
      const {is_onboarded} = payload;
      state.isLoggedIn = true;
      state.is_onboarded = is_onboarded;
    },
    logoutUserAction: () => initialState,
  },
});

export const {
  actions: {loginUserAction, logoutUserAction},
  reducer: authReducer,
} = auth;
