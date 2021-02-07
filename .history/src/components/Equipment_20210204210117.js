import React, { Component } from 'react'

export class Equipment extends Component {
    render() {
        return (
            <div className="services">
            <div class="servicesHead">
                <h1>The Equipment</h1>
                <h5>Our high quality, groundbreaking equipment leaving all our jobs with the best finish! </h5>
                    <p className="underline"> </p>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        Main image of simon and the kit
                    </div>
                </div>
                <div className="wowRow">
                    <div className="col-sm-12 col-md-4">
                            <h5>Westermann</h5>
                            <img className="wowImage" src={prepWork} alt="A pile of debris for the preperation work for the job"/>
                    </div>
                    <div className="col-sm-12 col-md-4">
                            <h5></h5>
                            <img className="wowImage" src={initWork} alt="A westermann cleaner with a cleared pile of debris"/>
                    </div>
                    <div className="col-sm-12 col-md-4">
                            <h5></h5>
                            <img className="wowImage" src={finalFinish} id="equipment" alt="A clean finish on block paving"/>
                    </div>               
                </div>
            </div>
        )
    }
}

export default Equipment
