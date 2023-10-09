import "./App.css";
import React, { useEffect } from "react";
import AOS from "aos";

function Nav() {
  //data-aos
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <div className="tab-container">
        <nav className="menu">
          <a href="#hero" className="menu-item">
            <i class="uil uil-estate"></i>
            {/* <span className="menu-item-label">Home</span> */}
          </a>
          <a href="#about" className="menu-item">
            <i class="uil uil-users-alt"></i>
            {/* <span className="menu-item-label">About</span> */}
          </a>
          <a href="#services" className="menu-item">
            <i class="uil uil-servers"></i>
            {/* <span className="menu-item-label">Services</span> */}
          </a>
          <a href="#contact" className="menu-item">
            <i class="uil uil-chat"></i>
            {/* <span className="menu-item-label">Contact us</span> */}
          </a>
        </nav>
      </div>
      <header id="header" className="header d-flex align-items-center">
        <div className="container-fluid land-text container-xl d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <img src="assets/img/logo.png" alt="" />
            <h1>
              Stratus<span>.</span>
            </h1>
          </a>
          <nav id="navbar" className="navbar">
            <ul className="App-header">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Nav;
