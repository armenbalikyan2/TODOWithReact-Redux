export const EDIT_DATA_LOADING = 'EDIT_DATA_LOADING';
export const EDIT_DATA_SUCCESS = 'EDIT_DATA_SUCCESS';
export const EDIT_DATA_FAILURE = 'EDIT_DATA_FAILURE';

export const editDataLoading = (payload) => ({
  type: EDIT_DATA_LOADING,
  payload,
});

export const editDataSuccess = (data) => ({
  type: EDIT_DATA_SUCCESS,
  payload: data,
});

export const editDataFailure = {
  type: EDIT_DATA_FAILURE,
};
