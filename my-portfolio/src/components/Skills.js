import React, { Component } from "react";
import "../css/Skills.css";
import { Button } from "./Button.js";

import { FaHtml5, FaJsSquare, FaJava, 
        FaCss3Alt, FaPython, FaWordpress,
        FaDrupal, FaReact, FaAws } from 'react-icons/fa';
import { SiMysql, SiVmware, SiRedux } from "react-icons/si";


class Skills extends Component {
  render() {
    return (
      <div className="section" id="skills">
        <div className="container-fluid text-center mb-5">
          <h1 className="title">SKILLS</h1>

          <div className="row mt-4">
            <div className="col-sm-6">
              <h5>Programming Languages</h5>
            </div>
            <div className="col-sm-6">
              <h5>Scripting Languages</h5>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-6">
                <FaHtml5 size={40} />
                <FaCss3Alt size={40} />
                <SiMysql size={40} />
                <FaJava size={40} />
            </div>
            <div className="col-sm-6">
                <FaJsSquare size={40} />
                <FaPython size={40}/>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-sm-6">
              <h5>Tools & Labraries</h5>
            </div>
            <div className="col-sm-6">
              <h5>CMS Platforms</h5>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-6">
                <SiRedux size={40} />
                <FaReact size={40} />
                <FaAws size={40} />
                <SiVmware size={40} />
            </div>
            <div className="col-sm-6">
                <FaWordpress size={40} />
                <FaDrupal size={40} />
            </div>
          </div>
          <div className="col-sm-6">
              
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
