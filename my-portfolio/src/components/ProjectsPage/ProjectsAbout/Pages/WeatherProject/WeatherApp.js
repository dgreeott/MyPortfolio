import React, { Component } from "react";
import WeatherVideo from "./WeatherVideo";

import { Button } from "../../../../Button";

class WeatherProject extends Component {
  render() {
    return (
      <>
        <div className="container-fluid mb-5">
          <div className="row justify-content-center m-5">
            <div className="col-sm-3 text-center">
              <Button>Visit Website</Button>
            </div>
            <div className="col-sm-6 text-center">
              <h1>Weather Site</h1>
            </div>
            <div className="col-sm-3 text-center">
              <Button>Visit Code</Button>
            </div>
          </div>
          <div className="row justify-conent-center m-4">
            <div className="col-sm text-center">
              <WeatherVideo />
            </div>
          </div>
          <div className="row"></div>
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
            <div className="container">
              <div className="row justify-conent-center">
                <div className="col-sm text-center mt-5">
                  <h2>Techinal Sheet</h2>
                </div>
              </div>
              <hr></hr>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default WeatherProject;
