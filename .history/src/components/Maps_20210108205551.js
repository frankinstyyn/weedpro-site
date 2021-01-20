import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 52.913040,
  lng: -1.392890,
}

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        zoom={10}
 initialCenter={{
 lat: 35.5496939,
 lng: -120.7060049
 }}
        />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAxn-Y1QfWBwdg4q6J7N10ihenW_uRcFIE'
})(Map);


// import React, { Component } from 'react'
// import {Map, GoogleApiWrapper, Marker} from 'google-maps-react'

// export class Maps extends Component {
//     render() {
//         return (
//             <Map
//           google={this.props.google}
//           zoom={8}
//           initialCenter={{ lat: 47.444, lng: -122.176}}
//         />
//         );
//     }
// }

// export default GoogleApiWrapper({
//     apikey: 'AIzaSyAxn-AIzaSyAxn-Y1QfWBwdg4q6J7N10ihenW_uRcFIE'
// })(Map);
