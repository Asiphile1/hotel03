import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Named import
import authReducer from './reducers/authReducer';
import hotelReducer from './reducers/hotelReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  hotels: hotelReducer,
});


// const store = createStore(rootReducer);

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;