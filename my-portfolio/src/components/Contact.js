import React, { Component } from "react";
import axios from 'axios';

import '../components/ContactPage/ContactForm.css';

class Contact extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            muessage: ''
        }
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onSubjectChange(event) {
        this.setState({subject: event.target.value})
    }

    onMsgChange(event) {
        this.setState({message: event.target.value})
    }

    submitEmail(e) {
        e.preventDefault();
        axios({
            method: "POST",
            url: "/send",
            data: this.state
        }).then((response) => {
            if (response.data.status === 'sucess') {
                alert("Message Sent.");
                this.resetForm()
            }else if (response.data.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    }

    resetForm() {
        this.setState({name: '', email: '', subject:'', 
        message: ''})
    }
  
    render() {
    return (
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="container">
                <h2 className="title">Contact Me!</h2>
                <p>
                  File out the contact form below, and I will get back to you as
                  soon as possible.
                </p>
                <form
                  id="contactForm"
                  onSubmit={this.submitEmail.bind(this)}
                  method="POST"
                >
                  <div className="formGroup">
                    <div className="row">
                      <div className="col-md-6">
                        <input
                          placeholder="Name"
                          id="name"
                          type="text"
                          className="formControl"
                          required
                          value={this.state.name}
                          onChange={this.onNameChange.bind(this)}
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          placeholder="Email"
                          id="email"
                          type="email"
                          className="formControl"
                          aria-describeby="emailHelp"
                          required
                          value={this.state.email}
                          onChange={this.onEmailChange.bind(this)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="formGroup">
                    <input
                      placeholder="Subject"
                      id="subject"
                      type="text"
                      className="formControl"
                      required
                      value={this.state.subject}
                      onChange={this.onSubjectChange.bind(this)}
                    />
                  </div>
                  <div className="formGroup">
                    <input
                      placeholder="Message"
                      id="message"
                      type="text"
                      className="formControl"
                      required
                      value={this.state.message}
                      onChange={this.onMsgChange.bind(this)}
                    />
                  </div>
                  <button type="submit" className="primary-btn submit"></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Contact;
