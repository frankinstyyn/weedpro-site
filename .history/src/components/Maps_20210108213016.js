import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

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
        <div>Hey world</div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAxn-Y1QfWBwdg4q6J7N10ihenW_uRcFIE'
})(MapContainer);


    //   <Map
    //     google={this.props.google}
    //     style={mapStyles}
    //     zoom={15}
    //     initialCenter={{
    //         lat: 52.913697,
    //         lng: -1.390196
    //         }}
    //     >
    //     <InfoWindow />
    //     <Marker />
    //     </Map>