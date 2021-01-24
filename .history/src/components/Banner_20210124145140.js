import React from 'react'
import { Link } from "react-router-dom"

export default function Banner() {
    return (
        <div className="banner">
            <div className="row">
                <div className="col-sm-6">
                <div className="bannerBg">
                    <h1>
                        Professional Outdoor Cleaning in Derby
                    </h1>
                    <Link to="/cleaning-services" className="btn-services">07977256222</Link>
                    </div>
                    </div>
                <div className="col-sm-6">
                    <div className="bannerBg">
                        <form action="">
                            <h3>Name</h3>
                            <h3>Email Address</h3>
                            <h3>Contact Number</h3>
                            <button>Submit Form</button>
                        </form>
                    </div>
                </div>
            </div> 
        </div>
    )
}
