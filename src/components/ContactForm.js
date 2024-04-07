// Inside your React component
import React, { useEffect } from 'react';

function ContactForm() {
  useEffect(() => {
    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  const handleMessage = (event) => {
    if (event.data === 'messageSent') {
      // Hide the iframe and show the thank you message div
      const iframe = document.querySelector('iframe');
      const thankYouMessage = document.getElementById('popUp');
      iframe.style.display = 'none';
      thankYouMessage.style.display = 'block';
    }
  };

  return (
    <div className="bannerForm">
      <h3 className="headerRed">Get in touch for a free no obligation quotation</h3>
      <iframe style={{ border: 'none' }} src="https://sparkly-fudge-eba2c9.netlify.app/" title="Contact Form" />
      <div id="popUp" class="msg">
        <p>
        Hi there. Many thanks for your interest in Weedpro. Someone will respond within the next 24 hours!
        </p>
    </div>
    </div>
  );
}

export default ContactForm;
