
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import HomePage from './components/pages/Home';
import Login from './components/pages/SignIn';
import Register from './components/pages/SignUp';
import AccommodationList from './components/AccomodationList';
import Booking from './components/pages/Booking';
import AdminPanel from './components/AdminPanel';
// import Payment from './components/Payment';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
        <Route path="/" element={<HomePage />} /> {/* Default landing page */}
        <Route path="/home" element={<HomePage />} />
          <Route path="/hotels" element={<AccommodationList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/book/:id" element={<Booking />} />
          <Route path="/admin" element={<AdminPanel />} />
        {/* <Route path="/payment" element={<Payment />} /> */}
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
