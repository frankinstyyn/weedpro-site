import React, { Component } from 'react'
import {Map, GoogleApiWrapper} from 'google-maps-react'

export class Maps extends Component {
    render() {
        return (
            <Maps
                google={this.props.google}
            />
        );
    }
}

export default Maps({
    apikey: 'AIzaSyAxn-Y1QfWBwdg4q6J7N10ihenW_uRcFIE'
});
