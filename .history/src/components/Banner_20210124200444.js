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
                            Professional Outdoor Cleaning in Derby
                    </h1>
                        <h4>
                            Using no water or chemicals means we provide effecient, green ECO cleaning with less mess! 
                        </h4>
                    <Link to="/cleaning-services" className="btn-services">07977256222</Link>
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
