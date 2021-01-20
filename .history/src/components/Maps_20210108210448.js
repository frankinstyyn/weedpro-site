import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.'
}

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        style={mapStyles}
        zoom={18}
        initialCenter={{
            lat: 52.913040,
            lng: -1.392890
            }}
        >
        <Marker />
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAxn-Y1QfWBwdg4q6J7N10ihenW_uRcFIE'
})(MapContainer);

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
//     apikey: 'AIzaSyAxn-Y1QfWBwdg4q6J7N10ihenW_uRcFIE'
// })(Map);
