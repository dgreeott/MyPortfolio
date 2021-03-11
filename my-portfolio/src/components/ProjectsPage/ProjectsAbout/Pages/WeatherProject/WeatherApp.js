import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../Button";

import WeatherVideo from "./WeatherVideo";

import { FaHtml5, FaJsSquare, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiBootstrap } from "react-icons/si";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

class WeatherProject extends Component {
  render() {
    return (
      <>
        <div className="container-fluid mb-5">
          <div className="container">
            <div className="row justify-content-center m-5">
              <div className="col-sm text-center">
                <h1 className="display-4">Weather Site</h1>
              </div>
            </div>
            <div className="row justify-conent-center m-4">
              <div className="col-sm-2 text-center align-self-center">
                <Link
                  className="icon-arrows"
                  to="/ourhelpapp"
                  title="OurHelpApp"
                >
                  <IoIosArrowBack size={50} />
                </Link>
              </div>
              <div className="col-sm-8 text-center">
                <WeatherVideo />
              </div>
              <div className="col-sm-2 text-center align-self-center">
                <Link className="icon-arrows" to="/zoemazurk" title="Zoe Mazurk">
                  <IoIosArrowForward size={50} />
                </Link>
              </div>
            </div>
            <div className="row justify-content-center m-5">
              <div className="col-sm-3 text-center">
                <Button>Visit Website</Button>
              </div>
              <div className="col-sm-3 text-center">
                <Button>Visit Code</Button>
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
                      <FaHtml5 size={40} />
                    </div>
                    <div className="col-sm">
                      <FaCss3Alt size={40} />
                    </div>
                    <div className="col-sm">
                      <FaJsSquare size={40} />
                    </div>
                    <div className="col-sm">
                      <FaReact size={40} />
                    </div>
                    <div className="col-sm">
                      <SiBootstrap size={40} />
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
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </p>
                <p className="lead">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </p>
              </div>
              <div className="col-sm-2"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default WeatherProject;
