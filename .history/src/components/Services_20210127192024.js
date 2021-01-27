import React, { Component } from 'react'

export class Services extends Component {
    render() {
        return (
            <div className="services">
                <div class="servicesHead">
                <h1>Services</h1>
                <h5>Eco friendly cleaning services in Derby and Derbyshire</h5>
                    <p className="underline"> </p>
                    </div>
            <div className="row">
                    <div className="col-sm-4 servicesImage one">
                        <div class="servicesText">
                        <h5>Block Paving</h5>
                            <p>Restore block paving to former glory without the mess of using water</p>
                            </div>
                </div>
                    <div className="col-sm-4 servicesImage two">
                        <div class="servicesText">
                        <h5>Guttering</h5>
                        <p>Using our unique high performance SkyVac equipment, we clear gutters with no mess in half the time</p>
                        </div>
                </div>
                    <div className="col-sm-4 servicesImage three">
                        <div class="servicesText">
                            <h5>Patios</h5>
                            <p>Our bespoke, high powered jet wash cleaning system will restore your tarmac and bring it back to life</p>
                        </div>
                    </div>                    
                </div>
                <div className="row">
                    <div className="col-sm-4 servicesImage five">
                        <div class="servicesText">
                        <h5>Windows</h5>
                        <p>Using the “Wash N Blow” system, we use pure water followed by an airdry finish, resulting in streak free windows, and completely dry frames. This service is currently only offered by Weedpro UK</p>
                        </div>
                    </div>
                    <div className="col-sm-4 servicesImage four">
                        <div class="servicesText">
                        <h5>Tarmac</h5>
                        <p></p>
                        </div>
                </div>
                    <div className="col-sm-4 servicesImage six">
                        <div class="servicesText">
                        <h5>Cleaning</h5>
                        <p>WeedPro UK are the only company in Derbyshire to offer the unique and powerful "Wash N Blow" cleaning system leaving Fascia's, Soffit's, Window's and Guttering like new</p>
                        </div>
                    </div>                    
                </div>
                <div className="row">
                    <div className="col-sm-4 servicesImage seven">
                        <div class="servicesText">
                            <h5>Other Jobs</h5>
                            <p id="waysOfWorking">We provide many other outdoor services so get in touch for a free quote</p>
                        </div>
                </div>              
                </div>
                        </div>
        )
    }
}

export default Services