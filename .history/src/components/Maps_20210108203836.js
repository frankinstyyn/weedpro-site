import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

// const mapStyles = {
//   width: '100%',
//   height: '100%'
// };

const Component = React.createClass({
  iframe: function () {
    return {
      __html: this.props.iframe
    }
  },

  render: function() {
    return (
      <div>
        <div dangerouslySetInnerHTML={ this.iframe() } />
      </div>
    );
  }
});

const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9623.743245168494!2d-1.3901329!3d52.913583!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879ee2dd075164f%3A0x7142a1e295e44313!2sDerby%20Golf%20Centre!5e0!3m2!1sen!2suk!4v1610137904105!5m2!1sen!2suk" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'; 

ReactDOM.render(
  <Component iframe={iframe} />,
  document.getElementById('container')
);

export class MapContainer extends Component {
  render() {
      return (
        <div>
        <div dangerouslySetInnerHTML={ this.iframe() } />
      </div>
    //   <Map
    //     google={this.props.google}
    //     zoom={14}
    //     style={mapStyles}
    //     initialCenter={
    //       {
    //         lat: -1.2884,
    //         lng: 36.8233
    //       }
    //     }
    //   />
    );
  }
}

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyAxn-Y1QfWBwdg4q6J7N10ihenW_uRcFIE'
// })(Map);


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
