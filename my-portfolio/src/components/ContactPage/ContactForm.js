import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const REACT_PROJECT_ID = process.env.REACT_PROJECT_ID;

function ContactForm() {
  const [state, handleSubmit] = useForm("contactForm");
  if (state.succeeded) {
    return (
      <>
        <div className="row m-5 justify-content-center">
          <div className="col-sm text-center">
            <h1>Thank you for getting in touch!</h1>
          </div>
        </div>
        <div className="row m-5 justify-content-center">
          <div className="col-sm text-center">
            <h3>
              I appreciate you contacting me with this form, and I will get back
              to you as soon as possible.
            </h3>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm text-center">
            <h4>Have a great day!</h4>
          </div>
        </div>
      </>
    );
  } else if (state.error) {
    return (
      <>
        <div className="row m-5 justify-content-center">
          <div className="col-sm text-center">
            <h1>Thank you for getting in touch!</h1>
          </div>
        </div>
        <div className="row m-5 justify-content-center">
          <div className="col-sm text-center">
            <h3>
              I appreciate you contacting me with this form, and I will get back
              to you as soon as possible.
            </h3>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm text-center">
            <h4>Have a great day!</h4>
          </div>
        </div>
      </>
    );
  }

  return (
    <form
      className="m-3"
      id="contactForm"
      onSubmit={handleSubmit}
      action={`"https://formspree.io/p/${REACT_PROJECT_ID}/f/contactForm"`}
      method="POST"
    >
      <div className="row mb-5">
        <div className="col-sm-6">
          <div className="formGroup">
            <h5>First Name</h5>
            <input
              id="firstName"
              type="text"
              name="firstName"
              className="formControl"
              required
            />
            <ValidationError
              prefix="FirstName"
              field="firstName"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="formGroup">
            <h5>Last Name</h5>
            <input
              id="lastName"
              type="text"
              name="lastName"
              className="formControl"
              required
            />
            <ValidationError
              prefix="LastName"
              field="lastName"
              errors={state.errors}
            />
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-sm-6">
          <div className="formGroup">
            <h5>Mail</h5>
            <input
              id="email"
              type="email"
              name="email"
              className="formControl"
              aria-describedby="emailHelp"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="formGroup">
            <h5>Phone</h5>
            <input
              id="phone"
              type="phone"
              name="phone"
              className="formControl"
              aria-describedby="phoneHelp"
              required
            />
          </div>
        </div>
      </div>
      <div className="row mb-4">
      <div className="col-sm-12">
        <div className="formGroup">
          <h5>Message</h5>
          <input
            placeholder="Write your message..."
            id="message"
            type="text"
            name="message"
            className="formMessage rounded"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
      </div>
      </div>
      <div className="row justify-content-end mb-4 float-right">
        <div className="col-sm ">
          <button
            className="btn formBtn"
            type="submit"
            disabled={state.submitting}
          >
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
}
export default ContactForm;
