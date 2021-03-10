import React, { Component } from "react";
import axios from "axios";
import "./Contact.css";

import { IconContext } from "react-icons";
import { FiPhone } from "react-icons/fi";
import { MdLocationOn, MdEmail } from "react-icons/md";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      status: "Submit",
    };
  }

  handleChange(event) {
    const field = event.target.id;
    if (field === "firstName") {
      this.setState({ firstName: event.target.value });
    } else if (field === "lastName") {
      this.setState({ lastName: event.target.value });
    } else if (field === "email") {
      this.setState({ email: event.target.value });
    } else if (field === "phone") {
      this.setState({ phone: event.target.value });
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
        <IconContext.Provider value={{ color: "#ffff" }}>
          <div className="container-fluid">
            <div className="row justify-content-center m-5">
              <div className="row justify-content-center m-5">
                <div classNamne="col-sm text-center">
                  <h1 className="display-4">Contact Me!</h1>
                </div>
              </div>

              <div className="container formContainer">
                <div className="row p-2">
                  <div className="col-sm-4 info">
                    <div className="row m-4 mt-5">
                      <h3 className="mb-3">Contact Information</h3>
                      <h6 className="mb-5">
                        I will get back to you as soon as possible!
                      </h6>
                    </div>
                    <div className="row m-4 mt-5">
                      <FiPhone size={25} />
                      <a href="tel:303-506-23-75" className="text-light">
                        <h5 className="ml-3">303-506-2375</h5>
                      </a>
                    </div>
                    <div className="row m-4 mt-5">
                      <MdEmail size={25} />
                      <a
                        href="mailto:drake.greeott@gmail.com"
                        className="text-light"
                      >
                        <h5 className="ml-3">drake.greeott@gmail.com</h5>
                      </a>
                    </div>
                    <div className="row m-4 mt-5">
                      <MdLocationOn size={25} />

                      <h5 className="ml-3">101 Grant St, Denver, Co</h5>
                    </div>
                  </div>
                  <div className="col-sm-8 form">
                    <form
                      className="m-5"
                      id="contactForm"
                      onSubmit={this.handleSubmit.bind(this)}
                      method="POST"
                    >
                      <div className="row mb-5">
                        <div className="formGroup">
                          <h5>First Name</h5>
                          <input
                            id="firstName"
                            type="text"
                            className="formControl"
                            required
                            value={this.state.firstName}
                            onChange={this.handleChange.bind(this)}
                          />
                        </div>
                        <div className="formGroup ml-4">
                          <h5>Last Name</h5>
                          <input
                            id="lastName"
                            type="text"
                            className="formControl"
                            required
                            value={this.state.lastName}
                            onChange={this.handleChange.bind(this)}
                          />
                        </div>
                      </div>
                      <div className="row mb-5">
                        <div className="formGroup">
                          <h5>Mail</h5>
                          <input
                            id="email"
                            type="email"
                            className="formControl rounded"
                            aria-describedby="emailHelp"
                            required
                            value={this.state.email}
                            onChange={this.handleChange.bind(this)}
                          />
                        </div>
                        <div className="formGroup ml-3">
                          <h5>Phone</h5>
                          <input
                            id="phone"
                            type="phone"
                            className="formControl"
                            aria-describedby="phoneHelp"
                            required
                            value={this.state.phone}
                            onChange={this.handleChange.bind(this)}
                          />
                        </div>
                      </div>
                      <div className="row mb-5">
                        <div className="formGroup">
                          <h5>Message</h5>
                          <input
                            placeholder="Write your message..."
                            id="message"
                            type="text"
                            className="formMessage rounded"
                            required
                            value={this.state.message}
                            onChange={this.handleChange.bind(this)}
                          />
                        </div>
                      </div>
                      <div className="row justify-content-end mb-4 float-right">
                        <div className="col-sm ">
                          <button className="btn formBtn">Send Message</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </IconContext.Provider>
      </>
    );
  }
}

export default Contact;
