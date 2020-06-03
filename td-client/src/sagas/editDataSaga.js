import { put, takeLatest, take } from 'redux-saga/effects';
import { editTask } from '../api/taskApi';
import {
  EDIT_DATA_LOADING,
  editDataSuccess,
  editDataFailure,
} from '../actions';

function* editDataSaga(task) {
  const response = yield editTask(task.payload[0], task.payload[1]);
  const data = response.data;

  if (response.status !== 200) {
    yield take(editDataFailure);
  }

  yield put(editDataSuccess(data));
}

export function* watchEditDataSaga() {
  yield takeLatest(EDIT_DATA_LOADING, editDataSaga);
}
