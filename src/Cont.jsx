import "./App.css";
import React, { useEffect } from "react";
import AOS from "aos";
import { Contact } from "./Contact";

function Cont() {
  //data-aos
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Contact</h2>
            <p>
              Ready to transform your decision-making? Get in touch with us
              today to explore how our AI/ML solutions can revolutionise your
              business strate
            </p>
          </div>

          <div className="row gx-lg-0 gy-4">
            <div className="col-lg-4">
              <div className="info-container d-flex flex-column align-items-center justify-content-center">
                <div className="info-item d-flex">
                  <i className="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h4>Location:</h4>
                    <p>Bengaluru</p>
                  </div>
                </div>

                <div className="info-item d-flex">
                  <i className="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h4>Email:</h4>
                    <p>contact@stratusai.in</p>
                  </div>
                </div>

                <div className="info-item d-flex">
                  <i className="bi bi-phone flex-shrink-0"></i>
                  <div>
                    <h4>Call:</h4>
                    <p>+91-9014279195 </p>
                  </div>
                </div>
                <div className="info-item d-flex">
                  <i className="bi bi-clock flex-shrink-0"></i>
                  <div>
                    <h4>Open Hours:</h4>
                    <p>Mon-Sat: 8AM - 6PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <Contact />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cont;
