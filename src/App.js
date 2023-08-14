import "./App.css";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import TrackVisibility from "react-on-screen";
import Marquee from "react-fast-marquee";
// import $ from "jquery";

function App() {
  //data-aos
  useEffect(() => {
    AOS.init();
  }, []);
  //spotlight
  // $("body").mousemove(function (e) {
  //   let x = e.pageX;
  //   let y = e.pageY;

  //   $("body").css(
  //     "background",
  //     "radial-gradient(circle at " + x + "px " + y + "px, #151515, #000 2% )"
  //   );
  // });

  //changing words
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  console.log(index);
  const toRotate = [
    "Customised Chatbots",
    "Predictive Maintenance",
    "Medical Imaging Analysis",
    "Supply Chain Optimisation",
    "Personalised Marketing",
    "Natural Language Processing Services",
    "Fraud Detection",
    "Smart City Solutions",
    "Automated Content Generation",
    "Emotion Recognition",
    "Financial Forecasting",
    "Custom Voice Assistants",
    "Visual Recognition Solutions",
    "AI-Driven Cybersecurity",
    "Recommender Systems",
    "Healthcare Predictive Analytics",
    "Automated Financial Advisors (NLG)",
    "Smart Home Solutions",
    "Digital Media Optimisation",
    "Customer Behaviour Prediction",
    "Retail AI Solutions",
    "Automated Research Assistance",
  ];
  const period = 5000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  });

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
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
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>{" "}
      <section id="hero" className="hero">
        <div className="container position-relative">
          <div className="row gy-5" data-aos="fade-in">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <h2>
                      Welcome to <span className="text-grad">Revolve</span>
                    </h2>
                    <h1>
                      {/* <h3> */}
                      {`Transforming Possibilities into Reality with `}{" "}
                      <span
                        className="txt-rotate"
                        dataPeriod="1000"
                        data-rotate='["AI/ML Solutions","Data Scientist", "Web Developer", "Web Designer", "UI/UX Designer"]'
                      >
                        <span className="wrap">{text}</span>
                      </span>
                      {/* </h3> */}
                    </h1>
                  </div>
                )}
              </TrackVisibility>
              <div className="d-flex home-btn justify-content-center justify-content-lg-start">
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
            <div className="col-lg-6 order-1 order-lg-2 baner-im">
              <img
                src="assets/img/hero.png"
                className="img-fluid hero-img moveArrow"
                alt=""
                data-aos="zoom-out"
                data-aos-delay="100"
              />
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

            <div className="row about-div abt gy-4" data-aos="slide-right">
              <div className="col-lg-6 abt-img ab-img1">
                <img
                  src="assets/img/about.png"
                  className="img-fluid ab-img rounded-4 mb-4 moveArrow"
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
                </div>
              </div>
            </div>

            <div className="row about-div2 abt gy-4" data-aos="slide-left">
              <div className="col-lg-6">
                <div className="content ps-0 ps-lg-5">
                  <p className="fst-italic">
                    Our cutting-edge AI/ML solutions offer businesses a
                    competitive edge by transforming raw data into actionable
                    insights. Through advanced algorithms and predictive
                    modelling, we enable companies to anticipate market trends,
                    identify opportunities, and mitigate risks with
                    unprecedented accuracy.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 abt-img ab-img2">
                <img
                  className="img-fluid ab-img   rounded-4 mb-4 moveArrow"
                  src="assets/img/about3.png"
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
                At our companies name, we are committed to being your strategic
                partner on the journey to data-driven success. We collaborate
                closely with you to understand your needs and tailor solutions
                that empower your business to make confident decisions.
              </p>
            </div>

            <div className="row gy-4" data-aos="fade-up" data-aos-delay="100">
              <div className="col-lg-4 col-md-6 ">
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
                </div>
              </div>

              <div className="col-lg-4 col-md-6 ">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-broadcast"></i>
                  </div>
                  <h3>Eosle Commodi</h3>
                  <p>
                    Ut autem aut autem non a. Sint sint sit facilis nam iusto
                    sint. Libero corrupti neque eum hic non ut nesciunt dolorem.
                  </p>
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
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="call-to-action" className="call-to-action">
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
        </section>

        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Contact</h2>
              <p>
                Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam
                porro nihil id ratione ea sunt quis dolorem dolore earum
              </p>
            </div>

            <div className="row gx-lg-0 gy-4">
              <div className="col-lg-4">
                <div className="info-container d-flex flex-column align-items-center justify-content-center">
                  <div className="info-item d-flex">
                    <i className="bi bi-geo-alt flex-shrink-0"></i>
                    <div>
                      <h4>Location:</h4>
                      <p> MVJ college of engingr5d ctgyuhnfvg</p>
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
                      <p>+1 5589 55488 55</p>
                    </div>
                  </div>
                  <div className="info-item d-flex">
                    <i className="bi bi-clock flex-shrink-0"></i>
                    <div>
                      <h4>Open Hours:</h4>
                      <p>Mon-Sat: 11AM - 23PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-8">
                <form
                  action="forms/contact.php"
                  method="post"
                  className="php-email-form"
                >
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="7"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
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
