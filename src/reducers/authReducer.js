// src/reducers/authReducer.js
const initialState = {
    user: null,
    error: null,
  };
  
  export default function authReducer(state = initialState, action) {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
      case 'REGISTER_SUCCESS':
        return { ...state, user: action.payload, error: null };
      case 'LOGIN_ERROR':
      case 'REGISTER_ERROR':
      case 'LOGOUT_ERROR':
        return { ...state, error: action.error };
      case 'LOGOUT_SUCCESS':
        return { ...state, user: null };
      default:
        return state;
    }
  }
  