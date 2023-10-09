import "./App.css";
import React, { useEffect } from "react";
import AOS from "aos";

function Footer() {
  //data-aos
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <footer id="footer" className="footer">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <a href="index.html" className="logo d-flex align-items-center">
                <span>Stratus</span>
              </a>
              <p>We Speak Fluent Algorithm</p>
              <div className="social-links d-flex mt-4">
                <a href="./" className="twitter">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="./" className="facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="./" className="instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="./" className="linkedin">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="./">Home</a>
                </li>
                <li>
                  <a href="./">About us</a>
                </li>
                <li>
                  <a href="./">Services</a>
                </li>

                <li>
                  <a href="./">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <a href="./">AI Ethics and Bias Mitigation</a>
                </li>
                <li>
                  <a href="./">Supply Chain Optimisation:</a>
                </li>
                <li>
                  <a href="./">AI-Driven Cybersecurity</a>
                </li>
                <li>
                  <a href="./">Predictive Maintenance</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>
                <strong>Location:</strong> Bengaluru
              </p>
              <p>
                <strong>Phone:</strong> +91 9014279195
              </p>
              <p>
                <strong>Email:</strong> contact@stratusai.in
              </p>
            </div>
          </div>
        </div>

        <div className="container mt-4">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Stratus</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
