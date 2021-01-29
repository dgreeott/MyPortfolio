import React from "react";
import "../css/App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from "../components/navbar/navbar";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

import Helmet from "react-helmet";

function App() {
  return (
    <div className="App">
      <Router>
        <Helmet bodyAttributes={{ style: "background-color : #f8f5f2" }} />
        <Switch>
          <Route path={"/"} exact>
            <Header />
          </Route>
          <Route path={"/about"}>
            <Navbar />
            <About />
          </Route>
          <Route path={"/projects"}>
            <Navbar />
            <Projects />
          </Route>
          <Route path={"/contact"}>
            <Navbar />
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
