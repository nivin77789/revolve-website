import "./App.css";
import React, { useEffect } from "react";
import AOS from "aos";

function Service() {
  //data-aos
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <section id="services" className="services sections-bg">
        <div className="container " data-aos="fade-up">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>
              At StratusAi, we are committed to being your strategic partner on
              the journey to data-driven success. We collaborate closely with
              you to understand your needs and tailor solutions that empower
              your business to make confident decisions.
            </p>
          </div>

          <div className="row gy-4" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-4 col-md-6 ">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-activity"></i>
                </div>
                <h3>PoC Development:</h3>
                <p>
                  We develop working prototypes to showcase AI's potential
                  impact, helping businesses evaluate feasibility & make
                  informed decisions about scaling.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 ">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-broadcast"></i>
                </div>
                <h3> AI Ethics and Bias Mitigation</h3>
                <p>
                  We ensure fair and responsible AI systems by identifying and
                  rectifying biases, enhancing trust among users and
                  stakeholders.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-easel"></i>
                </div>
                <h3> Supply Chain Optimisation</h3>
                <p>
                  We streamline supply chain management using AI to forecast
                  demand, optimise inventory, and improve logistics for cost
                  reduction and efficiency.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-bounding-box-circles"></i>
                </div>
                <h3>AI-Driven Cybersecurity</h3>
                <p>
                  We employ AI algorithms for real-time cyber threat detection
                  and prevention, safeguarding digital assets and sensitive data
                  from breaches.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-calendar4-week"></i>
                </div>
                <h3>Predictive Maintenance</h3>
                <p>
                  We utilise AI to predict equipment failures, optimising
                  maintenance schedules, minimising downtime, and reducing
                  maintenance costs.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-chat-square-text"></i>
                </div>
                <h3>Data Labelling and Annotation</h3>
                <p>
                  We provide accurate data labelling for machine learning
                  models, ensuring effective learning and decision-making across
                  various AI applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;
