import React from 'react'
import { Link } from "react-router-dom"

export default function Banner() {
    return (
        <div className="banner">
             <div className="row">
                <div className="col-sm-6">
                    <h1>
                        Professional Outdoor Cleaning in Derby
                    </h1>
                    <Link to="/cleaning-services" className="btn-services">07977256222</Link>
                    </div>
                <div className="col-sm-6 contact-form">This will be a contact form eventually</div>
            </div> 
        </div>
    )
}
