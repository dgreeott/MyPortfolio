import React, { Component } from "react";
import "./Header.css";
import Typer from "../Typer";
import { Link } from "react-router-dom";

import forest from "./img/forest-1920.jpg";

export const PageItems = [
  {
    title: "PROJECTS",
    url: "/projects",
    cName: "btn btn-large btn-danger m-4",
  },
  {
    title: "ABOUT",
    url: "/about",
    cName: "btn btn-large btn-danger m-4",
  },
  {
    title: "CONTACT",
    url: "/contact",
    cName: "btn btn-large btn-danger m-4",
  },
];

class Header extends Component {
  render() {
    return (
      <div
        className="jumbotron jumbotron-fluid"
        style={{ backgroundImage: `url(${forest})` }}
      >
        <div className="container-fluid rounded p-3 headerText">
          <div className="row text-center m-2">
            <div className="col-sm">
              <h1 className="display-4">DRAKE GREEOTT</h1>
            </div>
          </div>
          <div className="row text-center m-2">
            <div className="col-sm">
              <Typer
                dataText={["SOFTWARE DEVELOPER", "WELCOME TO MY WEBSITE"]}
              />
            </div>
          </div>
          <div className="row text-center">
            <div className="col-sm">
              <ul className="headerList">
                {PageItems.map((item, index) => {
                  return (
                    <li key={index} className="header">
                      <Link className={item.cName} to={item.url}>
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
