import React, { Component } from "react";
import "../css/Projects.css";
import Footer from "./Footer";
import { Button } from "./Button.js";

import water from "../img/drop-of-water_640.jpg";
import forest from "../img/forest-1280.jpg";

export const object = [
  {
    imgSrc: forest,
    cNameImg: "img rounded ",
    altImg: "Project 1",
    text:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    cName2Text: "card-text",
  },
  {
    imgSrc: water,
    cNameImg: "img rounded",
    altImg: "Project 2",
    text:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    cNameText: "card-text",
  },
  {
    imgSrc: water,
    cNameImg: "img rounded",
    altImg: "Project 2",
    text:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    cNameText: "card-text",
  },
  {
    imgSrc: water,
    cNameImg: "img rounded",
    altImg: "Project 4",
    text:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    cNameText: "card-text",
  },
];

class Projects extends Component {
  render() {
    return (
      <>
        <div className="container mb-5">
          <div className="row">
            <div className="container-fluid">
              <h1 className="title">PROJECTS</h1>
            </div>
          </div>
          <div className="container">
            <div className="row">
              {object.map((item, index) => {
                return (
                  <>
                    <div className="col-sm-6">
                      <div className="img-wrap m-3">
                        <img
                          key={index}
                          className={item.cNameImg}
                          src={item.imgSrc}
                          alt={item.altImg}
                        />
                        <div className="img-description m-5">
                          <p key={index} className={item.cNameText}>
                            {item.text}
                          </p>
                          <a className="m-5" href="https://www.google.com" target="_blank"><Button>Demo</Button></a>
                          <a className="m-5"><Button>Code</Button></a>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Projects;
