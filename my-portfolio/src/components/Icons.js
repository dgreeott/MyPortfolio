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
        >
          <i class="fas fa-envelope"></i>
        </a>
        <a
          className="icons-linkedin"
          href="https://www.linkedin.com/in/drakegreeott/"
          target="__blank"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a
          className="icons-github"
          href="https://github.com/dgreeott"
          target="__blank"
        >
          <i class="fab fa-github"></i>
        </a>
      </div>    
    );
  }
}

export default MediaIcons;
