import "./App.css";
import React, { useEffect } from "react";
import AOS from "aos";
import TrackVisibility from "react-on-screen";
// import Spline from "@splinetool/react-spline";

function Landing() {
  //data-aos
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <section id="hero" className="hero">
        <div className="container position-relative">
          <div className="row land gy-5" data-aos="fade-in">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <h2>
                      Welcome to <span className="text-grad">Stratus</span>
                    </h2>
                    <h1>
                      <p>
                        We Speak{" "}

            </div>
          </div>
          <div className="icon-boxes position-relative">
            <div className="container position-relative">
              <div className="row gy-4 mt-5">
                <div
                  className="col-xl-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="icon-box">
                    <div className="icon">
                      <i className="bi bi-easel"></i>
                    </div>
                    <h4 className="title">
                      <a href="./" className="stretched-link">
                        Expertise
                      </a>
                    </h4>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="icon-box">
                    <div className="icon">
                      <i className="bi bi-bounding-box-circles"></i>
                    </div>
                    <h4 className="title">
                      <a href="./" className="stretched-link">
                        Custom Solutions
                      </a>
                    </h4>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="icon-box">
                    <div className="icon">
                      <i className="bi bi-broadcast"></i>
                    </div>
                    <h4 className="title">
                      <a href="./" className="stretched-link">
                        Results-Driven
                      </a>
                    </h4>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <div className="icon-box">
                    <div className="icon">
                      <i className="bi bi-command"></i>
                    </div>
                    <h4 className="title">
                      <a href="./" className="stretched-link">
                        Innovation
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
