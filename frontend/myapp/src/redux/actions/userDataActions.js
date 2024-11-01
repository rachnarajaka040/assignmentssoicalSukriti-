import axios from 'axios';

// Action Types
export const FETCH_USER_DATA_REQUEST = 'FETCH_USER_DATA_REQUEST';
export const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS';
export const FETCH_USER_DATA_FAILURE = 'FETCH_USER_DATA_FAILURE';

export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';

// Action Creators
export const fetchUserData = () => async (dispatch) => {
  dispatch({ type: FETCH_USER_DATA_REQUEST });
  try {
    const response = await axios.get('http://localhost:4000/api/rachna/character/usersdata');
    dispatch({ type: FETCH_USER_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_USER_DATA_FAILURE, payload: error.message });
  }
};

export const deleteUser = (userId) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:4000/api/rachna/character/${userId}`);
    dispatch({ type: DELETE_USER_SUCCESS, payload: userId });
  } catch (error) {
    console.error(error.message);
  }
};

export const updateUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.put(`http://localhost:4000/api/rachna/character/${userData._id}`, userData);
    dispatch({ type: UPDATE_USER_SUCCESS, payload: response.data });
  } catch (error) {
    console.error(error.message);
  }
};
