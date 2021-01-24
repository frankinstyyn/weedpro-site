import React, { Component } from 'react'

export default class ContactForm extends Component {
    render() {
        return (
            <div>
                <form action="">
                    <label for="name">Name</label>
                    <input type="text" id="name" placeholder="Full Name">
                    <label for="email">Email Address</label>
                    <input type="text" id="email" placeholder="Email Address">
                    <label for="number">Contact Number</label>
                            <input type="text" id="number" placeholder="Contact Number">
                                <input type="button" value="Submit">
                </form>
            </div>
        )
    }
}

