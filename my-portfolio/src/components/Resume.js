import React, { Component } from "react";
import Modal from "./Modal.js";

import { Button } from "./Button.js";
import ResumeDoc from "./ResumeDoc";

import "../css/Resume.css";

import Doc from '../Resume_DG.pdf'

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

  
  render() {
    return (
      <div className="Resume">
        <a href="javascript:;" onClick={(e) => this.modalOpen(e)}>
          <Button>Resume</Button>
        </a>
        <Modal show={this.state.modal} handleClose={(e) => this.modalClose(e)}>
          <div>
          <ResumeDoc pdf={Doc} />
          </div>
          
          <h2>Hello Modal</h2>
          <div className="form-group">
            <label>Enter Name:</label>
            <input
              type="text"
              value={this.state.modalInputName}
              name="modalInputName"
              onChange={(e) => this.handleChange(e)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button onClick={(e) => this.handleSubmit(e)} type="button">
              Save
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Resume;
