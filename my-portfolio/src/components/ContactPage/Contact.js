import React, { Component } from "react";
import { FormspreeProvider } from "@formspree/react";
/*import axios from "axios";*/
import "./Contact.css";
import ContacForm from "./ContactForm";

import { IconContext } from "react-icons";
import { FiPhone } from "react-icons/fi";
import { MdLocationOn, MdEmail } from "react-icons/md";

class Contact extends Component {
  render(pageProps) {
    return (
      <>
        <IconContext.Provider value={{ color: "#ffff" }}>
          <div className="container-fluid">
            <div className="row justify-content-center m-5">
              <div classNamne="col-sm text-center">
                <h1 className="display-4">Contact Me!</h1>
              </div>
            </div>
            <div className="row justify-content-center m-5">
              <div className="container formContainer">
                <div className="row p-2">
                  <div className="col-sm-4 info">
                    <div className="row m-4 mt-5">
                      <h3 className="mb-5">Contact Information</h3>
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
                  <FormspreeProvider project={"1631743260328198067"}>
                    <div className="col-sm-8 form">
                      <ContacForm />
                    </div>
                  </FormspreeProvider>
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
