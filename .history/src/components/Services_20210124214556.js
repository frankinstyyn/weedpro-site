import React, { Component } from 'react'

export class Services extends Component {
    render() {
        return (
            <div className="services">
                <h1>Services</h1>
                <h5 className="h5underline">Eco friendly cleaning services in Derby and Derbyshire</h5>
            <div className="row">
                    <div className="col-sm-4 servicesImage bgImage1">
                        <h5>Block Paving</h5>
                </div>
                    <div className="col-sm-4 servicesImage bgImage2">
                        <h5>Guttering and Facias</h5>
                </div>
                    <div className="col-sm-4 servicesImage bgImage3">
                        <h5>Patios</h5>
                </div>
                </div>
                </div>
        )
    }
}

export default Services
