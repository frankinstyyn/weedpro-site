import React from "react"
import { FaEnvelope, FaFacebook } from "react-icons/fa"
import logoTB from "../images/weedProLogo.svg"

const Footer = () => {
  return (
    <div class="footer-section">
        <div class="container">
            <div class="footer-cta pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <div class="cta-text">
                                <h4>Business Info</h4>
                  <span>
                    <a href="">Weed Pro UK</a>
                  </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <div class="cta-text">
                                <h4>Call Me</h4>
                                  <span><a href="tel:07977256222">07977 256222</a> 
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <div class="cta-text">
                                <h4>Email Me</h4>
                                <span><a href="mailto:simon@weedpro-uk.com">simon@weedpro-uk.com</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-content pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-6 mb-30">
                        <div class="footer-widget">
                            <div class="footer-social-icon">
                                <span>Social Links</span>
                                <a href="#" className="linkedin-bg"><FaFacebook /></a>
                                <a href="mailto:simon@weedpro-uk.com" className="email-bg"><FaEnvelope /></a>
                            </div>
                        </div>
                    </div>
                      <div class="col-xl-6 col-lg-6 col-md-6 mb-30">
                        <div class="footer-widget">
                              <div class="footer-logo">
                                  <a href="/"><img src={logoTB} alt="Weed pro logo"></img></a>
                            </div>
                        </div>
                      </div>
            </div>
        </div>
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 text-center text-lg-center">
                        <div class="copyright-text">
                            <p>Created by <a href="https://frankinstyyn.co.uk">FrankinstyynWeb</a> &copy;{new Date().getFullYear()} | All Right Reserved </p>
                        </div>
                    </div>
                    {/* <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div class="footer-menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Policy</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
    </div>
  );
};

export default Footer;