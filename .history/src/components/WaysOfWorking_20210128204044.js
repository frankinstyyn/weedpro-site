import React, { Component } from 'react'
import prepWork from '../images/prepWork.jpg'
import initWork from '../images/initialClean.jpg'
import finalFinish from '../images/finalFinish.jpg'

export class WaysOfWorking extends Component {
    render() {
        return (
            <div class="services">
            <div class="servicesHead">
                <h1>Our Ways of Working</h1>
                <h5>Our simple, effective and time saving approach means we achieve cleanliness, speed and complete satisfaction EVERY TIME!</h5>
                    <p className="underline"> </p>
                </div>
                <div className="wowRow">
                    <div className="col-sm-12 col-md-4">
                            <h5>Preparation</h5>
                            <img className="wowImage" src={prepWork} alt="A pile of debris for the preperation work for the job"/>
                            <p>We complete a thorough inspection of the area to be cleaned, and then using our dry Westermann weed/moss brush on a light setting, we pull out any visible moss/weeds. Doing it this way, ensures an environmentally friendly method of cleaning, resulting in: Half the mess, Half the time and more importantly, HALF THE COST!</p>
                    </div>
                    <div className="col-sm-12 col-md-4">
                            <h5>Deep Clean</h5>
                            <img className="wowImage" src={initWork} alt="A westermann cleaner with a cleared pile of debris"/>
                            <p>Next the cleaning begins! Dependant then on the amount of infestation, we either use the Westermann machine on a medium/heavy setting, or, use our bespoke “specially developed” Rotary jet wash machine to remove any remaining residue.</p>
                    </div>
                    <div className="col-sm-12 col-md-4">
                            <h5>Lasting Clean</h5>
                            <img className="wowImage" src={finalFinish} alt="A clean finish on block paving"/>
                            <p>The cleaning is complete and we'll complete a final inspection of the area to ensure a high quality finish with 100% customer satisfaction. We will also resand, where necessary, at no additional cost!<span id="completedWork"></span></p>
                    </div>               
                </div>
            </div>
        )
    }
}

export default WaysOfWorking
