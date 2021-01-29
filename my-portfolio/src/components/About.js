import {React, Component } from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import Footer from "./Footer";
import "../css/About.css"

class About extends Component {
  render() {
    return (
      <>
      <div className="section mb-5" id="about">
        <div className="container pt-5">
          <div className="row justify-content-center mb-5">
            <h1>ABOUT ME</h1>
          </div>
        </div>
  
        <div className="row justify-content-center">
          <div className="col-sm-6">
            <h1>Hello</h1>
          </div>
          <div className="col-sm-6">
            <MapContainer
              center={[39.7432, -105.0063]}
              zoom={14}
              scrollWheelZoom={false}
              size={100}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[39.7432, -105.0063]}>
                <Popup>
                  This is the location of where I grauated from!
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
      <Footer />
      </>
    );
  }
}

export default About;
