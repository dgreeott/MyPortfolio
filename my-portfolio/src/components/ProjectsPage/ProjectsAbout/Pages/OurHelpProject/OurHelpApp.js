import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../Button";
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
          <div className="row justify-content-center m-5">
            <div className="col-sm-3 text-center">
              <a
                href="https://www.ourhelpapp.com"
                target="__blank"
                title="OurHelpApp"
              >
                <Button>Visit Website</Button>
              </a>
            </div>
            <div className="col-sm-3 text-center">
              <a
                href="https://drakes-portfolio.s3-us-west-2.amazonaws.com/documents/OurHelpApp_Doc.docx"
                target="__blank"
                title="Documentation"
              >
                <Button>Documentation</Button>
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-conent-center">
            <div className="col-sm text-center mt-3">
              <div className="row justify-conent-center">
                <div className="col-sm text-center mb-3">
                  <h2>Techinal Sheet</h2>
                </div>
              </div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-sm"></div>
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
                  <div className="col-sm"></div>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
        </div>
        <div className="container">
          <div className="row justify-conent-center mt-5">
            <div className="col-sm text-center">
              <h2>About This Project</h2>
            </div>
          </div>

          <hr></hr>
          <div className="row ">
            <div className="col-sm-2"></div>
            <div className="col-sm-8 text-justify">
              <p className="lead">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
              <p className="lead">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
            </div>
            <div className="col-sm-2"></div>
          </div>
        </div>
      </>
    );
  }
}

export default OurHelpProject;
