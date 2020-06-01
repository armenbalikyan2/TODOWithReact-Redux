import {
  SET_DATA_LOADING,
  SET_DATA_SUCCESS,
  SET_DATA_FAILURE,
} from '../actions';

const initialState = {
  settingData: false,
  taskData: [],
};

export function setDataReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATA_LOADING:
      return {
        ...state,
        settingData: true,
      };
    case SET_DATA_SUCCESS:
      return {
        ...state,
        settingData: false,
        taskData: action.payload,
      };
    case SET_DATA_FAILURE:
      return {
        ...state,
        settingData: false,
      };
    default:
      return state;
  }
}
