import "./App.css";
import React, { useEffect } from "react";
import AOS from "aos";
import TrackVisibility from "react-on-screen";
import Marquee from "react-fast-marquee";
import Spline from "@splinetool/react-spline";
import { Contact } from "./components/contact";

function App() {
  //data-aos
  useEffect(() => {
    AOS.init();
  }, []);

  const arr = [1, 2, 3, 4, 5, 6, 7];
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
      </header>{" "}
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
                        We Speak <span>Fluent</span> Algorithm
                        {/* Revolutionizing <span className="spin"></span> */}
                      </p>
                    </h1>
                  </div>
                )}
              </TrackVisibility>
              <div className="d-flex home-btn justify-content-center justify-content-lg-start">
                <a href="#about" className="btn-get-started">
                  Get Started
                </a>
                <a
                  href="#contact"
                  className="glightbox btn-watch-video d-flex align-items-center"
                >
                  <span>Let's Talk</span>
                </a>
                {/* <a
                  href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                  className="glightbox btn-watch-video d-flex align-items-center"
                >
                  <i className="bi bi-play-circle"></i>
                  <span>Watch Video</span>
                </a> */}
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 baner-im">
              <Spline scene="https://prod.spline.design/NzTYTHTNCAxSOB9w/scene.splinecode" />
              {/* <img
                src="assets/img/hero.png"
                className="img-fluid hero-img moveArrow"
                alt=""
                data-aos="zoom-out"
                data-aos-delay="100"
              /> */}
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
      <main id="main">
        <center>
          <div className="marq">
            <Marquee className="marq-s">
              {arr.map((ele) => (
                <img src={`assets/img/${ele}.png`} alt="" />
              ))}
            </Marquee>
          </div>
        </center>

        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>About Us</h2>
              <p>
                Our mission is to empower businesses of all sizes with AI-driven
                tools that enhance their decision-making capabilities. We
                believe that by leveraging advanced algorithms and predictive
                modelling, businesses can navigate complexities, seize
                opportunities, and stay ahead of the curve.
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
                        AI&ML. As a leading innovator in the field, we
                        specialise in crafting solutions that enable businesses
                        to transform data into strategic insights
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
                        competitive edge by transforming raw data into
                        actionable insights. Through advanced algorithms and
                        predictive modelling, we enable companies to anticipate
                        market trends, identify opportunities, and mitigate
                        risks with unprecedented accuracy
                        <span class="terminal_cursor"></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 abt-img ab-img2">
                <img
                  src="assets/img/about.png"
                  className="img-fluid ab-img rounded-4 mb-4 moveArrow"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services sections-bg">
          <div className="container " data-aos="fade-up">
            <div className="section-header">
              <h2>Our Services</h2>
              <p>
                At StratusAi, we are committed to being your strategic partner
                on the journey to data-driven success. We collaborate closely
                with you to understand your needs and tailor solutions that
                empower your business to make confident decisions.
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
                    and prevention, safeguarding digital assets and sensitive
                    data from breaches.
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
                    models, ensuring effective learning and decision-making
                    across various AI applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="closeup">
          <h2>
            We Speak <span className="text-col">Fluent Algorithm</span>
          </h2>
        </div>
        {/* <section id="call-to-action" className="call-to-action">
          <div className="container text-center" data-aos="zoom-out">
            <a
              href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
              className="glightbox play-btn"
            >
              .
            </a>
            <h3>Call To Action</h3>
            <p>
              {" "}
              Join us in embracing the future of decision-making. Explore the
              potential of AI/ML with name.
            </p>
            <a className="cta-btn" href="./">
              Call To Action
            </a>
          </div>
        </section> */}

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
                      <p>
                        {" "}
                        Patros vinaygar north avenue, cbm compund,
                        Visakhapatnam, Andhra Pradesh, 530003
                      </p>
                    </div>
                  </div>

                  <div className="info-item d-flex">
                    <i className="bi bi-envelope flex-shrink-0"></i>
                    <div>
                      <h4>Email:</h4>
                      <p>info@example.com</p>
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
      </main>
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
                  <a href="./">Web Design</a>
                </li>
                <li>
                  <a href="./">Web Development</a>
                </li>
                <li>
                  <a href="./">Video Editing</a>
                </li>
                <li>
                  <a href="./">ML Solution</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>
                {" "}
                patros vinaygar north avenue, cbm compund, Visakhapatnam, Andhra
                Pradesh, 530003
                <p>
                  <strong>Phone:</strong> +91 9014279195
                </p>
                <p>
                  {" "}
                  <strong>Email:</strong> admin@stratusai.in
                </p>
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
  );
}

export default App;
