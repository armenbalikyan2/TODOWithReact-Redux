import { take, put, call, takeLatest } from 'redux-saga/effects';
import { deleteTask, getTasks } from '../api/TaskApi';
import {
  REMOVE_DATA_LOADING,
  removeDataSuccess,
  removeDataFailure,
} from '../actions';
import { taskId } from '../components/taskList/TaskListPage';

function* RemoveDataSaga() {
  if (taskId !== undefined && taskId !== null) {
    const response = yield deleteTask(taskId);
    const data = response.data;
    yield put(removeDataSuccess(data));
  }
}

export function* watchRemoveDataSaga() {
  yield takeLatest(REMOVE_DATA_LOADING, RemoveDataSaga);
}
