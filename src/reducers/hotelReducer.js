// src/reducers/hotelReducer.js
const initialState = {
    hotels: [],
    error: null,
  };
  
  export default function hotelReducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_HOTELS_SUCCESS':
        return { ...state, hotels: action.payload };
      case 'ADD_HOTEL_SUCCESS':
        return { ...state, hotels: [...state.hotels, action.payload] };
      case 'UPDATE_HOTEL_SUCCESS':
        return {
          ...state,
          hotels: state.hotels.map(hotel => hotel.id === action.payload.id ? action.payload : hotel),
        };
      case 'DELETE_HOTEL_SUCCESS':
        return { ...state, hotels: state.hotels.filter(hotel => hotel.id !== action.payload) };
      case 'FETCH_HOTELS_ERROR':
      case 'ADD_HOTEL_ERROR':
      case 'UPDATE_HOTEL_ERROR':
      case 'DELETE_HOTEL_ERROR':
        return { ...state, error: action.error };
      default:
        return state;
    }
  }
  