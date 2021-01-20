import React from "react"
import { FaLocationArrow, FaPhone, FaFacebook, FaEnvelope, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <div class="footer-section">
        <div class="container">
            <div class="footer-cta pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <FaPhone />
                            <div class="cta-text">
                                <h4>Business Info</h4>
                  <span>
                    <a href="https://find-and-update.company-information.service.gov.uk/company/08904346">Nigel James Consulting Limited</a>
                    {/* <p>Companies House Registration no (CRN): 08904346</p>
                    <p>VAT Registration Number: <a href="https://find-and-update.company-information.service.gov.uk/company/08904346">184195288</a></p> */}
                  </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <FaPhone />
                            <div class="cta-text">
                                <h4>Call Me</h4>
                                <span>07590 647481</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <FaEnvelope />
                            <div class="cta-text">
                                <h4>Email Me</h4>
                                <span><a href="mailto:nigel@nigeljamesconsulting.co.uk">nigel@nigeljamesconsulting.co.uk</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-content pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 mb-50">
                        <div class="footer-widget">
                            <div class="footer-social-icon">
                                <span>Social Links</span>
                                <a href="#" className="linkedin-bg"><FaLinkedin /></a>
                                <a href="#" className="email-bg"><FaEnvelope /></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Golf Lessons</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                      </div>
                      <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                          <div class="footer-widget">
                            <div class="footer-logo">
                                <a href="index.html"><img src="https://i.ibb.co/QDy827D/ak-logo.png" class="img-fluid" alt="logo"></a>
                            </div>
                              </div>
                              </div>
                      </div>
            </div>
        </div>
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div class="copyright-text">
                            <p>Copyright &copy; 2018, All Right Reserved <a href="https://codepen.io/anupkumar92/">Anup</a></p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div class="footer-menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Policy</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
};

export default Footer;