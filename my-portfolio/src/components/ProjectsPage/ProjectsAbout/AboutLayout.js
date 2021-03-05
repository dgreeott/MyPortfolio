import React, { Component } from "react";
import "../Projects.css";

import { AboutProjects } from "../ProjectsAbout/AboutData";

class AboutLayout extends Component {
  render() {
    return (
      <>
        <div className="container-fluid mb-5">
          <div className="row justify-content-center m-4">
            <h1 className="title">PROJECTS</h1>
          </div>

          <div className="row m-3">
            {AboutProjects.map((item, findIndex) => {
              return (
                <>
                  <div className="col-sm m-3">
                    <div className="row justify-content-center">
                      <div className="img-wrap ">
                        <a href={item.moreRef}>
                          <img
                            key={findIndex[1]}
                            className={item.cNameImg}
                            src={item.imgSrc}
                            alt={item.altImg}
                          />
                        </a>
                        <div className="img-description">
                          <h3>Title</h3>
                          <p key={findIndex[1]} className={item.cNameText}>
                            {item.text}
                          </p>
                          <h5>Used Tools</h5>
                        </div>

                        <div className="row justify-content-center mt-4">
                          <div classname="col-sm">
                            <a
                              href={item.moreRef}
                              target="_blank"
                              rel="noreferrer"
                            >
                            </a>
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

export default AboutLayout;
