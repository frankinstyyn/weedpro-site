import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
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
