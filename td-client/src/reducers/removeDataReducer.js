import {
  REMOVE_DATA_SUCCESS,
  REMOVE_DATA_FAILURE,
  REMOVE_DATA_LOADING,
} from '../actions';

const initialState = {
  removingTask: false,
  id: [],
};

export function removeDataReducer(state = initialState, action) {
  switch (action.type) {
    case REMOVE_DATA_LOADING:
      return {
        ...state,
        removingTask: true,
      };
    case REMOVE_DATA_SUCCESS:
      return {
        ...state,
        removingTask: false,
        id: action.payload,
      };
    case REMOVE_DATA_FAILURE:
      return {
        ...state,
        removingTask: false,
      };
    default:
      return state;
  }
}
