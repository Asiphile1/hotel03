
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import HomePage from './pages/Home';
import Login from './pages/SignIn';
import Register from './pages/SignUp';
import AccommodationList from './components/common/HOME/AccomodationList';
import Booking from './pages/Booking';
import AdminPanel from './components/common/HOME/AdminPanel';
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
