import React from "react";
import AboutUsPage from "./AboutUsPage";
import LandingPage from "./LandingPage";
import ContactUsPage from "./ContactUsPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <nav>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
    </Router>
  );
}
