import React, { Component } from "react";

import { Button } from "./Button.js";

import "../css/Resume.css";

import Doc from "../Resume_DG.pdf";

class Resume extends Component {
  

  onResumeClick() {
    window.open(Doc);
  }

  render() {
    return (
      <div>
      <a className="mr-5" onClick={(e) => this.onResumeClick(e)}><Button>Resume</Button></a>
      </div>
      
    );
  }
}

export default Resume;
