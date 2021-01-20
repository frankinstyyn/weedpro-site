import React, { Component } from 'react'
import {Map, GoogleApiWrapper} from 'google-maps-react'

export class Maps extends Component {
    render() {
        return (
            <Map
          google={this.props.google}
          zoom={8}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
        );
    }
}

export default GoogleApiWrapper({
    apikey: 'AIzaSyAxn-Y1QfWBwdg4q6J7N10ihenW_uRcFIE'
});
