import React, { Component } from 'react'
import prepWork from '../images/prepWork.jpg'
import Img from 'react-icons'

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
                    <div className="col-sm-4 servicesImage one">
                        <div class="servicesText">
                            <h5>Prepration</h5>
                            <Img><img src={prepWork} alt="A pile of debris for the preperation work for the job"/></Img>
                            <p>We complete a thorough inspection of the work that's required, complete an initial top layer clean before choosing the correct equipment to complete the job</p>
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
                </div>
        )
    }
}

export default WaysOfWorking
