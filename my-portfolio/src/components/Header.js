import React, { Component } from "react";
import "../css/Header.css";
import Typer from "../Typer.js";

import forest from "../img/forest-1920.jpg";

class Header extends Component {
  render() {
    return (
      <div className="section mt-5 pt-5" id="header">
        <div className="container-fluid pt-5">
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
