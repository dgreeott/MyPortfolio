import React, { Component } from "react";
import "../css/Projects.css";
import { Button } from "./Button.js";

import water from "../img/drop-of-water_640.jpg";


export const object = [
  {
    imgSrc: water,
    cNameImg: "card-img-top",
    altImg: "Card image cap",
    title: "Project 1",
    cNameTitle: "card-title",
    text:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    cName2Text: "card-text",
  },
  {
    imgSrc: water,
    cNameImg: "card-img-top",
    altImg: "Card image cap",
    title: "Project 2",
    cName1Title: "card-title",
    text:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    cNameText: "card-text",
  },
  {
    imgSrc: water,
    cNameImg: "card-img-top",
    altImg: "Card image cap",
    title: "Project 3",
    cNameTitle: "card-title",
    text:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    cNameText: "card-text",
  },
  {
    imgSrc: water,
    cNameImg: "card-img-top",
    altImg: "Card image cap",
    title: "Project 4",
    cNameTitle: "card-title",
    text:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    cNameText: "card-text",
  },
  {
    imgSrc: water,
    cNameImg: "card-img-top",
    altImg: "Card image cap",
    title: "Project 5",
    cNameTitle: "card-text",
    text:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    cNameText: "card-title",
  },
  {
    imgSrc: water,
    cNameImg: "card-img-top",
    altImg: "Card image cap",
    title: "Project 6",
    cNameTitle: "card-title",
    text:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    cNameText: "card-text",
  },
];

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
              <h1 className="title" id="projects">
                PROJECTS
              </h1>
            </div>
          </div>
          <div className="container">
            <div className="row">
              {object.map((item, index) => {
                return (
                  <>
                    <div className="col-sm-4 mt-5">
                      <div className="card shadow-sm">
                        <img
                          key={index}
                          className={item.cNameImg}
                          src= {item.imgSrc}
                          alt={item.altImg}
                        />
                        <h5 key={index} className={item.cNameTitle}>
                          {item.title}
                        </h5>
                        <p key={index} className={item.cNameText}>
                          {item.text}
                        </p>
                        <div className="row mb-3">
                          <div className="col-sm-6">
                            <Button>Demo</Button>
                          </div>
                          <div className="col-sm-6">
                            <Button>Code</Button>
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
      </div>
    );
  }
}

export default Projects;
