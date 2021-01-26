import React from 'react'
// import { Link } from "react-router-dom"
import ContactForm from "./ContactForm"
import { FaEnvelope } from 'react-icons/fa'
import { SiMinutemailer } from 'react-icons/si'

export default function Banner() {
    return (
        <div className="banner">
            <div className="row">
                <div className="col-sm-6">
                <div>
                    <h1>
                        Unique professional Outdoor Cleaning in Derbyshire and Nottinghamshire
                    </h1>
                        <p>
                            Using no water or chemicals. We provide effecient, green, ECO cleaning with less mess as well as traditional jet washing methods
                        </p>
                        <div class="ctas">
                            <span><a href="tel:07977256222" id="ourServices" className="btn-services">07977 256222</a></span>
                            <span><a href="mailto:simon@weedpro-uk.com" id="ourServices" className="btn-services"><SiMinutemailer />simon@weedpro-uk.com</a></span>
                            <span><a href="https://www.facebook.com/Weedpro-Ukcom-100145041372858/" id="ourServices" className="btn-services">Weedpro-uk.com</a></span>
                            </div>
                    </div>
                    </div>
                <div className="col-sm-6">
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div> 
        </div>
    )
}
