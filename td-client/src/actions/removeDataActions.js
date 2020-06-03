export const REMOVE_DATA_LOADING = 'REMOVE_DATA_LOADING';
export const REMOVE_DATA_SUCCESS = 'REMOVE_DATA_SUCCESS';
export const REMOVE_DATA_FAILURE = 'REMOVE_DATA_FAILURE';

export const removeDataLoading = (payload) => ({
  type: REMOVE_DATA_LOADING,
  payload,
});

export const removeDataSuccess = (id) => ({
  type: REMOVE_DATA_SUCCESS,
  payload: id,
});

export const removeDataFailure = {
  type: REMOVE_DATA_FAILURE,
};
