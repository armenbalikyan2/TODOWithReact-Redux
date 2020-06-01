import {  put,  takeLatest } from 'redux-saga/effects';
import { deleteTask } from '../api/taskApi';
import {
  REMOVE_DATA_LOADING,
  removeDataSuccess,
} from '../actions';
import { taskId } from '../components/taskList/TaskListPage';

function* removeDataSaga() {
  if (taskId !== undefined && taskId !== null) {
    const response = yield deleteTask(taskId);
    const data = response.data;
    yield put(removeDataSuccess(data));
  }
}

export function* watchRemoveDataSaga() {
  yield takeLatest(REMOVE_DATA_LOADING, removeDataSaga);
}
