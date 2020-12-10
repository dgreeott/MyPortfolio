import React, { Component } from 'react';
import { menuItems } from './menuItems';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbarItems">
                <h1 className="navbar-logo">React<i className=</h1>
                <div className="menu-icon">

                </div>
                <ul>
                    {menuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <a className={menuItems.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>    
                        )
                    })}                    
                </ul>
            </nav>
        )
    }
}


export default Navbar