import "./App.css";
import React, { useEffect } from "react";
import AOS from "aos";

function Action() {
  //data-aos
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
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
    </div>
  );
}

export default Action;
