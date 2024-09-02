// src/store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import hotelReducer from './reducers/hotelReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  hotels: hotelReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;



git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Asiphile1/hotel03.git
git push -u origin main