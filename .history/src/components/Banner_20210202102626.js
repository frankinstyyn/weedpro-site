import React from 'react'
import ContactForm from "../components/ContactForm"
import { SiMinutemailer } from 'react-icons/si'
import { AiOutlinePhone } from 'react-icons/ai'
import { FiFacebook, FiInstagram } from 'react-icons/fi'

export default function Banner() {
    return (
        <div id="toTop" className="banner">
            <div className="row">
                <div className="col-sm-6">
                <div>
                        <h1 className="headerRed">
                        Unique professional Outdoor Cleaning in Derbyshire and Nottinghamshire
                    </h1>
                        <p>
                            Using no water or chemicals. We provide effecient, green, ECO cleaning with less mess as well as traditional jet washing methods
                        </p>
                        <div class="ctas">
                            <span><a href="tel:07977256222" id="ourServices" className="btn-services"><span className="bannerIcon"><AiOutlinePhone /></span>- 07977 256222</a></span>
                            <span><a href="mailto:simon@weedpro-uk.com" id="ourServices" className="btn-services"><span className="bannerIcon"><SiMinutemailer /></span>- simon@weedpro-uk.com</a></span>
                                    <span><a href="https://www.facebook.com/Weedpro-Ukcom-100145041372858/" className="btn-services" target="_blank" rel="noreferrer"><span className="bannerIcon"><FiFacebook /></span>- Weedpro-uk.com</a></span>
                                    <span><a href="https://www.instagram.com/weedprouk/" id="ourServices" className="btn-services" target="_blank" rel="noreferrer"><span className="bannerIcon"><FiInstagram /></span>- Weedprouk</a></span>
                            </div>
                    </div>
                    </div>
                <div className="col-sm-6">
                    <div>
                        {/* <ContactForm /> */}
                    </div>
                </div>
            </div> 
        </div>
    )
}
