import React, { Component } from "react";
import Modal from "./Modal.js";

import { Button } from "./Button.js";

import "../css/Resume.css";

import Doc from "../Resume_DG.pdf";

class Resume extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      name: "",
      modalInputName: "",
    };
  }

  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    this.setState({ name: this.state.modalInputName });
    this.modalClose();
  }

  modalOpen() {
    this.setState({ modal: true });
  }

  modalClose() {
    this.setState({
      modalInputName: "",
      modal: false,
    });
  }

  onResumeClick() {
    window.open(Doc);
  }

  render() {
    return (
      <div>
      <Button><a onClick={(e) => this.onResumeClick(e)}>Resume</a></Button>
      </div>
      
    );
  }
}

export default Resume;
