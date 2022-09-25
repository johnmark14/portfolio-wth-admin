import Footer from "components/Footer";
import Header from "components/Header";
import LeftNav from "components/LeftNav";
import React from "react";
import About from "./About";
import Contact from "./Contact";
import Courses from "./Courses";
import Experiences from "./Experiences";
import Intro from "./Intro";
import Projects from "./Projects";

function Home() {
  return (
    <div className="bg-primary relative">
      <LeftNav />
      <Header />
      <div className="px-40 sm:px-10 max-w-[1680px] m-auto pb-48">
        <Intro />
        <About />
        <Experiences />
        <Projects />
        <Courses />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
