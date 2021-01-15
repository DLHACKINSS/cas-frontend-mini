import path from 'api/path';
import empty from 'is-empty';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import { Message } from './constants';
import { selectData } from './selectors';
import { actions } from './slice';

export function* signin() {
  const data = yield select(selectData);
  if (empty(data)) {
    yield put(actions.setError(Message.DATA_INVALID));
    return;
  }
  const requestURL = path.auth.login;
  const options = { method: 'post', body: JSON.stringify(data) };

  try {
    const user = yield call(request, requestURL, options);
    if (user) {
      yield put(actions.accountLoaded(user));
    }
  } catch (err) {
    if (err.response?.status === 401) {
      yield put(actions.setError(Message.PASSWORD_INVALID));
    } else if (err.response?.status === 404) {
      yield put(actions.setError(Message.USER_NOT_ACTIVE));
    } else {
      yield put(actions.setError(Message.SYSTEM_ERROR));
    }
  }
}

export function* signup() {
  const data = yield select(selectData);
  if (empty(data)) {
    yield put(actions.setError(Message.DATA_INVALID));
    return;
  }
  const requestURL = path.users.register;
  const options = { method: 'post', body: JSON.stringify(data) };

  try {
    const res = yield call(request, requestURL, options);
    if (res) {
      yield put(actions.signupLoaded(res));
    }
  } catch (err) {
    if (err.response?.status === 406) {
      yield put(actions.setError(Message.USER_ALREADY_EXISTS));
    } else {
      yield put(actions.setError(Message.SYSTEM_ERROR));
    }
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* authSaga() {
  yield takeLatest(actions.loadAccount.type, signin);
  yield takeLatest(actions.loadSignup.type, signup);
}
