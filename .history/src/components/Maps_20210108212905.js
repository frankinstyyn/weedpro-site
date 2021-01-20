import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

// const mapStyles = {
//   width: '100%',
//   height: '100%'
// };

export class MapContainer extends Component {
  render() {
    return (
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
                <div className="">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9623.743245168494!2d-1.3901329!3d52.913583!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7142a1e295e44313!2sDerby%20Golf%20Centre!5e0!3m2!1sen!2suk!4v1610141224530!5m2!1sen!2suk" width="600" height="450" frameborder="0" style="border:0;" aria-hidden="false" tabindex="0"></iframe>        </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAxn-Y1QfWBwdg4q6J7N10ihenW_uRcFIE'
})(MapContainer);

