import React, { Component } from "react";
import WeatherVideo from "./WeatherVideo";

class WeatherProject extends Component {
  
  render() {
    return (
      <>
        <div className="container-fluid mb-5">
          <div className="row justify-content-center m-4">
            <h1>Weather App</h1>
          </div>
          <div className="row justify-conent-center">
            <div className="col-sm text-center">
            <WeatherVideo src="../video/WeatherAppVideo.mp4" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default WeatherProject;
