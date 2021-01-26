import React from 'react'
import { Link } from "react-router-dom"
import ContactForm from "./ContactForm"

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
                            Using no water or chemicals. We provide effecient, green, ECO cleaning with less mess! 
                        </p>
                        <div class="ctas">
                            <span><a href="tel:07977256222" id="ourServices" className="btn-services">07977 256222</a></span>
                            <span><a href="mailto:simon@weedpro-uk.com" id="ourServices" className="btn-services">simon@weedpro-uk.com</a></span>
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
