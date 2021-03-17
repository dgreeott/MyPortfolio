import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <>
        <div className="container-fluid about">
          <div className="row justify-content-center m-5">
            <div className="row justify-content-center m-3">
              <div className="col-sm text-center">
                <h1 className="display-4">About Me</h1>
              </div>
            </div>

            <div className="row justify-content-center mb-5">
              <div className="col-sm-8 text-center">
                <p className="lead text-justify">
                  I graduated from the Metropolitan State University of Denver
                  with a Bachelor’s Degree in Computer Information Systems, a
                  concentration in Application Development, and a concentration
                  in International Business. Over the last couple of years, I
                  have gained experience with development through classes,
                  personal projects, and side work. I have worked with HTML,
                  CSS, and Javascript while utilizing frameworks and libraries
                  such as Bootstrap and ReactJS. Futhermore, I have done
                  projects with content management systems such as WordPress and
                  Drupal8. Other languages I have worked with are Java
                  and Python. Also, am adequate with MySQL and creating tables,
                  pushing and pulling data, and querying information from a
                  database.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
