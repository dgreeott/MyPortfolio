import React, { Component } from "react";
import "../css/Icons.css";

import Doc from "../Resume_DG.pdf";

class MediaIcons extends Component {

  onResumeClick() {
    window.open(Doc);
  }

  render() {
    return (
      <div class="icon-bar">
        <a
          className="icons-mail"
          href="mailto:drake.greeott@gmail.com"
          target="__blank"
          title="Email"
        >
          <i class="fas fa-envelope"></i>
        </a>
        <a
          className="icons-linkedin"
          href="https://www.linkedin.com/in/drakegreeott/"
          target="__blank"
          title="LinkedIn"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a
          className="icons-github"
          href="https://github.com/dgreeott"
          target="__blank"
          title="Github"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          className="icons-resume"
          onClick={(e) => this.onResumeClick(e)}
          target="__blank"
          title="Resume"
        >
          <i class="far fa-file"></i>
        </a>
      </div>    
    );
  }
}

export default MediaIcons;
