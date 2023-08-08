import "./App.css";
import React from "react";

function App() {
  return (
    <div classNameName="App">
      <section id="topbar" className="topbar d-flex align-items-center">
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
      </section>

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
                Welcome to <span>Impact</span>
              </h2>
              <p>
                Sed autem laudantium dolores. Voluptatem itaque ea consequatur
                eveniet. Eum quas beatae cumque eum quaerat.
              </p>
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
              <img src="assets/img/hero-img.svg" className="img-fluid" alt="" />
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
                        Lorem Ipsum
                      </a>
                    </h4>
                  </div>
                </div>

                <div className="col-xl-3 col-md-6">
                  {/* data-aos="fade-up"
                  data-aos-delay="200" */}
                  <div className="icon-box">
                    <div className="icon">
                      <i className="bi bi-gem"></i>
                    </div>
                    <h4 className="title">
                      <a href="./" className="stretched-link">
                        Sed ut perspiciatis
                      </a>
                    </h4>
                  </div>
                </div>

                <div className="col-xl-3 col-md-6">
                  {/* data-aos="fade-up"
                  data-aos-delay="300" */}
                  <div className="icon-box">
                    <div className="icon">
                      <i className="bi bi-geo-alt"></i>
                    </div>
                    <h4 className="title">
                      <a href="./" className="stretched-link">
                        Magni Dolores
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
                        Nemo Enim
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
                Aperiam dolorum et et wuia molestias qui eveniet numquam nihil
                porro incidunt dolores placeat sunt id nobis omnis tiledo stran
                delop
              </p>
            </div>

            <div className="row gy-4">
              <div className="col-lg-6">
                <h3>Voluptatem dignissimos provident quasi corporis</h3>
                <img
                  src="assets/img/about.jpg"
                  className="img-fluid rounded-4 mb-4"
                  alt=""
                />
                <p>
                  Ut fugiat ut sunt quia veniam. Voluptate perferendis
                  perspiciatis quod nisi et. Placeat debitis quia recusandae
                  odit et consequatur voluptatem. Dignissimos pariatur
                  consectetur fugiat voluptas ea.
                </p>
                <p>
                  Temporibus nihil enim deserunt sed ea. Provident sit expedita
                  aut cupiditate nihil vitae quo officia vel. Blanditiis
                  eligendi possimus et in cum. Quidem eos ut sint rem veniam
                  qui. Ut ut repellendus nobis tempore doloribus debitis
                  explicabo similique sit. Accusantium sed ut omnis beatae neque
                  deleniti repellendus.
                </p>
              </div>
              <div className="col-lg-6">
                <div className="content ps-0 ps-lg-5">
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Duis aute
                      irure dolor in reprehenderit in voluptate velit.
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate trideta
                      storacalaperda mastiro dolore eu fugiat nulla pariatur.
                    </li>
                  </ul>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident
                  </p>

                  <div className="position-relative mt-4">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
