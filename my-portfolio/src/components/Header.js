import React, { Component } from "react";
import "../css/Header.css";
import Typer from "../Typer.js";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import forest from "../img/forest-1920.jpg";
import { Button } from "./Button";

export const PageItems = [
  {
    title: "PROJECTS",
    url: "/projects",
    cName: "btn",
  },
  {
    title: "ABOUT",
    url: "/about",
    cName: "btn",
  },
  {
    title: "CONTACT",
    url: "/contact",
    cName: "btn",
  },
];

class Header extends Component {
  render() {
    return (
      <div className="section">
        <div
          className="jumbotron jumbotron-fluid"
          style={{ backgroundImage: `url(${forest})` }}
        >
          <div className="container-fluid text-center headerText">
            <h1 className="display-4">DRAKE GREEOTT</h1>
            <Typer dataText={["SOFTWARE DEVELOPER", "WELCOME TO MY WEBSITE"]} />
          </div>
          <div>
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
    );
  }
}

export default Header;
