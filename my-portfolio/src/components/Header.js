import React, { Component } from "react";
import "../css/Header.css";
import Typer from "../Typer.js";

import forest from "./forest-1920.jpg";

class Header extends Component {
  render() {
    return (
      <div className="section">
        <div className="container-fluid">
            <div
              className="jumbotron jumbotron-fluid"
              style={{ backgroundImage: `url(${forest})` }}
            >
              <div className="container-fluid text-center headerText">
                <h1 className="display-4">DRAKE GREEOTT</h1>
                <Typer
                  dataText={["SOFTWARE DEVELOPER", "WELCOME TO MY WEBSITE"]}
                />
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Header;
