import React, { Component } from "react";
import "../css/Projects.css";
import { Button } from "./Button.js";

import water from "../img/drop-of-water_640.jpg";

class Projects extends Component {
  render() {
    return (
      <div className="section mt-5 mb-5">
        <div className="container-fluid">
          <div className="row justify-content-center m-4">
            <div className="container-fluid text-center">
              <hr class="lineStyle"></hr>
            </div>
            <div className="container-fluid text-center">
              <h1 className="title" id="projects">PROJECTS</h1>
            </div>
          </div>
          <div className="container">
            <div className="row mt-5">
              <div className="col-sm-4">
                <div className="card shadow-sm">
                  <img
                    className="card-img-top"
                    src={water}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Button>Go Somewhere</Button>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={water}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Button>Go Somewhere</Button>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={water}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Button>Go Somewhere</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-sm-4">
                <div className="card shadow-sm">
                  <img
                    className="card-img-top"
                    src={water}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Button>Go Somewhere</Button>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={water}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Button>Go Somewhere</Button>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={water}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Button>Go Somewhere</Button>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
