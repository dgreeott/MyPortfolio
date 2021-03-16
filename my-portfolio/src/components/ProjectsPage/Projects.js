import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollableAnchor from "react-scrollable-anchor";
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
              <ScrollableAnchor id={"section1"}>
                <h1 className="display-4">My Work</h1>
              </ScrollableAnchor>
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
                          <div className="img-description mt-5">
                            <h3 key={index} className={item.cNameTitle}>{item.title}</h3>
                            <h5 key={index} className={item.cNameText}>
                              {item.text}
                            </h5>
                            <h5 key={index} className={item.cNameIcons}>
                              {item.icon1}{" "}
                              {item.icon2}{" "}
                              {item.icon3}{" "}
                              {item.icon4}{" "}
                            </h5>
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
