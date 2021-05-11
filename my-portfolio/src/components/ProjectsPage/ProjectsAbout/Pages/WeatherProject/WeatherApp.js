import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../Projects.css";

import WeatherVideo from "./WeatherVideo";

import { FaHtml5, FaJsSquare, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiBootstrap } from "react-icons/si";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

class WeatherProject extends Component {
  render() {
    return (
      <>
          <div className="container-fluid mb-5">
            <div className="row justify-content-center m-5">
              <div className="col-sm text-center">
                <h1 className="display-3">Weather Site</h1>
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
                <Link
                  className="icon-arrows"
                  to="/shoppingcart"
                  title="Shopping Cart"
                >
                  <IoIosArrowForward size={50} />
                </Link>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-sm text-center">
                <a
                  href="https://www.myweatherexperiment.com"
                  target="__blank"
                  title="WeatherApp"
                >
                  <i class="fas fa-link project"></i>
                </a>
                <a
                  href="https://github.com/dgreeott/weather-site"
                  target="__blank"
                >
                  <i className="fab fa-github project"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-conent-center">
              <div className="col-sm text-center">
                <div className="row justify-conent-center">
                  <div className="col-sm text-center mb-3">
                    <h2>Techinal Sheet</h2>
                  </div>
                </div>
                <div className="container">
                  <div className="row justify-content-center">
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
                    Myweatherexperiment is a project where I learned how to
                    access and manipulate data from an API. I utilized Bootstrap
                    as the CSS front-end framework in this development. In this
                    project, Axios was utilized to fetch the data from the
                    OpenWeatherMap API. I then created hooks so that I could set
                    the query of the API to the appropriate search. To do this,
                    I created an if statement with the condition of the event is
                    by hitting the key "Enter". A function will be run and
                    extract the information for the entered city.
                  </p>
                  <p className="lead">
                    To start, search a city and then press "Enter", it will
                    display the current temperature, today's forecast, hourly
                    forecast, daily forecast, and a more detailed description of
                    today's weather. All of the information will change to the
                    correct weather forecast for the city you searched. The
                    dates and times will adjust to the correct timezone. To do
                    this, I used Moment.js to convert the date/time from the
                    JSON file. Also, the icons will change according to thing to
                    the status of the description given.
                  </p>
                  <p className="lead">
                    Lastly, I added another page to display COVID data onto a
                    heat map of the United States. The development of this map
                    was with AmCharts, and the data is coming from an array I
                    made with data from an API. The next phase for the page is
                    to connect the heat map with real-time data from a COVID
                    API. Also, creating a way to search a certain state and get
                    specific data about that state.
                  </p>
                </div>
                <div className="row justify-content-center mb-5">
                  <h2 className="text-center">More to come!</h2>
                </div>
              </div>
            </div>
          </div>
      </>
    );
  }
}

export default WeatherProject;
