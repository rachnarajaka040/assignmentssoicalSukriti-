import {
    FETCH_USER_DATA_REQUEST,
    FETCH_USER_DATA_SUCCESS,
    FETCH_USER_DATA_FAILURE,
    DELETE_USER_SUCCESS,
    UPDATE_USER_SUCCESS,
  } from '../actions/userDataActions';
  
  const initialState = {
    users: [],
    loading: false,
    error: null,
  };
  
  const userDataReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USER_DATA_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_USER_DATA_SUCCESS:
        return { ...state, loading: false, users: action.payload };
      case FETCH_USER_DATA_FAILURE:
        return { ...state, loading: false, error: action.payload };
      case DELETE_USER_SUCCESS:
        return { ...state, users: state.users.filter((user) => user._id !== action.payload) };
      case UPDATE_USER_SUCCESS:
        return {
          ...state,
          users: state.users.map((user) => (user._id === action.payload._id ? action.payload : user)),
        };
      default:
        return state;
    }
  };
  
  export default userDataReducer;
  