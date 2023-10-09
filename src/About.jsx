import "./App.css";
import React, { useEffect } from "react";
import AOS from "aos";

function About() {
  //data-aos
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>About Us</h2>
            <p>
              Our mission is to empower businesses of all sizes with AI-driven
              tools that enhance their decision-making capabilities. We believe
              that by leveraging advanced algorithms and predictive modelling,
              businesses can navigate complexities, seize opportunities, and
              stay ahead of the curve.
            </p>
          </div>

          <div className="row about-div abt gy-4" data-aos="fade-right">
            <div className="col-lg-6 abt-img ab-img1">
              {/* <img
                  src="assets/img/about.png"
                  className="img-fluid ab-img rounded-4 mb-4 moveArrow"
                  alt=""
                /> */}
              <div class="pyramid-loader">
                <div class="wrapper">
                  <span class="side side1"></span>
                  <span class="side side2"></span>
                  <span class="side side3"></span>
                  <span class="side side4"></span>
                  <span class="shadow"></span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content ps-0 ps-lg-5">
                <div class="card">
                  <div class="tools">
                    <div class="circle">
                      <span class="red box"></span>
                    </div>
                    <div class="circle">
                      <span class="yellow box"></span>
                    </div>
                    <div class="circle">
                      <span class="green box"></span>
                    </div>
                  </div>
                  <div class="card__content">
                    <p className="blik">
                      At StratusAi, we are driven by the vision of
                      revolutionising decision-making through the power of
                      AI&ML. As a leading innovator in the field, we specialise
                      in crafting solutions that enable businesses to transform
                      data into strategic insights
                      <span class="terminal_cursor"></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row about-div2 abt gy-4" data-aos="fade-left">
            <div className="col-lg-6">
              <div className="content ps-0 ps-lg-5">
                <div class="card">
                  <div class="tools">
                    <div class="circle">
                      <span class="red box"></span>
                    </div>
                    <div class="circle">
                      <span class="yellow box"></span>
                    </div>
                    <div class="circle">
                      <span class="green box"></span>
                    </div>
                  </div>
                  <div class="card__content">
                    <p>
                      Our cutting-edge AI/ML solutions offer businesses a
                      competitive edge by transforming raw data into actionable
                      insights. Through advanced algorithms and predictive
                      modelling, we enable companies to anticipate market
                      trends, identify opportunities, and mitigate risks with
                      unprecedented accuracy
                      <span class="terminal_cursor"></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 abt-img ab-img2">
              <div class="cube-loader">
                <div class="cube-top"></div>
                <div class="cube-wrapper">
                  <span style={{ "--i": 0 }} class="cube-span"></span>
                  <span style={{ "--i": 1 }} class="cube-span"></span>
                  <span style={{ "--i": 2 }} class="cube-span"></span>
                  <span style={{ "--i": 3 }} class="cube-span"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
