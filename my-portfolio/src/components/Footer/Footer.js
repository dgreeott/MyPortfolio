import React, { Component } from "react";
import "./Footer.css";


import Resume from "../Resume";
import Skills from "./Skills";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container mt-3">
          <div className="row">
            <div className="col-lg-6 col-md-12  mb-md-0">
              <Skills />
            </div>
            <div className="col-lg-3 col-md-6 mb-md-0">
              <h1 className="mb-3 mt-2">Projects</h1>
              <ul className="list-unstyled mb-1">
                <li className="mb-2">
                  <a href="#!" className="text-light">
                    Weather Site
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#!" className="text-light">
                    Zoe Mazurk
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#!" className="text-light">
                    Simply Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#!" className="text-light">
                    OurHelpApp Site
                  </a>
                </li>
                
                
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-md-0">
              <h1 className="mb-3 mt-2">Sections</h1>
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
                <li className="ml-5">
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
