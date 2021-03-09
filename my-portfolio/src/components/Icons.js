import React, { Component } from "react";
import "../css/Icons.css";



class MediaIcons extends Component {

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
          href="https://drakes-portfolio.s3-us-west-2.amazonaws.com/documents/Resume_DG.pdf"
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
