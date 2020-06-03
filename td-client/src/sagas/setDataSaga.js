import { put, takeLatest, take } from 'redux-saga/effects';
import { addTask } from '../api/taskApi';
import { SET_DATA_LOADING, setDataSuccess, setDataFailure } from '../actions';

function* setDataSaga(task) {
  const response = yield addTask(task.payload);
  const data = response.data;

  if (response.status !== 201) {
    yield take(setDataFailure);
  }

  yield put(setDataSuccess(data));
}

export function* watchSetDataSaga() {
  yield takeLatest(SET_DATA_LOADING, setDataSaga);
}
