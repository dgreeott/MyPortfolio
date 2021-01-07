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
          <div className="row justify-content-center">
            <div className="col-sm">
                <FaHtml5 size={40} className="m-3"/>
                <FaCss3Alt size={40} className="m-3" />
                <SiMysql size={40} className="m-3" />
                <FaJsSquare size={40} className="m-3" />
                <FaPython size={40} className="m-3" />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm">
                <FaReact size={40} className="m-3" />
                <FaWordpress size={40} className="m-3" />
                <FaDrupal size={40} className="m-3" />
                <FaJava size={40} className="m-3" />
            </div>
          </div>
        </div> 
      </div>
    );
  }
}

export default Skills;
