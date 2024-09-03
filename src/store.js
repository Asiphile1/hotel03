import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Named import because it doesn't have a default export
// import thunk from 'redux-thunk'; or I can import it directly like this
import authReducer from './reducers/authReducer';
import hotelReducer from './reducers/hotelReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  hotels: hotelReducer,
});


// const store = createStore(rootReducer);

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
