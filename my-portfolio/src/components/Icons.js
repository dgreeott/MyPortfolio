import React, { Component } from "react";
import "../css/Icons.css";

class MediaIcons extends Component {
  render() {
    return (
      <div className="icon-bar">
        <div className="row pb-2">
  
          <a
            className="icons-mail"
            href="mailto:drake.greeott@gmail.com"
            target="__blank"
            title="Email"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <div className="row pb-2">
          <a
            className="icons-linkedin"
            href="https://www.linkedin.com/in/drakegreeott/"
            target="__blank"
            title="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="row pb-2">
          <a
            className="icons-github"
            href="https://github.com/dgreeott"
            target="__blank"
            title="Github"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div className="row pb-2">
          <a
            className="icons-resume"
            href="https://drakes-portfolio.s3-us-west-2.amazonaws.com/documents/Resume_DG.pdf"
            target="__blank"
            title="Resume"
          >
            <i className="far fa-file"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default MediaIcons;
