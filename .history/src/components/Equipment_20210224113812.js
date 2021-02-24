import React, { Component } from 'react'
// import AllEquipment from '../images/equipment/mainequip.JPG'
import Westermann from '../images/equipment/mobile/westermann1Mobile.jpg'
import Westermann2 from '../images/equipment/mobile/wireMobile.jpg'
import SkyVac from '../images/equipment/mobile/skyvacMobile.jpg'
import Rotary from '../images/equipment/mobile/jetMobile.jpg'
import Qleen from '../images/equipment/mobile/qleenMobile.jpg'
import SkyBrush from '../images/equipment/mobile/skybrushMobile.jpg'



export class Equipment extends Component {
    render() {
        return (
            <div id="equipment" className="services">
            <div class="servicesHead">
                <h1>Meet The Team</h1>
                <h5>Our high quality, cutting edge equipment, leave all our jobs with the best finish possible!</h5>
                    <p className="underline"> </p>
                </div>
                <div class="row half">
                    <div class="col-sm-12">
                        <div className="equipImgContainer">
                        </div>
                    </div>
                </div>
                <div className="row equipRow">
                    <div className="col-sm-12 col-md-4">
                        <h5 className="equipHead">Westermann Moss/Weed <br/> Brush</h5>
                            <img className="equipImage" src={Westermann} alt="Westermann weed/moss brush cleaneing tool"/>
                    </div>
                    <div className="col-sm-12 col-md-4">
                            <h5 className="equipHead">Westermann Weed <br/> Ripper</h5>
                            <img className="equipImage" src={Westermann2} alt="Westermann weed ripper brush cleaning tool"/>
                    </div>
                    <div className="col-sm-12 col-md-4">
                            <h5 className="equipHead">Sky Vac Gutter <br/> Vacuum</h5>
                            <img className="equipImage" src={SkyVac} id="equipment" alt="Sky Vac Gutter vacuum cleaning tool"/>
                    </div>               
                </div>
                <div className="row equipRow">
                    <div className="col-sm-12 col-md-4">
                            <h5 className="equipHead">Rotary Jet <br/> Wash</h5>
                            <img className="equipImage" src={Rotary} alt="Rotary jet wash cleaning tool"/>
                    </div>
                    <div className="col-sm-12 col-md-4">
                            <h5 className="equipHead">Qleen Pure Water Resin Filter <br/> System</h5>
                            <img className="equipImage" src={Qleen} alt="Qleen Pure Water Resin Filter system"/>
                    </div>
                    <div className="col-sm-12 col-md-4">
                            <h5 className="equipHead">Qleen Fascia + Soffit <br/> Brush</h5>
                            <img className="equipImage" src={SkyBrush} id="equipment" alt="Qleen Fascia + Soffit brush"/>
                    </div>               
                </div>
            </div>
        )
    }
}

export default Equipment
