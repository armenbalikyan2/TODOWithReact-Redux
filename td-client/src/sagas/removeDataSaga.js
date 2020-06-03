import { put, takeLatest, take } from 'redux-saga/effects';
import { deleteTask } from '../api/taskApi';
import {
  REMOVE_DATA_LOADING,
  removeDataSuccess,
  removeDataFailure,
} from '../actions';

function* removeDataSaga(taskid) {
  const response = yield deleteTask(taskid.payload);
  const data = response.data;

  if (response.status !== 200) {
    yield take(removeDataFailure);
  }

  yield put(removeDataSuccess(data));
}

export function* watchRemoveDataSaga() {
  yield takeLatest(REMOVE_DATA_LOADING, removeDataSaga);
}
