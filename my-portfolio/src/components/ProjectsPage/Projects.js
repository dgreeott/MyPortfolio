import React, { Component } from "react";
import "./Projects.css";
import { Button } from "../Button";
import { Project } from "./ProjectData";

class Projects extends Component {
  render() {
    return (
      <>
        <div className="container-fluid m-5">
          <div className="row justify-content-center mb-4">
            <h1 className="title">PROJECTS</h1>
          </div>

          <div className="row m-3">
            {Project.map((item, index) => {
              return (
                <>
                  <div className="col-sm m-3">
                    <div className="row justify-content-center">
                      <div className="img-wrap ">
                        <img
                          key={index}
                          className={item.cNameImg}
                          src={item.imgSrc}
                          alt={item.altImg}
                        />
                        <div className="img-description m-4">
                        <h3>Title</h3>
                          <p key={index} className={item.cNameText}>
                            {item.text}
                          </p>
                        <h5>Used Tools</h5>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-center mt-4">
                      <div classname="col-sm">
                        <a
                          href={item.moreRef}
                          target="_blank"
                        >
                          <Button>More...</Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Projects;
