import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import "./css/style.css";
import "./css/bootstrap.min.css";
import "./css/animate.css";
import "./css/animate.min.css";
import "./App.css";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import HomePage from "../src/components/home/Home";
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

// adding a condition for the two pages
const Layout = ({ children }) => {
  const location = useLocation();

  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      
      {!isAuthPage && <Header />}
      {children}
      {!isAuthPage && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
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
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;











// this (below) was showing an error because the useLocation was being called outside of the router's content 



// import React from "react";
// import { BrowserRouter as Router, Route, Routes, useLocation  } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./store";


// import "./css/style.css";
// import "./css/bootstrap.min.css";
// import "./css/animate.css";
// import "./css/animate.min.css";
// import "./App.css";

// import Header from "./components/common/Header";
// import Footer from "./components/common/Footer";
// import HomePage from "../src/components/home/Home";
// import Login from "./pages/SignIn";
// import Register from "./pages/SignUp";
// import AccommodationList from "./components/home/AccomodationList";
// import Booking from "./pages/Booking";
// import AdminPanel from "./components/home/AdminPanel";
// import AboutUs from "./pages/AboutUs";
// import Contact from "./pages/ContactPage";
// import PageNotFound from "./pages/PageNotFound";
// import Room from "./pages/RoomPage";
// import Services from "./pages/ServicesPage";
// import Team from "./pages/TeamPage";
// import Testimonial from "./pages/TestimonialPage";

// const App = () => {
//   const location = useLocation();
  
//   // this will check to see if the current page is ogin or register page, if it is one of those pages, the header and footer will not be shown on those two pages.
//   const isAuthPage = location.pathname === "/login" || location.pathname === "/register";
  
  
//   return (
//     <Provider store={store}>
//       <Router>
        
//         {!isAuthPage && <Header />}
//         <Routes>
//           <Route path="/" element={<HomePage />} /> 
//           <Route path="/home" element={<HomePage />} />
          
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/hotels" element={<AccommodationList />} />
//           <Route path="/book/:id" element={<Booking />} />
//           <Route path="/admin" element={<AdminPanel />} />

//           <Route path="/team" element={<Team />} />
//           <Route path="/testimonial" element={<Testimonial />} />
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/rooms" element={<Room />} />
//           <Route path="/services" element={<Services />} />

//           <Route path="/*" element={<PageNotFound />} />
//         </Routes>
//         {!isAuthPage && <Footer />}
//       </Router>
//     </Provider>
//   );
// };

// export default App;
















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
