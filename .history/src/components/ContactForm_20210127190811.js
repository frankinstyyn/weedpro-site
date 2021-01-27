import React, { Component } from 'react'

export default class ContactForm extends Component {
    render() {
        return (
            <div className="bannerForm">
                <h3 className="headerRed">Get in touch for a free no obligation quotation</h3>
                <form className="formStyling" action="/services">
                    <label for="name">Name</label><br></br>
                    <input type="text" id="name" placeholder="Full Name"></input><br></br>
                    <label for="email">Email Address</label><br></br>
                    <input type="text" id="email" placeholder="Email Address"></input><br></br>
                    <label for="number">Number</label><br></br>
                    <input type="text" id="number" placeholder="Contact Number"></input><br></br>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

