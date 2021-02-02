import React, { Component } from 'react'

export default class ContactForm extends Component {
    render() {
        return (
            <div className="bannerForm">
                <h3 className="headerRed">Get in touch for a free no obligation quotation</h3>
                <form>
                    {/* Single Item */}
                    <div className="singleItem">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" className="name" placeholder="Enter your name"></input>
                    </div>
                    {/* End of Single Item */}

                    {/* Single Item */}
                    <div className="singleItem">
                        <label htmlFor="number">Number</label>
                        <input type="text" name="number" className="number" placeholder="Enter Your Number"></input>
                    </div>
                    {/* End of Single Item */}

                    {/* Single Item */}
                    <div className="singleItem">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" className="email" placeholder="Enter your email address"></input>
                    </div>
                    {/* End of Single Item */}

                    {/* Single Item */}
                    <div className="singleItem textArea">
                        <label htmlFor="message">What work would you like completing?</label>
                        <textarea name="message" id="" cols="30" rows="6"></textarea>
                    </div>
                    {/* End of Single Item */}
                    <div class="msg">
                        Message has been sent
                    </div>
                    <div class="formBtn">
                        <button type="submit">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

