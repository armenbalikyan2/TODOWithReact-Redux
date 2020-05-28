export const SET_DATA_LOADING = "SET_DATA_LOADING";
export const SET_DATA_SUCCESS = "SET_DATA_SUCCESS";
export const SET_DATA_FAILURE = "SET_DATA_FAILURE";


export const setDataLoading = {
    type: SET_DATA_LOADING,
};

export const setDataSuccess = (data) => ({
    type: SET_DATA_SUCCESS,
    payload: data,
});

export const setDataFailure = {
    type: SET_DATA_FAILURE,
};