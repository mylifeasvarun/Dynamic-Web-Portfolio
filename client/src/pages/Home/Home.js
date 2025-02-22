import React from "react";
import Header from "../../components/Header";
import Intro from "./Intro";
import About from "./About";
import Educations from "./Educations";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

function Home() {
  const { portfolioData } = useSelector((state) => state.root);
  return (
    <div>
      <Header />
      {portfolioData && (
        <div className="bg-primary px-24 sm:px-5">
          <Intro />
          <div id="about-section">
            <About />
          </div>
          <Educations />
          <Experiences />
          <Projects />
          <Contact />
          <Footer />
          <Sidebar />
        </div>
      )}
    </div>
  );
}

export default Home;
