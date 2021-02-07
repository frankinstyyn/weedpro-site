import React, { Component } from 'react'
import AllEquipment from '../images/equipment/mainequip.JPG'
import Westermann from '../images/equipment/westermann1.JPG'
import Westermann2 from '../images/equipment/wire.JPG'
import SkyVac from '../images/equipment/skyvac.JPG'
import Rotary from '../images/equipment/jet.JPG'
import Qleen from '../images/equipment/qleen.JPG'
import SkyBrush from '../images/equipment/skybrush.JPG'



export class Equipment extends Component {
    render() {
        return (
            <div id="equipment" className="services">
            <div class="servicesHead">
                <h1>Meet The Team</h1>
                <h5>Our high quality, groundbreaking equipment leaving all our jobs with the best finish! </h5>
                    <p className="underline"> </p>
                </div>
                <div class="row half">
                    <div class="col-sm-12">
                        <img className="equipImage" src={AllEquipment} alt="A pile of debris for the preperation work for the job"/>
                    </div>
                </div>
                <div className="row equipRow">
                    <div className="col-sm-12 col-md-4">
                        <h5 className="equipHead">Westermann moss/weed brush</h5>
                            <img className="equipImage" src={Westermann} alt="A pile of debris for the preperation work for the job"/>
                    </div>
                    <div className="col-sm-12 col-md-4">
                            <h5 className="equipHead"></h5>
                            <img className="equipImage" src={Westermann2} alt="A westermann cleaner with a cleared pile of debris"/>
                    </div>
                    <div className="col-sm-12 col-md-4">
                            <h5 className="equipHead">Sky Vac gutter vacuum</h5>
                            <img className="equipImage" src={SkyVac} id="equipment" alt="A clean finish on block paving"/>
                    </div>               
                </div>
                <div className="row equipRow">
                    <div className="col-sm-12 col-md-4">
                            <h5 className="equipHead">Rotary Jet Wash</h5>
                            <img className="equipImage" src={Rotary} alt="A pile of debris for the preperation work for the job"/>
                    </div>
                    <div className="col-sm-12 col-md-4">
                            <h5 className="equipHead">Qleen</h5>
                            <img className="equipImage" src={Qleen} alt="A westermann cleaner with a cleared pile of debris"/>
                    </div>
                    <div className="col-sm-12 col-md-4">
                            <h5 className="equipHead">Sky Brush</h5>
                            <img className="equipImage" src={SkyBrush} id="equipment" alt="A clean finish on block paving"/>
                    </div>               
                </div>
            </div>
        )
    }
}

export default Equipment
