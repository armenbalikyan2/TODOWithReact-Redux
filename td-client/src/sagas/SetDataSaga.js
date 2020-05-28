import { take, put, call, takeLatest } from 'redux-saga/effects';
import { getTasks, addTask } from '../api/TaskApi';
import { SET_DATA_LOADING, setDataFailure, setDataSuccess } from '../actions';
import { task } from '../components/addTask/AddingTaskPage';

function* SetDataSaga() {
  if (task !== undefined && task !== null) {
    const response = yield addTask(task);
    const data = response.data;
    yield put(setDataSuccess(data));
  }
}

export function* watchSetDataSaga() {
  yield takeLatest(SET_DATA_LOADING, SetDataSaga);
}
