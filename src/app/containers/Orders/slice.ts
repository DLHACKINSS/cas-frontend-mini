import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';

const defaultData = null;
const defaultContract = { current: null };

export const initialState: any = {
  data: defaultData,
  orders: [],
  order: null,
  orderIdx: null,
  contract: defaultContract,
  loading: false,
  error: null,
  instance: null,
  service: null,
  os: [],
  currentOs: 'Window 10',
  products: [],
  region: 1,
  regions: [],
  contractCode: null,
  draft: {
    contract: null,
  },
  review: [],
  canBlur: true,
  mode: 'create',
  pagination: { current: 1, pageSize: 10, total: 1 },
  notice: null,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setData(state, action: PayloadAction<any>) {
      state.data = action.payload;
    },
    setOrderIdx(state, action: PayloadAction<any>) {
      state.orderIdx = action.payload;
    },
    setNotice(state, action: PayloadAction<any>) {
      state.notice = action.payload;
    },
    setCanBlur(state, action: PayloadAction<any>) {
      state.canBlur = action.payload;
    },
    setProducts(state, action: PayloadAction<any>) {
      state.products = action.payload;
    },
    setCurrentOs(state, action: PayloadAction<any>) {
      state.currentOs = action.payload;
    },
    setReview(state, action: PayloadAction<any>) {
      state.review = action.payload;
    },
    setInstance(state, action: PayloadAction<any>) {
      state.instance = action.payload;
    },
    setService(state, action: PayloadAction<any>) {
      state.service = action.payload;
    },
    setDraft(state, action: PayloadAction<any>) {
      state.draft = action.payload;
    },
    setMode(state, action: PayloadAction<any>) {
      state.mode = action.payload;
    },
    setContractCode(state, action: PayloadAction<any>) {
      state.contractCode = action.payload;
    },
    setRegion(state, action: PayloadAction<any>) {
      state.region = action.payload;
    },
    setOrders(state, action: PayloadAction<any>) {
      state.orders = action.payload;
    },
    loadOrders(state) {
      state.error = null;
      state.orders = [];
    },
    getRegions(state) {
      state.loadingRegions = true;
      state.error = null;
      state.regions = [];
    },
    regionsGetted(state, action: PayloadAction<any>) {
      state.regions = action.payload;
      state.loadingRegions = false;
    },
    ordersLoaded(state, action: PayloadAction<any>) {
      state.orders = action.payload;
      state.loading = false;
      state.data = defaultData;
    },
    createOrder(state) {
      state.loading = true;
      state.error = null;
      state.order = null;
    },
    extendOrder(state) {
      state.loading = true;
      state.error = null;
    },
    orderCreated(state, action: PayloadAction<any>) {
      state.order = action.payload;
      state.loading = false;
      state.data = defaultData;
      state.contract = defaultContract;
      state.instance = null;
      state.service = null;
      state.review = [];
    },
    setError(state, action: PayloadAction<any>) {
      state.error = action.payload;
      state.loading = false;
      state.loadingQuery = false;
      state.data = defaultData;
    },
    updateOrders(state) {
      state.loading = true;
      state.error = null;
      state.orders = null;
    },
    loadContract(state) {
      state.loadingQuery = true;
      state.error = null;
      state.contract = defaultContract;
    },
    contractLoaded(state, action: PayloadAction<any>) {
      state.contract = action.payload;
      state.loadingQuery = false;
    },
    loadInstance(state) {
      state.loading = true;
      state.error = null;
      state.instance = null;
    },
    instanceLoaded(state, action: PayloadAction<any>) {
      state.instance = action.payload;
      state.loading = false;
    },
    loadService(state) {
      state.loading = true;
      state.error = null;
      state.service = null;
    },
    serviceLoaded(state, action: PayloadAction<any>) {
      state.service = action.payload;
      state.loading = false;
    },
    loadOs(state) {
      state.loading = true;
      state.error = null;
      state.os = [];
    },
    osLoaded(state, action: PayloadAction<any>) {
      state.os = action.payload;
      state.loading = false;
    },
    setPagination(state, action: PayloadAction<any>) {
      state.pagination = action.payload;
    },
    updateOrder(state) {
      state.loading = true;
      state.error = null;
    },
    orderUpdated(state, action: PayloadAction<any>) {
      state.order = action.payload;
      state.data = defaultData;
      state.loading = false;
    },
    getOrder(state) {
      state.loading = true;
      state.order = null;
      state.error = null;
    },
    orderGetted(state, action: PayloadAction<any>) {
      state.order = action.payload;
      state.loading = false;
      state.data = defaultData;
    },
    deployOrder(state) {
      state.error = null;
    },
    orderDeployed(state) {
      state.data = defaultData;
    },
    approveOrder(state) {
      state.error = null;
    },
    orderApproved(state, action: PayloadAction<any>) {
      state.order = action.payload;
      state.data = defaultData;
    },
  },
});

export const { actions, reducer, name: sliceKey } = ordersSlice;
