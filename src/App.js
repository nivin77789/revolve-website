import "./App.css";
import React from "react";

function App() {
  return (
    <div classNameName="App">
      {/* <section id="topbar" className="topbar d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope d-flex align-items-center">
              <a href="mailto:contact@example.com">contact@example.com</a>
            </i>
            <i className="bi bi-phone d-flex align-items-center ms-4">
              <span>+1 5589 55488 55</span>
            </i>
          </div>
          <div className="social-links d-none d-md-flex align-items-center">
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
      </section> */}

      <header id="header" className="header d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <img src="assets/img/logo.png" alt="" />
            <h1>
              Revolve<span>.</span>
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
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        </div>
      </header>
      <section id="hero" className="hero">
        <div className="container position-relative">
          {/* 
        <div className="row gy-5" data-aos="fade-in"> */}
          <div className="row gy-5">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
              <h2>
                Welcome to <span>Revolve</span>
              </h2>
              <p> Enhancing Business Decision-Making with AI/ML Solutions</p>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <a href="#about" className="btn-get-started">
                  Get Started
                </a>
                <a
                  href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                  className="glightbox btn-watch-video d-flex align-items-center"
                >
                  <i className="bi bi-play-circle"></i>
                  <span>Watch Video</span>
                </a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <img
                src="assets/img/hero.png"
                className="img-fluid hero-img"
                alt=""
              />
              {/* data-aos="zoom-out"
                data-aos-delay="100" */}
            </div>
          </div>
          <div className="icon-boxes position-relative">
            <div className="container position-relative">
              <div className="row gy-4 mt-5">
                <div className="col-xl-3 col-md-6">
                  {/* data-aos="fade-up"
                  data-aos-delay="100" */}
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

                <div className="col-xl-3 col-md-6">
                  {/* data-aos="fade-up"
                  data-aos-delay="200" */}
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

                <div className="col-xl-3 col-md-6">
                  {/* data-aos="fade-up"
                  data-aos-delay="300" */}
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

                <div className="col-xl-3 col-md-6">
                  {/* data-aos="fade-up"
                  data-aos-delay="500" */}
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
        <section id="about" className="about">
          <div className="container">
            {/* data-aos="fade-up" */}
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

            <div className="row abt gy-4">
              <div className="col-lg-6 abt-img">
                <img
                  src="assets/img/about.png"
                  className="img-fluid ab-img rounded-4 mb-4"
                  alt=""
                />
              </div>
              <div className="col-lg-6">
                <div className="content ps-0 ps-lg-5">
                  <p className="fst-italic">
                    At ——-name——-, we are driven by the vision of
                    revolutionising decision-making through the power of AI and
                    ML. As a leading innovator in the field, we specialise in
                    crafting tailored solutions that enable businesses to
                    transform data into strategic insights.
                  </p>

                  <p>
                    Our cutting-edge AI/ML solutions offer businesses a
                    competitive edge by transforming raw data into actionable
                    insights. Through advanced algorithms and predictive
                    modelling, we enable companies to anticipate market trends,
                    identify opportunities, and mitigate risks with
                    unprecedented accuracy.
                  </p>

                  {/* <div className="position-relative mt-4">
                    <img
                      src="assets/img/about-2.jpg"
                      className="img-fluid rounded-4"
                      alt=""
                    />
                    <a
                      href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                      className="glightbox play-btn"
                    >
                      1
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services sections-bg">
          <div className="container">
            {/* data-aos="fade-up" */}
            <div className="section-header">
              <h2>Our Services</h2>
              <p>
                At our companies name, we are committed to being your strategic
                partner on the journey to data-driven success. We collaborate
                closely with you to understand your needs and tailor solutions
                that empower your business to make confident decisions.
              </p>
            </div>

            <div className="row gy-4">
              {/* data-aos="fade-up" data-aos-delay="100" */}
              <div className="col-lg-4 col-md-6">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-activity"></i>
                  </div>
                  <h3>Nesciunt Mete</h3>
                  <p>
                    Provident nihil minus qui consequatur non omnis maiores. Eos
                    accusantium minus dolores iure perferendis tempore et
                    consequatur.
                  </p>
                  <a href="./" className="readmore stretched-link">
                    Read more <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-broadcast"></i>
                  </div>
                  <h3>Eosle Commodi</h3>
                  <p>
                    Ut autem aut autem non a. Sint sint sit facilis nam iusto
                    sint. Libero corrupti neque eum hic non ut nesciunt dolorem.
                  </p>
                  <a href="./" className="readmore stretched-link">
                    Read more <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-easel"></i>
                  </div>
                  <h3>Ledo Markt</h3>
                  <p>
                    Ut excepturi voluptatem nisi sed. Quidem fuga consequatur.
                    Minus ea aut. Vel qui id voluptas adipisci eos earum
                    corrupti.
                  </p>
                  <a href="./" className="readmore stretched-link">
                    Read more <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-bounding-box-circles"></i>
                  </div>
                  <h3>Asperiores Commodit</h3>
                  <p>
                    Non et temporibus minus omnis sed dolor esse consequatur.
                    Cupiditate sed error ea fuga sit provident adipisci neque.
                  </p>
                  <a href="./" className="readmore stretched-link">
                    Read more <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-calendar4-week"></i>
                  </div>
                  <h3>Velit Doloremque</h3>
                  <p>
                    Cumque et suscipit saepe. Est maiores autem enim facilis ut
                    aut ipsam corporis aut. Sed animi at autem alias eius
                    labore.
                  </p>
                  <a href="./" className="readmore stretched-link">
                    Read more <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-chat-square-text"></i>
                  </div>
                  <h3>Dolori Architecto</h3>
                  <p>
                    Hic molestias ea quibusdam eos. Fugiat enim doloremque aut
                    neque non et debitis iure. Corrupti recusandae ducimus enim.
                  </p>
                  <a href="./" className="readmore stretched-link">
                    Read more <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="call-to-action" className="call-to-action">
          <div className="container text-center">
            {/* data-aos="zoom-out" */}
            <a
              href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
              className="glightbox play-btn"
            ></a>
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
        </section>
      </main>

      <footer id="footer" className="footer">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <a href="index.html" className="logo d-flex align-items-center">
                <span>Revolve</span>
              </a>
              <p>Enhancing Business Decision-Making with AI/ML Solutions</p>
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
                MVJ college of engingr5d ctgyuhnfr5dert e5trcvgyb ctfvg
                <p>
                  <strong>Phone:</strong> +91 9876543210
                </p>
                <p>
                  {" "}
                  <strong>Email:</strong> info@example.com
                </p>
              </p>
            </div>
          </div>
        </div>

        <div className="container mt-4">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Revolve</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </footer>

      <a
        href="#"
        class="scroll-top d-flex align-items-center justify-content-center"
      >
        <i class="bi bi-arrow-up-short"></i>
      </a>

      {/* <div id="preloader"></div> */}

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
