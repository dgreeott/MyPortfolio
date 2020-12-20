import React, { Component } from "react";
import "../css/Footer.css";

import Skills from "./Skills";

class Footer extends Component {
  render() {
    return (
      <footer className="text-center text-lg-start">
        <div className="container-fluid p-2">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <Skills />
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
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

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h1>Sections</h1>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-light">
                    Top-of-Page
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-light">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-light">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-light">
                    About
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-light">
                    <i class="fas fa-envelope"></i>
                    <i class="fab fa-linkedin"></i>
                    <i class="fab fa-github"></i>
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
