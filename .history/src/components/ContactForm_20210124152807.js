import React, { Component } from 'react'

export default class ContactForm extends Component {
    render() {
        return (
            <div className="bannerForm">
                <h1>Contact Form</h1>
                <form className="formStyling" action="/services">
                    <label for="name">Name</label>
                    <input type="text" id="name" placeholder="Full Name"></input>
                    <label for="email">Email Address</label>
                    <input type="text" id="email" placeholder="Email Address"></input>
                    <label for="number">Number</label>
                    <input type="text" id="number" placeholder="Contact Number"></input>
                </form>
            </div>
        )
    }
}

