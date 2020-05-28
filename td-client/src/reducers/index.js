import { combineReducers } from 'redux';
import { RemoveDataReducer } from './RemoveDataReducer';
import { GetDataReducer } from './GetDataReducer';
import { SetDataReducer } from './SetDataReducer';

export const rootReducer = combineReducers({
  tasks: GetDataReducer,
  setTask: SetDataReducer,
  removeTask: RemoveDataReducer,
});

export default rootReducer;
