import React, { Component } from 'react'
// import AllEquipment from '../images/equipment/mainequip.JPG'
import Westermann from '../images/equipment/westermann1.JPG'
import Westermann2 from '../images/equipment/wire.jpg'
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
                <h5>Our high quality, cutting edge equipment, leave all our jobs with the best finish possible!</h5>
                    <p className="underline"> </p>
                </div>
                <div class="row equipRow">
                    <div class="col-sm-12">
                        <div className="equipImgContainer">
                        </div>
                    </div>
                </div>
                <div className="row equipRow">
                    <div className="col-sm-12 col-md-4">
                        <h5 className="equipHead">Westermann Moss/Weed <br/> Brush</h5>
                            <img className="equipImage" src={Westermann} alt="A pile of debris for the preperation work for the job"/>
                    </div>
                    <div className="col-sm-12 col-md-4">
                            <h5 className="equipHead">Westermann Weed <br/> Ripper</h5>
                            <img className="equipImage" src={Westermann2} alt="A westermann cleaner with a cleared pile of debris"/>
                    </div>
                    <div className="col-sm-12 col-md-4">
                            <h5 className="equipHead">Sky Vac Gutter <br/> Vacuum</h5>
                            <img className="equipImage" src={SkyVac} id="equipment" alt="A clean finish on block paving"/>
                    </div>               
                </div>
                <div className="row equipRow">
                    <div className="col-sm-12 col-md-4">
                            <h5 className="equipHead">Rotary Jet <br/> Wash</h5>
                            <img className="equipImage" src={Rotary} alt="A pile of debris for the preperation work for the job"/>
                    </div>
                    <div className="col-sm-12 col-md-4">
                            <h5 className="equipHead">Qleen Pure Water Resin Filter <br/> System</h5>
                            <img className="equipImage" src={Qleen} alt="A westermann cleaner with a cleared pile of debris"/>
                    </div>
                    <div className="col-sm-12 col-md-4">
                            <h5 className="equipHead">Qleen Fascia + Soffit <br/> Brush</h5>
                            <img className="equipImage" src={SkyBrush} id="equipment" alt="A clean finish on block paving"/>
                    </div>               
                </div>
            </div>
        )
    }
}

export default Equipment
