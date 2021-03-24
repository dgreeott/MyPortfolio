import React from "react";
import FadeInText from "../FadeIn";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="container-fluid about">
        <div className="row justify-content-center mb-5">
          <div className="row justify-content-center mt-5">
            <div className="col-sm text-center ">
              <FadeInText>
                <h1 className="display-1 text-center mb-5">About Me</h1>
              </FadeInText>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-sm-10 text-center ">
              <FadeInText>
                <p className="aboutText text-justify m-3 mb-5">
                  I graduated from the Metropolitan State University of Denver
                  with a Bachelor’s Degree in Computer Information Systems, a
                  concentration in Application Development, and a concentration
                  in International Business. Over the last couple of years, I
                  have gained experience with development through classes,
                  personal projects, and side work. I have worked with HTML,
                  CSS, and Javascript while utilizing frameworks and libraries
                  such as Bootstrap and ReactJS. Futhermore, I have done
                  projects with content management systems such as WordPress and
                  Drupal8. Other languages I have worked with are Java and
                  Python. Also, am adequate with MySQL and creating tables,
                  pushing and pulling data, and querying information from a
                  database.
                </p>
              </FadeInText>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
