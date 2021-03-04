import React from "react";
import "../css/App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Navbar from "./Navbar/Navbar";
import Icons from "./Icons";
import Footer from "./Footer/Footer";

import Header from "./HeaderPage/Header";
import About from "./AboutPage/About";
import Projects from "./ProjectsPage/Projects";
import Contact from "./ContactPage/Contact";

import Helmet from "react-helmet";

function App() {
  return (
    <div className="App">
      <Router>
        <Helmet bodyAttributes={{ style: "background-image: linear-gradient(#f8f5f2, rgba(90, 116, 107, .9)" }} />
        <Switch>
          <Route path={"/"} exact>
            <Header />
          </Route>
          <Route path={"/about"}>
            <Navbar />
            <About />
            <Icons />
            <Footer />
          </Route>
          <Route path={"/projects"}>
            <Navbar />
            <Projects />
            <Icons />
            <Footer />
          </Route>
          <Route path={"/contact"}>
            <Navbar />
            <Contact />
            <Icons />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
