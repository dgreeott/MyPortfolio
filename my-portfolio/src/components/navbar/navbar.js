import React, { Component } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import "./Navbar.css";
import Resume from '../Resume';

export const MenuItems = [
  {
      title: 'HOME',
      url: '/',
      cName: 'nav-links'
  },
  {
      title: 'PROJECTS',
      url: '/projects',
      cName: 'nav-links'
  },
  {
    title: 'ABOUT',
    url: '/about',
    cName: 'nav-links'
  },
  {
      title: 'CONTACT',
      url: '/contact',
      cName: 'nav-links'
  },
  
]


class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  

  render() {
    return (
        <nav className="navbarItems sticky-top">
            <Resume />
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
