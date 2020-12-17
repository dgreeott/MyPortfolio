import React, { Component } from "react";
import background from "./background.jpg"; // with import
import { Button } from "./Button.js";
import "../css/Header.css";

class Header extends Component {
  
	
	render() {
    return (
        <div className="section">
		<div className="container-fluid">
		<div className="row">
            <div class="jumbotron jumbotron-fluid">
              <div class="container-fluid text-center">
                <h1 class="display-4">Drake Greeott</h1>
                <h3 class="lead">Software Developer</h3>
              </div>
            </div>
          </div>
		  </div>
		  </div>

    );
  }
}

export default Header;
