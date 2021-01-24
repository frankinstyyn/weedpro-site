import React, { Component } from 'react'

export default class ContactForm extends Component {
    render() {
        return (
            <div>
                <h1>Contact Form</h1>
                <form action="/services">
                    <label for="name">Name</label>
                    <input type="text"></input>
                </form>
            </div>
        )
    }
}

