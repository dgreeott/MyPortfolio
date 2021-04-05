import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../Projects.css";

import OurHelpVideo from "./OurHelpVideo";

import { FaWordpress, FaAws } from "react-icons/fa";
import { SiCloudflare, SiPlesk } from "react-icons/si";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

class OurHelpProject extends Component {
  render() {
    return (
      <>
        <div className="container-fluid mb-5">
          <div className="row justify-content-center m-5">
            <div className="col-sm text-center">
              <h1 className="display-4">OurHelpApp</h1>
            </div>
          </div>
          <div className="row justify-conent-center m-4">
            <div className="col-sm-2 text-center align-self-center">
              <Link
                className="icon-arrows"
                to="/simplyhome"
                title="Simply Home Consignment"
              >
                <IoIosArrowBack size={50} />
              </Link>
            </div>
            <div className="col-sm-8 text-center">
              <OurHelpVideo />
            </div>
            <div className="col-sm-2 text-center align-self-center">
              <Link className="icon-arrows" to="/weatherapp" title="OurHelpApp">
                <IoIosArrowForward size={50} />
              </Link>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-3 text-center">
              <a
                href="https://www.ourhelpapp.com"
                target="__blank"
                title="OurHelpApp"
                className=""
              >
                <i class="fas fa-link project"></i>
              </a>
              <a
                href="https://drakes-portfolio.s3-us-west-2.amazonaws.com/documents/OurHelpApp_Doc.docx"
                target="__blank"
                title="Documentation"
              >
                <i className="far fa-file project"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-conent-center">
            <div className="col-sm text-center">
              <div className="row justify-conent-center">
                <div className="col-sm text-center mb-4">
                  <h2>Techinal Sheet</h2>
                </div>
              </div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-sm">
                    <FaWordpress size={40} />
                  </div>
                  <div className="col-sm">
                    <FaAws size={40} />
                  </div>
                  <div className="col-sm">
                    <SiCloudflare size={40} />
                  </div>
                  <div className="col-sm">
                    <SiPlesk size={40} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-conent-center mt-5">
            <div className="col-sm text-center">
              <h2>About This Project</h2>
            </div>
          </div>

          <hr></hr>
          <div className="row justify-content-center">
            <div className="col-sm-8 text-justify ">
              <div className="row justify-content-center mb-5">
                <p className="lead">
                  The project was to build a covid help app where apartment
                  residents could go and request and offer help to others in the
                  apartment building. We had to create three different stages of
                  deliverables for the client. This was a group project for my
                  capstone class and the main focus was the creating of the
                  documentation and developing a working prototype for the
                  client. You will see buttons to both the site and the final
                  documentation for this project.
                </p>
                <p className="lead">
                  On this project, I wrote and developed many section of the
                  document.
                </p>
                <ul>
                  <li className="lead">Architecture Design</li>
                  <li className="lead">Context DFD</li>
                  <li className="lead">Level-0 DFD</li>
                  <li className="lead">Security Design</li>
                  <li className="lead">Use Case Diagram</li>
                  <li className="lead">Activity Diagrams</li>
                  <li className="lead">Screen Trees</li>
                  <li className="lead">User Manuel</li>
                </ul>
                <p className="lead">
                  Due to the focus on the documentation for the project
                  requirements, we chose to save time in coding and create a
                  WordPress site. After researching, we found that creating an
                  AWS Lightsail instants with the Plesk software installed on
                  the Linux server would satisfy the requirements of the
                  project. We hosted our site through Cloudflare to give us more
                  control over the site's activities and security policies. The
                  Plesk software created a PhpMyAdmin SQL database for the
                  collecting of the user information and data. Then we used
                  plugins such as Elementor, ProgileGrid, and RegistrationMagic
                  to create the layout of the site and manage the user's
                  profiles and interactions.
                </p>
              </div>

              <div className="row justify-content-center mb-5">
                <h3 className="text-center">
                  For more information on the project please download the
                  documentation!
                </h3>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default OurHelpProject;
