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
        <div className="container mt-5 mb-5">
          <div className="row justify-content-center">
            <div className="col-sm text-center">
                <h1 className="display-1 text-center mb-5">My Work</h1>
            </div>
          </div>

          <div className="row justify-content-center">
            {Project.map((item, index) => {
              return (
                <>
                  <div className="col-sm">
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
                        <div className="img-description mt-3">
                          <h1 key={index} className={item.cNameTitle}>
                            {item.title}
                          </h1>
                          <h3 key={index} className={item.cNameIcons}>
                            {item.icon1} {item.icon2} {item.icon3} {item.icon4}{" "}
                            {item.icon5} {item.icon6}
                          </h3>
                          <div className={item.cNameButton}>
                            <Button>More...</Button>
                          </div>
                        </div>
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
