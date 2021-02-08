import React, { Component } from 'react'
import Simon from '../images/simon.jpg'

export class WaysOfWorking extends Component {
    render() {
        return (
                <div className="wowRow">
                    <div className="col-sm-12 col-md-6">
                    <h1>Text about Simon</h1>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <img className="wowImage" src={Simon} alt="A westermann cleaner with a cleared pile of debris"/>
                    </div>              
                </div>
        )
    }
}

export default WaysOfWorking
