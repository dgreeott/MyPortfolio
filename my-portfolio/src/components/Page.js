import {React, Component} from "react";
import Navbar from "../components/Navbar/Navbar";

import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

class Page extends Component {
    render() {
        return (
            <div className="page">
                <Navbar />
                <Projects />
                <About />
                <Contact />
                <Footer />
            </div>
          );
    }
     
}

export default Page;
