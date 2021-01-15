import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';

export const initialState: any = {
  data: null,
  account: null,
  loading: false,
  error: null,
  signup: null,
  role: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setData(state, action: PayloadAction<any>) {
      state.data = action.payload;
    },
    setSignup(state, action: PayloadAction<any>) {
      state.mesSignup = action.payload;
    },
    setAccount(state, action: PayloadAction<any>) {
      state.account = action.payload;
    },
    loadAccount(state) {
      state.loading = true;
      state.error = null;
      state.account = null;
    },
    accountLoaded(state, action: PayloadAction<any>) {
      state.account = action.payload;
      state.loading = false;
      state.data = null;
    },
    setError(state, action: PayloadAction<any>) {
      state.error = action.payload;
      state.loading = false;
    },
    loadSignup(state) {
      state.loading = true;
      state.error = null;
      state.signup = null;
    },
    signupLoaded(state, action: PayloadAction<any>) {
      state.signup = action.payload;
      state.loading = false;
      state.data = null;
    },
  },
});

export const { actions, reducer, name: sliceKey } = authSlice;
