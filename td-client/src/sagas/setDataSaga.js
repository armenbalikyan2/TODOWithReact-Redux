import { put, takeLatest } from 'redux-saga/effects';
import { addTask } from '../api/taskApi';
import { SET_DATA_LOADING, setDataSuccess } from '../actions';
import { task } from '../components/addTask/AddingTaskPage';

function* setDataSaga() {
  if (task !== undefined && task !== null) {
    const response = yield addTask(task);
    const data = response.data;
    yield put(setDataSuccess(data));
  }
}

export function* watchSetDataSaga() {
  yield takeLatest(SET_DATA_LOADING, setDataSaga);
}
