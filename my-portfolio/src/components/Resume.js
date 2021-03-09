import React, { Component } from "react";

import { Button } from "./Button.js";

class Resume extends Component {

  render() {
    return (
      <div>
        <a
          href="https://drakes-portfolio.s3-us-west-2.amazonaws.com/documents/Resume_DG.pdf"
          target="__blank"
          title="Resume"
        >
          <Button>Resume</Button>
        </a>
      </div>
    );
  }
}

export default Resume;
