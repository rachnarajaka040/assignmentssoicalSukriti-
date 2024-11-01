import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
  } from '../actions/authActions';
  
  const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || null,
    loading: false,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case SIGNUP_REQUEST:
      case LOGIN_REQUEST:
        return { ...state, loading: true, error: null };
      case SIGNUP_SUCCESS:
        return { ...state, loading: false, user: action.payload };
      case LOGIN_SUCCESS:
        return { ...state, loading: false, user: action.payload.user, token: action.payload.token };
      case SIGNUP_FAILURE:
      case LOGIN_FAILURE:
        return { ...state, loading: false, error: action.payload };
      case LOGOUT:
        return { ...state, user: null, token: null };
      default:
        return state;
    }
  };
  
  export default authReducer;
  