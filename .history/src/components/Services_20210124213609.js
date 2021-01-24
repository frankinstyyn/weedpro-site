import React, { Component } from 'react'

export class Services extends Component {
    render() {
        return (
            <div className="servicesContainer">
                <div class="servicesTitle">
                    <h1>Services</h1>
                </div>
            <div className="row">
                    <div className="col-sm-4 servicesImage">
                        <h5>Block Paving</h5>
                </div>
                    <div className="col-sm-4 servicesImage">
                        <h5>Guttering and Facias</h5>
                </div>
                    <div className="col-sm-4 servicesImage">
                        <h5>Patios</h5>
                </div>
                </div>
                </div>
        )
    }
}

export default Services
