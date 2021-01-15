import path from 'api/path';
import empty from 'is-empty';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import { selectUser } from '../Users/selectors';
import { Message } from './constants';
import {
  selectContract,
  selectContractCode,
  selectData,
  selectOrder,
  selectOrders,
  selectPagination,
} from './selectors';
import { actions } from './slice';

export function* getOrders() {
  const pagination = yield select(selectPagination);
  const requestURL =
    path.orders.orders +
    `?page=${pagination.current}&page_size=${pagination.pageSize}`;
  const options = { method: 'get' };

  try {
    const orders = yield call(request, requestURL, options);
    if (orders) {
      yield put(actions.ordersLoaded(orders.data));

      yield put(
        actions.setPagination({
          ...pagination,
          total:
            orders.next_page &&
            pagination.total < orders.next_page * pagination.pageSize
              ? orders.next_page * pagination.pageSize
              : pagination.total,
        }),
      );
    }
  } catch (err) {
    yield put(actions.setError(Message.QUERY_FAIL));
  }
}

export function* getRegions() {
  const requestURL = path.orders.regions;
  const options = { method: 'get' };

  try {
    const res = yield call(request, requestURL, options);
    if (res) {
      yield put(actions.regionsGetted(res.data));
    }
  } catch (err) {
    yield put(actions.setError(null));
  }
}

export function* updateOrder() {
  const data = yield select(selectData);
  const order = yield select(selectOrder);
  const requestURL = `${path.orders.order}/${data.orderId}`;
  const options = { method: 'put', body: JSON.stringify(data.newInfo) };

  if (!data) {
    return;
  }

  try {
    const res = yield call(request, requestURL, options);
    if (res) {
      yield put(actions.orderUpdated({ ...order, ...res }));
      yield put(actions.setNotice(Message.UPDATE_SUCCESS));
    }
  } catch (err) {
    yield put(actions.setError(Message.UPDATE_FAIL));
  }
}

export function* approveOrder() {
  const data = yield select(selectData);
  const order = yield select(selectOrder);
  const orders = yield select(selectOrders);
  const requestURL = `${path.orders.order}/${data.orderId}`;
  const options = { method: 'put', body: JSON.stringify(data.newInfo) };

  if (!data) {
    return;
  }

  try {
    const res = yield call(request, requestURL, options);
    if (res) {
      yield put(actions.orderApproved({ ...order, ...res }));
      yield put(actions.setNotice(Message.APPROVE_SUCCESS));
      const newOrders = [...orders];
      newOrders[data.approve] = res;
      yield put(actions.ordersLoaded(newOrders));
    }
  } catch (err) {
    yield put(actions.setError(Message.UPDATE_FAIL));
  }
}

export function* deployOrder() {
  const data = yield select(selectData);
  const orders = yield select(selectOrders);
  const requestURL = `${path.computes.computes}`;
  const options = { method: 'post', body: JSON.stringify(data.data) };

  if (!data) {
    return;
  }

  try {
    const res = yield call(request, requestURL, options);
    if (res) {
      yield put(actions.setNotice(Message.DEPLOY_SUCCESS));
      const order = { ...data.order };
      order.status = 'DEPLOYED';
      const newOrders = [...orders];
      newOrders[data.deploy] = order;
      yield put(actions.ordersLoaded(newOrders));
    }
  } catch (err) {
    yield put(actions.setError(Message.DEPLOY_FAIL));
  }
}

export function* getOs() {
  const requestURL = path.orders.os;
  const options = { method: 'get' };

  try {
    const res = yield call(request, requestURL, options);
    if (res) {
      yield put(actions.osLoaded(res.data));
    }
  } catch (err) {
    yield put(actions.setError(Message.SYSTEM_ERROR));
  }
}

export function* getInstance() {
  const requestURL = path.orders.instance;
  const options = { method: 'get' };

  try {
    const res = yield call(request, requestURL, options);
    if (res) {
      const defaultInstance = res.data
        .filter(item => item.type !== 'OS')
        .map(item => {
          const { id, name } = item;
          return { id, name, unit: item.unit.name, quantity: 0 };
        });
      yield put(actions.instanceLoaded(defaultInstance));
    }
  } catch (err) {
    yield put(actions.setError(Message.SYSTEM_ERROR));
  }
}

export function* getService() {
  const requestURL = path.orders.service;
  const options = { method: 'get' };

  try {
    const res = yield call(request, requestURL, options);
    if (res) {
      const defaultService = res.data.map(item => {
        const { id, name } = item;
        return { id, name, unit: item.unit.name, quantity: 0 };
      });
      yield put(actions.serviceLoaded(defaultService));
    }
  } catch (err) {
    yield put(actions.setError(Message.SYSTEM_ERROR));
  }
}

export function* createOrder() {
  const data = yield select(selectData);
  if (empty(data)) {
    yield put(actions.setError(Message.DATA_INVALID));
    return;
  }
  const requestURL = path.orders.orders;
  const options = { method: 'post', body: JSON.stringify(data) };

  try {
    const order = yield call(request, requestURL, options);
    if (order) {
      yield put(actions.orderCreated(order));
      yield put(actions.setNotice(Message.CREATE_SUCCESS));
    }
  } catch (err) {
    if (err.response?.status === 400)
      yield put(actions.setError(Message.ACTION_NOT_ALLOW));
    else yield put(actions.setError(Message.CREATE_FAIL));
  }
}

export function* extendOrder() {
  const data = yield select(selectData);
  if (empty(data)) {
    yield put(actions.setError(Message.DATA_INVALID));
    return;
  }
  const requestURL = path.orders.orders;
  const options = { method: 'post', body: JSON.stringify(data) };

  try {
    const order = yield call(request, requestURL, options);
    if (order) {
      yield put(actions.orderCreated(order));
      yield put(actions.setNotice(Message.EXTEND_SUCCESS));
    }
  } catch (err) {
    yield put(actions.setError(Message.EXTEND_FAIL));
  }
}

export function* getOrder() {
  const data = yield select(selectData);
  if (!data) {
    return;
  }
  const requestURL = `${path.orders.order}/${data.orderId}`;
  const options = { method: 'get' };

  try {
    const order = yield call(request, requestURL, options);
    if (order) {
      yield put(actions.orderGetted(order));
    }
  } catch (err) {
    yield put(actions.setError(Message.QUERY_FAIL));
  }
}

export function* queryContract() {
  const code = yield select(selectContractCode);
  const user = yield select(selectUser);
  const contract = yield select(selectContract);

  if (!code) {
    yield put(actions.setError(null));
    return;
  }
  const requestURL = `${path.orders.orders}?condition=customer_id__eq__${user.id},contract_code__eq__${code}`;
  const options = { method: 'get' };

  try {
    const res = yield call(request, requestURL, options);
    if (res.data?.length > 0) {
      yield put(actions.contractLoaded({ ...contract, current: res.data[0] }));
      // yield put(actions.setNotice('query contract success'));
    } else {
      yield put(actions.setError(Message.CONTRACT_NOT_EXISTS));
    }
  } catch (err) {
    yield put(actions.setError(Message.QUERY_FAIL));
  }
}
/**
 * Root saga manages watcher lifecycle
 */
export function* ordersSaga() {
  yield takeLatest(actions.loadOrders.type, getOrders);
  yield takeLatest(actions.loadContract.type, queryContract);
  yield takeLatest(actions.loadInstance.type, getInstance);
  yield takeLatest(actions.loadService.type, getService);
  yield takeLatest(actions.loadOs.type, getOs);
  yield takeLatest(actions.createOrder.type, createOrder);
  yield takeLatest(actions.updateOrder.type, updateOrder);
  yield takeLatest(actions.getOrder.type, getOrder);
  yield takeLatest(actions.deployOrder.type, deployOrder);
  yield takeLatest(actions.approveOrder.type, approveOrder);
  yield takeLatest(actions.extendOrder.type, extendOrder);
  yield takeLatest(actions.getRegions.type, getRegions);
}
