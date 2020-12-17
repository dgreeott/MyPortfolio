import React, { Component } from "react";
import "../css/Header.css";
import Typer from "../Typer.js";

class Header extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div class="jumbotron jumbotron-fluid">
          <div class="container-fluid text-center">
            <h1 class="display-4">DRAKE GREEOTT</h1>
            <Typer dataText={["SOFTWARE DEVELOPER", "WELCOME TO MY WEBSITE"]} />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
