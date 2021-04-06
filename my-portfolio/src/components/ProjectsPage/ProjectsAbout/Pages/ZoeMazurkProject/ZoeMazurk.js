import React, { Component } from "react";
import { Link } from "react-router-dom";
import ZoeMazurkVideo from "./ZoeMazurkVideo";
import "../../../Projects.css";

import { FaHtml5, FaJsSquare, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiBootstrap } from "react-icons/si";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

class ZoeMazurkProject extends Component {
  render() {
    return (
      <>
        <div className="container-fluid mb-5">
          <div className="row justify-content-center m-5">
            <div className="col-sm text-center">
              <h1 className="display-3 text-center">Zoe Mazurk Portfolio</h1>
            </div>
          </div>
          <div className="row justify-conent-center m-4">
            <div className="col-sm-2 text-center align-self-center">
              <Link
                className="icon-arrows"
                activeClassName="icon-arrows-active"
                to="/shoppingcart"
                title="Shopping Cart"
              >
                <IoIosArrowBack size={50} />
              </Link>
            </div>
            <div className="col-sm-8 text-center">
              <ZoeMazurkVideo />
            </div>
            <div className="col-sm-2 text-center align-self-center">
              <Link
                className="icon-arrows"
                to="/simplyhome"
                title="Simply Home Consignment"
              >
                <IoIosArrowForward size={50} />
              </Link>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm text-center ">
              <a
                href="https://www.zoemazurk.com"
                target="__blank"
                title="Zoe Mazurk"
              >
                <i class="fas fa-link project"></i>
              </a>
              <a href="https://github.com/dgreeott/zoe-mazurk" target="__blank">
                <i className="fab fa-github project"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-conent-center">
            <div className="col-sm text-center">
              <div className="row justify-conent-center">
                <div className="col-sm text-center mb-4">
                  <h2>Techinal Sheet</h2>
                </div>
              </div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-sm">
                    <FaHtml5 size={40} />
                  </div>
                  <div className="col-sm">
                    <FaCss3Alt size={40} />
                  </div>
                  <div className="col-sm">
                    <FaJsSquare size={40} />
                  </div>
                  <div className="col-sm">
                    <FaReact size={40} />
                  </div>
                  <div className="col-sm">
                    <SiBootstrap size={40} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-conent-center mt-5">
            <div className="col-sm text-center">
              <h2>About This Project</h2>
            </div>
          </div>

          <hr></hr>
          <div className="row justify-content-center">
            <div className="col-sm-8 text-justify">
              <div className="row justify-content-center mb-5">
                <p className="lead">
                  The ZoeMazurk portfolio is my first React project. This
                  project is still under production due to waiting for more
                  content from my friend. Furthermore, this project was created
                  to help a friend of mine display their artwork for potential
                  clients. My friend wanted a clean and straightforward site so
                  that people visiting it would be able to easily find what they
                  want. This project is to give you and idea of where I started
                  with my first React App.
                </p>
              </div>

              <div className="row justify-content-center mb-5">
                <h2 className="text-center">More to come!</h2>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ZoeMazurkProject;
