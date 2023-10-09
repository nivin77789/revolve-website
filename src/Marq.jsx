import "./App.css";
import React, { useEffect } from "react";
import AOS from "aos";
import Marquee from "react-fast-marquee";

function Marq() {
  //data-aos
  useEffect(() => {
    AOS.init();
  }, []);
  const arr = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="App">
      <center>
        <div className="marq">
          <Marquee className="marq-s">
            {arr.map((ele) => (
              <img src={`assets/img/${ele}.png`} alt="" />
            ))}
          </Marquee>
        </div>
      </center>
    </div>
  );
}

export default Marq;
