import {
  SET_DATA_LOADING,
  SET_DATA_SUCCESS,
  SET_DATA_FAILURE,
} from '../actions';

const initialState = {
  settingTask: false,
  taskData: [],
};

export function setDataReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATA_LOADING:
      return {
        ...state,
        settingTask: true,
      };
    case SET_DATA_SUCCESS:
      return {
        ...state,
        settingTask: false,
        taskData: action.payload,
      };
    case SET_DATA_FAILURE:
      return {
        ...state,
        settingTask: false,
      };
    default:
      return state;
  }
}
