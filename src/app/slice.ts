import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';

export const initialState: any = {
  data: null,
  loading: null,
  error: null,
  notice: null,
  mode: 'create',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setData(state, action: PayloadAction<any>) {
      state.data = action.payload;
    },
    setLoading(state, action: PayloadAction<any>) {
      state.loading = action.payload;
    },
    setMode(state, action: PayloadAction<any>) {
      state.mode = action.payload;
    },
    setError(state, action: PayloadAction<any>) {
      state.error = action.payload;
      state.loading = null;
    },
    setNotice(state, action: PayloadAction<any>) {
      state.notice = action.payload;
      state.loading = null;
    },
  },
});

export const { actions, reducer, name: sliceKey } = appSlice;
