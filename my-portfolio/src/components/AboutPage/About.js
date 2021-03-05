import { React, Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./About.css";

class About extends Component {
  render() {
    return (
      <>
        <div className="container-fluid mb-5">
          <div className="row justify-content-center m-4">
            <h1 classnAME="text-center">ABOUT ME</h1>
          </div>

          <div className="row text-center m-4">
            <div className="col-sm">
              <h1>Hello</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
              <MapContainer
                center={[40.1672, -105.1019]}
                zoom={13}
                scrollWheelZoom={false}
                size={100}
              >
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[40.1672, -105.1019]}>
                  <Popup>Hometown!</Popup>
                </Marker>
              </MapContainer>
            </div>
            <div className="col-sm-2"></div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
