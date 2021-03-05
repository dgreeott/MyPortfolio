import React, { Component } from "react";
import "./Footer.css";


import Resume from "../Resume";
import Skills from "./Skills";

class Footer extends Component {
  render() {
    return (
      <footer className="mt-3">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-6 col-md-12  mb-md-0">
              <Skills />
            </div>
            <div className="col-lg-3 col-md-6 mb-md-0">
              <h1 className="mb-3 mt-2">PROJECTS</h1>
              <ul className="list-unstyled mb-1">
                <li className="mb-2 text-center">
                  <a href="weatherapp" className="text-light">
                    Weather Site
                  </a>
                </li>
                <li className="mb-2">
                  <a href="zoemazurk" className="text-light">
                    Zoe Mazurk Site
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/simplyhome" className="text-light">
                    Simply Home Site
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/ourhelpapp" className="text-light">
                    OurHelpApp Site
                  </a>
                </li>
                
                
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-md-0">
              <h1 className="mb-3 mt-2">SECTIONS</h1>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <a href="/" className="text-light">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/projects" className="text-light">
                    Projects
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/about" className="text-light">
                    About
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/contact" className="text-light">
                    Contact Me!
                  </a>
                </li>
                <li>
                <li className="">
                  <Resume />
                </li>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
