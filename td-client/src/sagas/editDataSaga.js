import { take, put, call, takeLatest } from 'redux-saga/effects';
import {
  EDIT_DATA_LOADING,
  editDataFailure,
  editDataSuccess,
} from '../actions/editDataActions';
import { editTask } from '../api/taskApi';

function* editDataSaga() {
  const response = yield call(editTask);
  const data = response.data;
  
  if (response.status !== 200) {
    yield take(editDataFailure);
  }

  yield put(editDataSuccess(data));
}

export function* watcheditDataSaga() {
  yield takeLatest(EDIT_DATA_LOADING, editDataSaga);
}
