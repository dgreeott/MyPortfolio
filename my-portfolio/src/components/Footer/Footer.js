import React, { Component } from "react";
import "./Footer.css";

import Skills from "./Skills";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row text-center mt-5">
            <div className="col-lg-8 col-md-12  mb-md-0">
              <Skills />
            </div>
            

            <div className="col-lg-4 col-md-6 mb-md-0">
              <h1 className="mb-4 mt-2">Projects</h1>
              <ul className="list-unstyled mb-0">
              <li className="mb-2 text-center">
                  <a href="weatherapp" className="footer text-light">
                    Weather Site
                  </a>
                </li>
                <li className="mb-2">
                  <a href="zoemazurk" className="footer text-light">
                    Zoe Mazurk Site
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/simplyhome" className="footer text-light">
                    Simply Home Site
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/ourhelpapp" className="footer text-light">
                    OurHelpApp Site
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
