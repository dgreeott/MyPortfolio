import React from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function About() {
  return (
    <div className="section m-5 pt-5" id="about">
      <div className="container pt-5">
        <div className="row justify-content-center">
          <h1>ABOUT ME</h1>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-sm-6">
          <h1>Hello</h1>
        </div>
        <div className="col-sm-6">
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
            size={100}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default About;
