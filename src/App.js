import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";


import "./css/style.css";
import "./css/bootstrap.min.css";
import "./css/animate.css";
import "./css/animate.min.css";
import "./App.css";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import HomePage from "./pages/Home";
import Login from "./pages/SignIn";
import Register from "./pages/SignUp";
import AccommodationList from "./components/home/AccomodationList";
import Booking from "./pages/Booking";
import AdminPanel from "./components/home/AdminPanel";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/ContactPage";
import PageNotFound from "./pages/PageNotFound";
import Room from "./pages/RoomPage";
import Services from "./pages/ServicesPage";
import Team from "./pages/TeamPage";
import Testimonial from "./pages/TestimonialPage";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          
          <Route path="/" element={<HomePage />} /> 
          <Route path="/home" element={<HomePage />} />

         
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/hotels" element={<AccommodationList />} />
          <Route path="/book/:id" element={<Booking />} />
          <Route path="/admin" element={<AdminPanel />} />

         
          <Route path="/team" element={<Team />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rooms" element={<Room />} />
          <Route path="/services" element={<Services />} />
          
          
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
















// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./store";
// import HomePage from "./pages/Home";
// import Login from "./pages/SignIn";
// import Register from "./pages/SignUp";
// import AccommodationList from "./components/home/AccomodationList";
// import Booking from "./pages/Booking";
// import AdminPanel from "./components/home/AdminPanel";
// // import Payment from './components/Payment';

// const App = () => {
//   return (
//     <Provider store={store}>
//       <Router>
//         <Routes>
//           <Route path="/" element={<HomePage />} /> {/* Default landing page */}
//           <Route path="/home" element={<HomePage />} />
//           <Route path="/hotels" element={<AccommodationList />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/book/:id" element={<Booking />} />
//           <Route path="/admin" element={<AdminPanel />} />
//           {/* <Route path="/payment" element={<Payment />} /> */}
//         </Routes>
//       </Router>
//     </Provider>
//   );
// };

// export default App;
