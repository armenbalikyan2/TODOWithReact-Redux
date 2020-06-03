import { take, put, call, takeLatest } from 'redux-saga/effects';
import {
  GET_DATA_LOADING,
  getDataFailure,
  getDataSuccess,
} from '../actions/getDataActions';
import { getTasks } from '../api/taskApi';

function* getDataSaga() {
  const response = yield call(getTasks);
  const data = response.data;

  if (response.status !== 200) {
    yield take(getDataFailure);
  }

  yield put(getDataSuccess(data));
}

export function* watchGetDataSaga() {
  yield takeLatest(GET_DATA_LOADING, getDataSaga);
}
