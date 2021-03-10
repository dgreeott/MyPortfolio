import React, { Component } from "react";
import "./Header.css";
import Typer from "../Typer";
import { Link } from "react-router-dom";


export const PageItems = [
  {
    title: "Enter Portfolio",
    url: "/portfolio",
    cName: "btn btn-large btn-danger m-4",
  },
];

class Header extends Component {
  render() {
    return (
      <div
        className="jumbotron jumbotron-fluid"
        style={{ backgroundImage: `url(https://drakes-portfolio.s3-us-west-2.amazonaws.com/img/forest-1920.jpg)` }}
      >
        <div className="container-fluid rounded p-3 headerText">
          <div className="row text-center m-5">
            <div className="col-sm">
              <h1 className="display-3">DRAKE GREEOTT</h1>
            </div>
          </div>
          <div className="row text-center m-3">
            <div className="col-sm">
              <Typer 
                dataText={["Software Developer", "Welcome to my website"]}
              />
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Header;
