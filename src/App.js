import "./App.css";
import React, { useEffect } from "react";
import AOS from "aos";
import Service from "./Service";
import About from "./About";
import Cont from "./Cont";
import Footer from "./Footer";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <div className="App">
        <div className="tab-container">
          <nav className="menu">
            <a href="#hero" className="menu-item">
              <Link to="/">
                {" "}
                <i class="uil as uil-estate"></i>
              </Link>
              {/* <span className="menu-item-label">Home</span> */}
            </a>
            <a href="#about" className="menu-item">
              <Link to="/about">
                <i class="uil as uil-users-alt"></i>
              </Link>
              {/* <span className="menu-item-label">About</span> */}
            </a>
            <a href="#services" className="menu-item">
              <Link to="/service">
                {" "}
                <i class="uil as uil-servers"></i>
              </Link>
              {/* <span className="menu-item-label">Services</span> */}
            </a>
            <a href="#contact" className="menu-item">
              <Link to="/contact">
                {" "}
                <i class="uil as uil-chat"></i>{" "}
              </Link>
              {/* <span className="menu-item-label">Contact us</span> */}
            </a>
          </nav>
        </div>
        <header id="header" className="header d-flex align-items-center">
          <div className="container-fluid land-text container-xl d-flex align-items-center justify-content-between">
            <a href="/" className="logo d-flex align-items-center">
              <Link to="/">
                {" "}
                <img src="assets/img/logo.png" alt="" />
                <h1>
                  Stratus<span>.</span>
                </h1>
              </Link>
            </a>

            <nav id="navbar" className="navbar">
              <ul className="App-header">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/service">Service</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/service" element={<Service />}></Route>
          <Route exact path="/contact" element={<Cont />}></Route>
        </Routes>
        <Footer />
        <a
          href="./"
          class="scroll-top d-flex align-items-center justify-content-center"
        >
          <i class="bi bi-arrow-up-short"></i>
        </a>
        <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/vendor/aos/aos.js"></script>
        <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
        <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
        <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
        <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
        <script src="assets/vendor/php-email-form/validate.js"></script>
        <script src="assets/js/main.js"></script>
      </div>
    </Router>
  );
}

export default App;
