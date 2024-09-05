
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import AccommodationList from './components/AccomodationList';
import Booking from './components/pages/Booking';
import AdminPanel from './components/AdminPanel';
// import Payment from './components/Payment';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/hotels" element={<AccommodationList />} />
          <Route path="/book/:id" element={<Booking />} />
          <Route path="/admin" element={<AdminPanel />} />
          {/* <Route path="/payment" element={<Payment />} /> */}
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
