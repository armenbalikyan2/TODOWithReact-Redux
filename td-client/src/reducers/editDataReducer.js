import {
    EDIT_DATA_LOADING,
    EDIT_DATA_SUCCESS,
    EDIT_DATA_FAILURE,
  } from '../actions';
  
  const initialState = {
    edittingTask: false,
    taskData: [],
  };
  
  export function editDataReducer(state = initialState, action) {
    switch (action.type) {
      case EDIT_DATA_LOADING:
        return {
          ...state,
          edittingTask: true,
        };
      case EDIT_DATA_SUCCESS:
        return {
          ...state,
          edittingTask: false,
          taskData: action.payload,
        };
      case EDIT_DATA_FAILURE:
        return {
          ...state,
          edittingTask: false,
        };
      default:
        return state;
    }
  }
  