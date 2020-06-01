import {
  GET_DATA_LOADING,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
} from '../actions';

const initialState = {
  gettingTask: false,
  taskData: [],
};

export function getDataReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA_LOADING:
      return {
        ...state,
        gettingUser: true,
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        gettingUser: false,
        taskData: action.payload,
      };
    case GET_DATA_FAILURE:
      return {
        ...state,
        gettingUser: false,
      };
    default:
      return state;
  }
}
