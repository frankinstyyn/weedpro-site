import React, { Component } from 'react'
import Axios from "axios";

// const popUp = function myPopUp() {
//     window.confirm('Your message has been sent, thank you');
// }

export default class ContactForm extends Component {

    state = {
        name: '',
        number: '',
        email: '',
        message: '',
        send:false
    }

    // Handle inputs
    
    handleName = (e) => {
        this.setState({
            name:e.target.value
        })
    }

    handleNumber = (e) => {
        this.setState({
            number:e.target.value
        })
    }
    handleEmail = (e) => {
        this.setState({
            email:e.target.value
        })
    }
    handleMessage = (e) => {
        this.setState({
            message:e.target.value
        })
    }

    // End of Handle Inputs

    popUp = (e) => {
        if (this.state.sent = true) {
            window.confirm('Your message has been sent, thank you');
        } else {
            window.confirm('Your message failed to send, please call me!');
        }
    }

    formSubmit = (e) => {
        e.preventDefault();

        let data = {
            name: this.state.name,
            number: this.state.number,
            email: this.state.email,
            message: this.state.message
        }

        Axios.post('/api/forma', data)
            .then(res => {
                this.setState({
                    sent: true,
                },this.resetForm)
            }).catch(() => {
                console.log("Message failed");
            })
    }
    
    // Resetting the form, clearing the fields
    resetForm=()=>{
    this.setState({
        name: '',
        number: '',
        email: '',
        message:''
    })

    setTimeout(() => {
        this.setState({
            sent:false,
        })
    },3000)
    }

    render() {
        return (
            <div className="bannerForm">
                <h3 className="headerRed">Get in touch for a free no obligation quotation</h3>
                <form onSubmit={this.formSubmit}>
                    {/* Single Item */}
                    <div className="singleItem">
                        <label htmlFor="name">Name</label>
                            <input type="text"
                                name="name"
                                className="name"
                                placeholder="Enter your name"
                                value={this.state.name}
                            onChange={this.handleName}
                            required
                            >
                            </input>
                    </div>
                    {/* End of Single Item */}

                    {/* Single Item */}
                    <div className="singleItem">
                        <label htmlFor="number">Number</label>
                            <input type="text"
                                name="number"
                                className="number"
                                placeholder="Enter Your Number"
                                value={this.state.number}
                            onChange={this.handleNumber}
                            required
                        >
                            </input>
                    </div>
                    {/* End of Single Item */}

                    {/* Single Item */}
                    <div className="singleItem">
                        <label htmlFor="email">Email</label>
                            <input type="text"
                                name="email"
                                className="email"
                                placeholder="Enter your email address"
                                value={this.state.email}
                            onChange={this.handleEmail}
                            required
                        >
                            </input>
                    </div>
                    {/* End of Single Item */}

                    {/* Single Item */}
                    <div className="singleItem textArea">
                        <label htmlFor="message">What work would you like completing?</label>
                        <textarea name="message"
                            id=""
                            cols="30"
                            rows="3"
                            placeholder="Enter your job requirements"
                            value={this.state.message}
                            onChange={this.handleMessage}
                            required
                        ></textarea>
                    </div>
                    {/* End of Single Item */}
                    <div class={this.state.sent ?'msg msgAppear' : 'msg'}>
                        Message has been sent
                    </div>
                    <div class="formBtn">
                        <button onClick={this.popUp} type="submit">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

