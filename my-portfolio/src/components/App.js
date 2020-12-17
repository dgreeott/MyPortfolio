import React from "react";
import Navbar from "../components/Navbar/Navbar";
import "../css/App.css";

import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { Route } from "react-router-dom";

import Helmet from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet bodyAttributes={{ style: "background-color : #f8f5f2" }} />
      <Navbar />
      <Route exact path="/Header" component={Header} />
      <Route exact path="/About" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
      <Header />
      <Contact />
    </div>
  );
}

export default App;
