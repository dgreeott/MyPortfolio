import React, { Component } from "react";
import "../css/Footer.css";

import Skills from "./Skills";

class Footer extends Component {
  render() {
    return (
      <footer className="text-center text-lg-start">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12  mb-md-0">
              <Skills />
            </div>
            <div className="col-lg-3 col-md-6 mb-md-0">
              <h1>Projects</h1>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-light">
                    Project 1
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-light">
                    Project 2
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-light">
                    Project 3
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-light">
                    Project 4
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-light">
                    Project 5
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-light">
                    Project 6
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-md-0">
              <h1>Sections</h1>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="/" className="text-light">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/projects" className="text-light">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-light">
                    About
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-light">
                    Contact Me!
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-light">
                    <a
                      className="icons-footer"
                      href="mailto:drake.greeott@gmail.com"
                      target="__blank"
                    >
                      <i class="fas fa-envelope"></i>
                    </a>
                    <a
                      className="icons-footer"
                      href="https://www.linkedin.com/in/drakegreeott/"
                      target="__blank"
                    >
                      <i class="fab fa-linkedin"></i>
                    </a>
                    <a
                      className="icons-footer"
                      href="https://github.com/dgreeott"
                      target="__blank"
                    >
                      <i class="fab fa-github"></i>
                    </a>
                  </a>
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
