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
          <div className="col-sm-2"></div>
            <div className="col-sm-8 text-justify">
            <p className="lead">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </p>
            </div>
            <div className="col-sm-2"></div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-2"></div>
            <div className="col-sm-8 justify-content-center">
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
