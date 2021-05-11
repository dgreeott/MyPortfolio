import React from "react";
import "../css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

import Navbar from "./Navbar/Navbar";
import Icons from "./Icons";
import Footer from "./Footer/Footer";

import Header from "./HeaderPage/Header";
import About from "./AboutPage/About";
import Projects from "./ProjectsPage/Projects";
import Contact from "./ContactPage/Contact";


import WeatherApp from "./ProjectsPage/ProjectsAbout/Pages/WeatherProject/WeatherApp";
import ZoeMazurk from "./ProjectsPage/ProjectsAbout/Pages/ZoeMazurkProject/ZoeMazurk";
import SimplyHome from "./ProjectsPage/ProjectsAbout/Pages/SimplyHomeProject/SimplyHome";
import OurHelpApp from "./ProjectsPage/ProjectsAbout/Pages/OurHelpProject/OurHelpApp";
import ShoppingCartApp from "./ProjectsPage/ProjectsAbout/Pages/ShoppingCartApp/ShoppingCartApp";
import ToDoProject from "./ProjectsPage/ProjectsAbout/Pages/ToDoProject/ToDoProject";

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
        <ScrollToTop>
          <Route path={"/"} exact>
            <Header />
            <Projects />
            <About />
            <Contact />
            <Footer />
            <Icons />
          </Route>
            <Route path={"/weatherapp"}>
              <Navbar />
              <WeatherApp />
              <Icons />
              <Footer />
            </Route>
            <Route path={"/zoemazurk"}>
              <Navbar />
              <ZoeMazurk />
              <Icons />
              <Footer />
            </Route>
            <Route path={"/simplyhome"}>
              <Navbar />
              <SimplyHome />
              <Icons />
              <Footer />
            </Route>
            <Route path={"/ourhelpapp"}>
              <Navbar />
              <OurHelpApp />
              <Icons />
              <Footer />
            </Route>
            <Route path={"/shoppingcart"}>
              <Navbar />
              <ShoppingCartApp />
              <Icons />
              <Footer />
            </Route>
            <Route path={"/todo"}>
              <Navbar />
              <ToDoProject />
              <Icons />
              <Footer />
            </Route>
            </ScrollToTop>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
