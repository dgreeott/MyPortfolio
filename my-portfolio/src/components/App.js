import React from "react";
import Navbar from "../components/Navbar/Navbar";
import "../css/App.css";

import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

import Helmet from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet bodyAttributes={{ style: "background-color : #f8f5f2" }} />
      <Navbar />
      <Header />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
