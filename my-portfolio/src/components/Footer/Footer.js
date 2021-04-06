import React, { Component } from "react";
import { Link } from "react-router-dom";
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

            <div className="col-lg-4 col-md-6 mb-md-0 mb-5">
              <h1 className="mb-4 mt-2">Projects</h1>
              <ul className="list-unstyled mb-0">
                <li className="mb-2 text-center">
                  <Link to="/weatherapp" className="footer text-light">
                    Weather Site
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/shoppingcart" className="footer text-light">
                    Shopping Cart App
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/zoemazurk" className="footer text-light">
                    Zoe Mazurk Site
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/simplyhome" className="footer text-light">
                    Simply Home Site
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/ourhelpapp" className="footer text-light">
                    OurHelpApp Site
                  </Link>
                </li>
              </ul>
              <div class="row justify-content-center">
                <div class="icon-footer">
                  <a
                    className="icons-mail"
                    href="mailto:drake.greeott@gmail.com"
                    target="__blank"
                    title="Email"
                  >
                    <i class="fas fa-envelope"></i>
                  </a>
                  <a
                    className="icons-linkedin"
                    href="https://www.linkedin.com/in/drakegreeott/"
                    target="__blank"
                    title="LinkedIn"
                  >
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a
                    className="icons-github"
                    href="https://github.com/dgreeott"
                    target="__blank"
                    title="Github"
                  >
                    <i class="fab fa-github"></i>
                  </a>
                  <a
                    className="icons-resume"
                    href="https://drakes-portfolio.s3-us-west-2.amazonaws.com/documents/Resume_DG.pdf"
                    target="__blank"
                    title="Resume"
                  >
                    <i class="far fa-file"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
