import React, { Component } from 'react'
import prepWork from '../images/prepWork.jpg'
import initWork from '../images/initialClean.jpg'
import finalFinish from '../images/finalFinish.jpg'

export class WaysOfWorking extends Component {
    render() {
        return (
            <div class="services">
            <div class="servicesHead">
                <h1>Our Ways of Working EVERY TIME!</h1>
                <h5>Our simple, effective and time saving approach means we achieve cleanliness, speed and complete satisfaction</h5>
                    <p className="underline"> </p>
                </div>
                <div className="wowRow">
                    <div className="col-sm-12 col-md-4">
                            <h5>Job Preparation</h5>
                            <img className="wowImage" src={prepWork} alt="A pile of debris for the preperation work for the job"/>
                            <p>We complete a thorough inspection of the work area, the start the initial top layer clean before choosing the correct equipment to finish the job with a deep, lasting clean</p>
                    </div>
                    <div className="col-sm-12 col-md-4">
                            <h5>Deep Clean</h5>
                            <img className="wowImage" src={initWork} alt="A westermann cleaner with a cleared pile of debris"/>
                            <p>Next the cleaning begins, using an environmentally friendly powerful Westermann cleaner, no water or nasty chemicals are needed. Half the mess, half the time, half the cost</p>
                    </div>
                    <div className="col-sm-12 col-md-4">
                            <h5>Lasting Clean</h5>
                            <img className="wowImage" src={finalFinish} alt="A clean finish on block paving"/>
                            <p>The cleaning is complete and we'll complete a final inspection of the area to ensure a high quality finish with 100% customer satisfaction<span id="completedWork"></span></p>
                    </div>               
                </div>
            </div>
        )
    }
}

export default WaysOfWorking
