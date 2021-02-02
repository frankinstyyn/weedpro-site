import React, { Component } from 'react'

export default class ContactForm extends Component {
    render() {
        return (
            <div className="bannerForm">
                <form>
                    <div class="singleItem">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" className="name" placeholder="Name"></input>
                    </div>
                </form>
            </div>
        )
    }
}

