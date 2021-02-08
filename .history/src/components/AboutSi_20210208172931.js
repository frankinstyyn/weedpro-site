import React, { Component } from 'react'
import Simon from '../images/simon.JPG'

export class WaysOfWorking extends Component {
    render() {
        return (
                <div className="aboutRow">
                    <div className="col-sm-12 col-md-6">
                    <h1 className="aboutHead" id="#aboutMobileHead">Simon - WeedPro UK</h1>
                    <p className="aboutUnderline"> </p>
                    <div className="aboutContainer">
                    <p id="aboutStory">
                        Weedpro is a local, family-run company which was established by myself and my wife Gill, in September 2019. We initially started up as a specialised outdoor cleaning service offering the cleaning of patios, resin, patterned concrete, tarmac and block paving using unique wet & dry machines developed in Germany, without the need for chemicals. <br/>

                        <br/>Since then, the company has evolved considerably, and we are now able to also offer gutter cleaning, soffit/fascia and window cleaning, again, using only the latest high-tech and ECO friendly equipment.<br/>

                        <br/>The vision was quite simple. Using 21st century technology, and a large dose of enthusiasm, we were one of the first companies in the area, to be able to offer a fast, efficient and cost effective outdoor cleaning service, always with the sustainability of the planet at the forefront of our minds.<br/>

                        <br/>Within only 6 months, and the help of Social Media, we easily established a very reputable name in the area, and now, the majority of our business comes from recommendations.<br/>

                        <br/>Last year we moved into the Commercial market, due to professional people being so impressed with work we had completed on their homes, they then chose us, to clean and maintain their business premises too.<br/>

                        <br/>So to conclude, in our eyes: Simplicity is Efficiency, so if you need any outdoor cleaning or maintenance at your home/business premises, just give us a call on 07977 256222.

                    </p>
                        </div>
                    </div>
                <div className="col-sm-12 col-md-6">
                    <div className="aboutContainer">
                        <img className="aboutImg" src={Simon} alt="A westermann cleaner with a cleared pile of debris"/>
                    </div>
                    </div>              
                </div>
        )
    }
}

export default WaysOfWorking
