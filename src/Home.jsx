import "./App.css";
import React, { useEffect } from "react";
import AOS from "aos";
import Service from "./Service";
import Landing from "./Landing";
import About from "./About";
import Marq from "./Marq";
import Cont from "./Cont";
import Action from "./Action";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Landing />
      <main id="main">
        <Marq />
        <About />
        <Service />
        <Action />
        <Cont />
      </main>
    </div>
  );
}

export default Home;
