import React, { Component } from 'react'

export default class ContactForm extends Component {
    render() {
        return (
            <div className="bannerForm">
                <form>
                    {/* Single Item */}
                    <div class="singleItem">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" className="name" placeholder="Enter your name"></input>
                    </div>
                    {/* End of Single Item */}

                    {/* Single Item */}
                    <div class="singleItem">
                        <label htmlFor="number">Number</label>
                        <input type="text" name="number" className="number" placeholder="Enter Your Number"></input>
                    </div>
                    {/* End of Single Item */}

                    {/* Single Item */}
                    <div class="singleItem">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" className="email" placeholder="Enter your email address"></input>
                    </div>
                    {/* End of Single Item */}

                    {/* Single Item */}
                    <div class="singleItem">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" className="name" placeholder="Please enter your name"></input>
                    </div>
                    {/* End of Single Item */}
                </form>
            </div>
        )
    }
}

