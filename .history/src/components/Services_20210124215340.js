import React, { Component } from 'react'

export class Services extends Component {
    render() {
        return (
            <div className="services">
                <h1>Services</h1>
                <h5 className="h5underline">Eco friendly cleaning services in Derby and Derbyshire</h5>
            <div className="row">
                    <div className="col-sm-4 servicesImage bgImage one">
                        <h5>Block Paving</h5>
                </div>
                    <div className="col-sm-4 servicesImage bgImage two">
                        <h5>Guttering and Facias</h5>
                </div>
                    <div className="col-sm-4 servicesImage bgImage three">
                        <h5>Patios</h5>
                    </div>                    
                </div>
                <div className="row">
                    <div className="col-sm-4 servicesImage bgImage four">
                        <h5>Tarmac</h5>
                </div>
                    <div className="col-sm-4 servicesImage bgImage five">
                        <h5>Windows</h5>
                </div>
                    <div className="col-sm-4 servicesImage bgImage six">
                        <h5>Other Jobs</h5>
                    </div>                    
                </div>
                </div>
        )
    }
}

export default Services
