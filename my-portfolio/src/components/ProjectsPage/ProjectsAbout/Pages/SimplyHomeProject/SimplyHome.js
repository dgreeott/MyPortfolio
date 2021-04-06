import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../Projects.css";

import SimplyHomeVideo from "./SimplyHomeVideo";

import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiBootstrap } from "react-icons/si";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

class SimplyHomeProject extends Component {
  render() {
    return (
      <>
        <div className="container-fluid mb-5">
          <div className="row justify-content-center m-5">
            <div className="col-sm text-center">
              <h1 className="display-3">Simply Home Consignments</h1>
            </div>
          </div>
          <div className="row justify-conent-center m-4">
            <div className="col-sm-2 text-center align-self-center">
              <Link className="icon-arrows" to="/zoemazurk" title="Zoe Mazurk">
                <IoIosArrowBack size={50} />
              </Link>
            </div>
            <div className="col-sm-8 text-center">
              <SimplyHomeVideo />
            </div>
            <div className="col-sm-2 text-center align-self-center">
              <Link className="icon-arrows" to="/ourhelpapp" title="OurHelpApp">
                <IoIosArrowForward size={50} />
              </Link>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm text-center">
              <a
                href="https://www.simplyhomeconsignments.com"
                target="__blank"
                title="Simply Home Consignments"
              >
                <i class="fas fa-link icons project"></i>
              </a>
              <a href="https://github.com/rgreeott/ricochet_webstore_refactor" target="__blank">
                <i className="fab fa-github project"></i>
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
                    <FaHtml5 size={40} />
                  </div>
                  <div className="col-sm">
                    <SiBootstrap size={40} />
                  </div>
                  <div className="col-sm">
                    <FaCss3Alt size={40} />
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
            <div className="col-sm-8 text-justify">
              <div className="row justify-content-center mb-5">
                <p className="lead">
                  I was hired by RAMCO designs to assist in the development of
                  the front-end of the Simply Home Consignments Store website.
                  We utilized HTML and CSS in the development of this project.
                  The focus was to change the old Boostrap3 framework to the
                  updated Boostrap4 code base. While updating the versions we
                  decided to change the layout and flow of the website.
                  Starting, by adding more images of the store and its products,
                  display those images with moving carousels, adding videos
                  explaining what the company does, and creating more action
                  buttons to catch the user's eyes on to certain information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SimplyHomeProject;
