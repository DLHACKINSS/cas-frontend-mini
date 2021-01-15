import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';

export const initialState: any = {
  user: null,
  data: null,
  users: [],
  loading: false,
  error: null,
  draft: null,
  query: null,
  role: null,
  notice: null,
  mode: 'create',
  pagination: { current: 1, pageSize: 10, total: 1 },
  canBlur: true,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setData(state, action: PayloadAction<any>) {
      state.data = action.payload;
    },
    setUser(state, action: PayloadAction<any>) {
      state.user = action.payload;
    },
    setCanBlur(state, action: PayloadAction<any>) {
      state.canBlur = action.payload;
    },
    setDraft(state, action: PayloadAction<any>) {
      state.draft = action.payload;
    },
    setMode(state, action: PayloadAction<any>) {
      state.mode = action.payload;
    },
    setQuery(state, action: PayloadAction<any>) {
      state.query = action.payload;
    },
    createUser(state) {
      state.loading = true;
      state.error = null;
      state.user = null;
    },
    userCreated(state, action: PayloadAction<any>) {
      state.user = action.payload;
      state.loading = false;
      state.data = null;
    },
    setError(state, action: PayloadAction<any>) {
      state.error = action.payload;
      state.loading = false;
      state.loadingQuery = false;
    },
    loadUsers(state) {
      state.loading = true;
      state.error = null;
      state.users = [];
    },
    usersLoaded(state, action: PayloadAction<any>) {
      state.users = action.payload;
      state.loading = false;
    },
    queryUser(state) {
      state.loadingQuery = true;
      state.error = null;
      state.user = null;
    },
    userQueried(state, action: PayloadAction<any>) {
      state.user = action.payload;
      state.loadingQuery = false;
    },
    updateUser(state) {
      state.loading = true;
      state.notice = null;
      state.error = null;
    },
    loadData(state) {
      state.loading = true;
      state.error = null;
    },
    loadUser(state) {
      state.loading = true;
      state.error = null;
      state.user = null;
    },
    setNotice(state, action: PayloadAction<any>) {
      state.notice = action.payload;
      state.loading = false;
    },
    userLoaded(state, action: PayloadAction<any>) {
      state.user = action.payload;
      state.loading = false;
      state.data = null;
    },
    setPagination(state, action: PayloadAction<any>) {
      state.pagination = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = userSlice;
