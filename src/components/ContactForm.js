import React from 'react';

const ContactForm = () => {
  return (
    <div className='bannerForm'>
     <h3 className="headerRed">Get in touch for a free no obligation quotation</h3>
     <div className='iFrameContainer'>
      <iframe
        title="Contact Form"
        src="https://form.jotform.com/240945760649063"
        width="100%"
        height="600"
        frameBorder="0"
        scrolling="yes"
        ></iframe>
    </div>
    </div>
  );
}

export default ContactForm;
