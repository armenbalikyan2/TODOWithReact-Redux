import {
  REMOVE_DATA_SUCCESS,
  REMOVE_DATA_FAILURE,
  REMOVE_DATA_LOADING,
} from '../actions';

const initialState = {
  removingData: false,
  id: [],
};

export function removeDataReducer(state = initialState, action) {
  switch (action.type) {
    case REMOVE_DATA_LOADING:
      return {
        ...state,
        removingData: true,
      };
    case REMOVE_DATA_SUCCESS:
      return {
        ...state,
        removingData: false,
        id: action.payload,
      };
    case REMOVE_DATA_FAILURE:
      return {
        ...state,
        removingData: false,
      };
    default:
      return state;
  }
}
