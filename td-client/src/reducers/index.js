import { combineReducers } from 'redux';
import { removeDataReducer } from './removeDataReducer';
import { getDataReducer } from './getDataReducer';
import { setDataReducer } from './setDataReducer';

export const rootReducer = combineReducers({
  tasks: getDataReducer,
  setTask: setDataReducer,
  removeTask: removeDataReducer,
});

export default rootReducer;
