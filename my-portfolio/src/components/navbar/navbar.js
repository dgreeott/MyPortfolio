import React, { Component } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { MenuItems } from "./MenuItems";
import { Button } from "../Button.js";
import "./Navbar.css";
import Modal from '../Resume';

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };


  render() {
    return (
        <nav className="navbarItems">
            <Modal />
            <Button>Resume</Button>
            
            <i class="fas fa-envelope"></i>
            <i class="fab fa-linkedin"></i>
            <i class="fab fa-github"></i>
            
          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link smooth className={item.cName} to={item.url}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          
        </nav>
    );
  }
}

export default Navbar;
