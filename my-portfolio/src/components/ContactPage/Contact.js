import React, { Component } from "react";
import axios from "axios";
import { Button } from "../Button";
import "./Contact.css";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      status: "Submit",
    };
  }

  handleChange(event) {
    const field = event.target.id;
    if (field === "name") {
      this.setState({ name: event.target.value });
    } else if (field === "email") {
      this.setState({ email: event.target.value });
    } else if (field === "message") {
      this.setState({ message: event.target.value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ status: "Sending" });
    axios({
      method: "POST",
      url: "http://localhost:5000/contact",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "sent") {
        alert("Message Sent");
        this.setState({ name: "", email: "", message: "", status: "Submit" });
      } else if (response.data.status === "failed") {
        alert("Message Failed");
      }
    });
  }


  resetForm() {
    this.setState({ name: "", email: "", subject: "", message: "" });
  }

  render() {
    return (
      <>
        <div className="container-fluid mb-5">
          <div className="row text-center m-4">
            <div className="container ">
              <h1 className="title">CONTACT ME!</h1>
              <h6>I WILL GET BACK TO YOU AS SOON AS POSSIBLE!</h6>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-sm justify-content-center mb-5">
              <form
                className="text-center"
                id="contactForm"
                onSubmit={this.handleSubmit.bind(this)}
                method="POST"
              >
                <div className="formGroup">
                  <h5 className="text-center">NAME</h5>
                  <input
                    placeholder="Name"
                    id="name"
                    type="text"
                    className="formControl rounded m-4"
                    required
                    value={this.state.name}
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
                <div className="formGroup">
                  <h5>EMAIL</h5>
                  <input
                    placeholder="Email"
                    id="email"
                    type="email"
                    className="formControl rounded m-4"
                    aria-describedby="emailHelp"
                    required
                    value={this.state.email}
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
                <div className="formGroup">
                  <h5>MESSAGE</h5>
                  <input
                    placeholder="Message"
                    id="message"
                    type="text"
                    className="formMessage rounded m-4"
                    required
                    value={this.state.message}
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
                <div className="text-center">
                  <Button className="contactButton">SUBMIT</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
