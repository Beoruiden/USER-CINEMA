import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/header";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/footer";
import QuickBooking from "./components/QuickBooking/quickbooking";
import Showtimes from "./components/Showtime/Showtime";
import MovieDetail from "./pages/MovieDetail";
import Booking from "./pages/Booking";
import ServiceDetail from "./pages/ServiceDetail";
import EventRentalPage from "./pages/EventRentalPage";
import AboutUs from "./pages/AboutUs"

const App = () => {
    return (
      <Router>
        <div className="bg-[#0C1C36] min-h-screen text-white flex flex-col">
          {/* Header */}
          <Header />

          {/* Nội dung chính */}
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<><Banner /><QuickBooking /><Home /></>} />
              <Route path="/showtime" element={<Showtimes />} />
              <Route path="/movie/:id" element={<MovieDetail />} />
              <Route path="/booking/:id" element={<Booking />} />
              <Route path="/service/:service" element={<ServiceDetail />} />
              <Route path="/service-detail/:service" element={<ServiceDetail />} />
              <Route path="/event-rental" element={<EventRentalPage />} />
              <Route path="/about-us" element={<AboutUs />} />

            </Routes>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
    );
};

export default App;
