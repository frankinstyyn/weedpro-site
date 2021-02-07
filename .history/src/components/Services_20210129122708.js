import React, { Component } from 'react'

export class Services extends Component {
    render() {
        return (
            <div className="services">
                <div class="servicesHead">
                <h1>Services</h1>
                <h5>Eco-friendly cleaning services in Derby and Derbyshire</h5>
                    <p className="underline"> </p>
                    </div>
            <div className="row">
                    <div className="col-sm-4 servicesImage one">
                        <div class="servicesText">
                        <h5>Block Paving</h5>
                            <p>Restore block paving to former glory With or Without water</p>
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
                            <p>Our bespoke, high powered jet wash cleaning system will restore your patio and bring it back to life!</p>
                        </div>
                    </div>                    
                </div>
                <div className="row">
                    <div className="col-sm-4 servicesImage five">
                        <div class="servicesText">
                        <h5>Windows</h5>
                        <p>Using the “Wash N Blow” system, we use pure water followed by a warm blow dry finish, resulting in streak free windows, and completely dry frames. This service is currently only offered by Weedpro UK</p>
                        </div>
                    </div>
                    <div className="col-sm-4 servicesImage four">
                        <div class="servicesText">
                        <h5>Tarmac</h5>
                        <p>Our Eco friendly Westermann cleaner avoids the use of nasty chemicals or water, leaving a sharp clean finish with less mess</p>
                        </div>
                </div>
                    <div className="col-sm-4 servicesImage six">
                        <div class="servicesText">
                        <h5>Cleaning</h5>
                        <p>Weedpro are also able to offer Soffit & Fascia cleaning using the latest high-tech equipment currently available in the UK</p>
                        </div>
                    </div>                    
                </div>
                <div className="row">
                    <div className="col-sm-4 servicesImage seven">
                        <div class="servicesText">
                            <h5>Other Jobs</h5>
                            <p id="waysOfWorking">We provide many other outdoor services so please get in touch for a free quotation!</p>
                        </div>
                </div>              
                </div>
                        </div>
        )
    }
}

export default Services