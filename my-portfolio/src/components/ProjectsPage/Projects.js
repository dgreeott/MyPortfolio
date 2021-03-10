import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import { Button } from "../Button";
import { Project } from "./ProjectData";

class Projects extends Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row justify-content-center m-5">
            <div className="row justify-content-center m-5">
              <h1 className="display-4">My Work</h1>
            </div>

            <div className="row">
              {Project.map((item, index) => {
                return (
                  <>
                    <div className="col-sm m-3">
                      <div className="row justify-content-center">
                        <div className="img-wrap">
                          <Link to={item.url}>
                            <img
                              key={index}
                              className={item.cNameImg}
                              src={item.imgSrc}
                              alt={item.altImg}
                            />
                          </Link>
                          <div className="img-description m-5">
                            <h3>{item.title}</h3>
                            <p key={index} className={item.cNameText}>
                              {item.text}
                            </p>
                            <h5>Used Tools</h5>
                            <Button>More...</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Projects;
