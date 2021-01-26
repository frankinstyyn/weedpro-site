import React, { Component } from 'react'
import prepWork from '../images/prepWork.jpg'
import Div from 'react'

export class WaysOfWorking extends Component {
    render() {
        return (
            <div class="services">
            <div class="servicesHead">
                <h1>Our Ways of Working</h1>
                <h5>Our simple, effective and time saving approach means we achieve cleanliness, speed and complete satisfaction</h5>
                    <p className="underline"> </p>
                </div>
                <div className="wowRow">
                    <div className="col-sm-12 col-md-4">
                            <h5>Prepration</h5>
                            <img className="wowImage" src={prepWork} alt="A pile of debris for the preperation work for the job"/>
                            <p>We complete a thorough inspection of the work area and what's required, complete an initial top layer clean before choosing the correct equipment to finish the job</p>
                    </div>
                    <div className="col-sm-12 col-md-4">
                            <h5>Initial Clean</h5>
                            <img className="wowImage" src={prepWork} alt="A pile of debris for the preperation work for the job"/>
                            <p>We complete a thorough inspection of the work that's required, complete an initial top layer clean before choosing the correct equipment to complete the job</p>
                    </div>
                    <div className="col-sm-12 col-md-4">
                            <h5>Deep Clean</h5>
                            <img className="wowImage" src={prepWork} alt="A pile of debris for the preperation work for the job"/>
                            <p>We complete a thorough inspection of the work that's required, complete an initial top layer clean before choosing the correct equipment to complete the job</p>
                </div>
                                     
                </div>
                </div>
        )
    }
}

export default WaysOfWorking
