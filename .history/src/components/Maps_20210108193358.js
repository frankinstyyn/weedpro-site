import React, { Component } from 'react'
import MapStyles from   

export class Maps extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
            />
        );
    }
}

export default Maps({
    apikey: 'AIzaSyAxn-Y1QfWBwdg4q6J7N10ihenW_uRcFIE'
})(MapContainer);
