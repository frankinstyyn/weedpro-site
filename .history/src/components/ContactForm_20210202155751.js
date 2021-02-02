import React from 'react'
import emailjs from "emailjs-com"
import { RiCloseCircleFill } from "react-icons/ri"

export default function ContactForm() {
    
    function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_s5y1qte', 'template_samxpkr', e.target, 'user_kWWcUvCprigMjvbNgKLYz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
        e.target.reset()

    }
    // This shows the pop up on form completion
    function myPopUp() {
        document.getElementById('popUp').setAttribute("class", "msgAppear");
        document.getElementById('closePopUp').setAttribute("class", "closeMsg svg")
        document.getElementsByClassName('msg').inputFocus()
    }
    // This closes the pop up using the SVG
    function closePopUp() {
        document.getElementById('popUp').setAttribute("class", "msg");
        document.getElementById('closePopUp').setAttribute("class", "SvgCloseMsg svg")
    }
          
        return (
            <div className="bannerForm">
                <h3 className="headerRed">Get in touch for a free no obligation quotation</h3>
                <form onSubmit={sendEmail} onReset={myPopUp}>
                    {/* Single Item */}
                    <div className="singleItem">
                        <label htmlFor="name">Name</label>
                            <input type="text"
                                name="name"
                                className="name"
                                placeholder="Enter your name"
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
                            required
                        ></textarea>
                    </div>
                    {/* End of Single Item */}
                    <div id="popUp" className="msg">
                        Your message has been sent, thank you. 
                    </div>
                    <div id="closePopUp" className="SvgCloseMsg">
                        <RiCloseCircleFill onClick={closePopUp}></RiCloseCircleFill>
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

