import React, { Component } from "react";
import "./Header.css";
import Typer from "../Typer";

import { AiFillDownCircle } from "react-icons/ai";

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
        style={{
          backgroundImage: `url(https://drakes-portfolio.s3-us-west-2.amazonaws.com/img/forest-1920.jpg)`,
        }}
      >
        <div className="container-fluid rounded headerText">
          <div className="row justify-content-center">
            <div className="col-sm text-center">
              <h1 className="display-3 headerName">DRAKE GREEOTT</h1>
            </div>
          </div>
          <div className="row text-center ">
            <div className="col-sm ">
              <Typer className="headerTyper"
                dataText={["Software Developer", "Welcome to my website!"]}
              />
            </div>
          </div>
          <div className="row text-center m-5">
            <div className="col-sm">
              <a href="#section1" className="downArrow">
                <AiFillDownCircle size={50} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
