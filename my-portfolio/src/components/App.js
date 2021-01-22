import React from "react";
import "../css/App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from "../components/Navbar/Navbar";
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
          <Route path={"/"} exact component={Header} />
          <Navbar />
          <Route path={"/about"} component={About} />
          <Route path={"/projects"} component={Projects} />
          <Route path={"/contact"} component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
