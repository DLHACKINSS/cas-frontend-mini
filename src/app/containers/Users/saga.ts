import path from 'api/path';
import empty from 'is-empty';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import { Message } from './constants';
import { selectData, selectPagination, selectQuery } from './selectors';
import { actions } from './slice';

export function* queryUser() {
  const query = yield select(selectQuery);
  if (!query) {
    yield put(actions.setError(null));
    yield put(actions.setMode('create'));
    return;
  }
  const requestURL = `${path.users.user}?user_name=${query}`;
  const options = { method: 'get' };

  try {
    const res = yield call(request, requestURL, options);
    if (res) {
      const profile = { ...res.profile };
      delete profile.id;
      const user = { ...res, ...profile };
      delete user.profile;

      yield put(actions.userQueried(user));
    }
  } catch (err) {
    if (err.response?.status === 400) {
      yield put(actions.setError(Message.USER_NOT_FOUND));
    } else if (err.response?.status === 403) {
      yield put(actions.setError(Message.ACTION_NOT_ALLOW));
    } else {
      yield put(actions.setError(Message.QUERY_FAIL));
    }
  } finally {
    yield put(actions.setError(null));
    yield put(actions.setNotice(null));
  }
}

export function* getUsers() {
  const pagination = yield select(selectPagination);
  const requestURL =
    path.users.users +
    `?page=${pagination.current}&page_size=${pagination.pageSize}`;
  const options = { method: 'get' };

  try {
    const users = yield call(request, requestURL, options);
    if (users) {
      yield put(actions.usersLoaded(users.data));
      yield put(
        actions.setPagination({
          ...pagination,
          total:
            users.next_page &&
            pagination.total < users.next_page * pagination.pageSize
              ? users.next_page * pagination.pageSize
              : pagination.total,
        }),
      );
    }
  } catch (err) {
    yield put(actions.setError(null));
  }
}
export function* getUser() {
  const query = yield select(selectQuery);
  if (!query) {
    return;
  }

  const requestURL = `${path.users.user}/${query}`;
  const options = { method: 'get' };
  try {
    const res = yield call(request, requestURL, options);
    if (res) {
      const profile = { ...res.profile };
      delete profile.id;
      const user = { ...res, ...profile };
      delete user.profile;

      yield put(actions.userQueried(user));
    }
  } catch (err) {
    yield put(actions.setError(null));
  }
}

export function* createUser() {
  const data = yield select(selectData);
  if (empty(data)) {
    yield put(actions.setError(Message.DATA_INVALID));
    return;
  }
  const requestURL = path.users.users;
  const options = { method: 'post', body: JSON.stringify(data) };

  try {
    const res = yield call(request, requestURL, options);
    if (res) {
      yield put(actions.userCreated(res));
      yield put(actions.setMode('update'));
      yield put(actions.setNotice(Message.CREATE_SUCCESS));
    }
  } catch (err) {
    if (err.response?.status === 406) {
      yield put(actions.setError(Message.USER_ALREADY_EXISTS));
    } else {
      yield put(actions.setError(Message.SYSTEM_ERROR));
    }
  }
}
export function* updateUser() {
  const data = yield select(selectData);
  const requestURL = `${path.users.user}/${data.userId}`;
  const options = { method: 'put', body: JSON.stringify(data.data) };
  try {
    const res = yield call(request, requestURL, options);
    if (res) {
      const profile = { ...res.profile };
      delete profile.id;
      const user = { ...res, ...profile };
      delete user.profile;

      yield put(actions.userLoaded(user));
      yield put(actions.setNotice(Message.UPDATE_SUCCESS));
    }
  } catch (err) {
    // yield put(actions.loadNotice(err.response.statusText));
    if (err.response.status === 406)
      yield put(actions.setError(Message.PASSWORD_INVALID));
    if (err.response.status === 403)
      yield put(actions.setError(Message.ACTION_NOT_ALLOW));
    else yield put(actions.setError(Message.SYSTEM_ERROR));
  } finally {
    yield put(actions.setNotice(null));
    yield put(actions.setError(null));
  }
}

/**
 * Root saga manages watcher lifecycle
 */

export function* usersSaga() {
  yield takeLatest(actions.createUser.type, createUser);
  yield takeLatest(actions.queryUser.type, queryUser);
  yield takeLatest(actions.loadUsers.type, getUsers);
  yield takeLatest(actions.updateUser.type, updateUser);
  yield takeLatest(actions.loadUser.type, getUser);
}
