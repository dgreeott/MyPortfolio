import React from "react";
import "../css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Icons from "./Icons";
import Footer from "./Footer/Footer";

import Header from "./HeaderPage/Header";
import About from "./AboutPage/About";
import Projects from "./ProjectsPage/Projects";
import Contact from "./ContactPage/Contact";
import ScrollToTop from "./ScrollToTop";

import WeatherApp from "./ProjectsPage/ProjectsAbout/Pages/WeatherProject/WeatherApp";
import ZoeMazurk from "./ProjectsPage/ProjectsAbout/Pages/ZoeMazurkProject/ZoeMazurk";
import SimplyHome from "./ProjectsPage/ProjectsAbout/Pages/SimplyHomeProject/SimplyHome";
import OurHelpApp from "./ProjectsPage/ProjectsAbout/Pages/OurHelpProject/OurHelpApp";

import Helmet from "react-helmet";

function App() {
  return (
    <div className="App">
      <Router>
        <Helmet
          bodyAttributes={{
            style:
              "background-image: linear-gradient(to bottom, #f8f5f2, rgba(90, 116, 107, .9)",
          }}
        />
        <Switch>
          <Route path={"/"} exact>
            <ScrollToTop>
              <Header />
              <Projects />
              <About />
              <Contact />
              <Icons />
              <Footer />
            </ScrollToTop>
          </Route>
          <Route path={"/weatherapp"}>
            <ScrollToTop>
              <Navbar />
              <WeatherApp />
              <Icons />
              <Footer />
            </ScrollToTop>
          </Route>
          <Route path={"/zoemazurk"}>
            <ScrollToTop>
              <Navbar />
              <ZoeMazurk />
              <Icons />
              <Footer />
            </ScrollToTop>
          </Route>
          <Route path={"/simplyhome"}>
            <ScrollToTop>
              <Navbar />
              <SimplyHome />
              <Icons />
              <Footer />
            </ScrollToTop>
          </Route>
          <Route path={"/ourhelpapp"}>
            <ScrollToTop>
              <Navbar />
              <OurHelpApp />
              <Icons />
              <Footer />
            </ScrollToTop>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
