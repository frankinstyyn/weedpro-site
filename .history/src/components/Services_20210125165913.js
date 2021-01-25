import React, { Component } from 'react'
import { SiMinutemailer } from "react-icons/si"

export class Services extends Component {
    render() {
        return (
            <div className="services">
                <h1>Services</h1>
                <h5 className="underline">Eco friendly cleaning services in Derby and Derbyshire</h5>
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
                        <p>Our Eco friendly Westermann cleaner avoids the use of nasty chemicals or water, leaving a sharp clean finish with less mess</p>
                        </div>
                    </div>                    
                </div>
                <div className="row">
                    <div className="col-sm-4 servicesImage four">
                        <div class="servicesText">
                        <h5>Tarmac</h5>
                            <p>Our bespoke, high powered jet wash cleaning system will restore your tarmac and bring it back to life</p>
                </div>
                    <div className="col-sm-4 servicesImage five">
                        <div class="servicesText">
                        <h5>Windows</h5>
                        <p>Using a pure water system followed by an airdry finish means a streak free window cleaning service offered only by us</p>
                        </div>
                </div>
                    <div className="col-sm-4 servicesImage six">
                        <div class="servicesText">
                        <h5>Other Jobs</h5>
                        <p>We provide many other services so get in touch for a free quote</p>
                        </div>
                    </div>                    
                </div>
                </div>
        )
    }
}

export default Services
