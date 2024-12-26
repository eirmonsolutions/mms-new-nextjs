import React from 'react';
import Link from 'next/link';
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <footer className='tf_footer'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <div className="footer-box">
                                <Link href='/'><img src="/assets/images/logo.png" alt="Logo" loading='lazy' /></Link>
                                <p>M & M Liquor Inc. offers a broad range of fine wines and beers that are effectively selected to fit any taste or occasion. This makes sure the company delivers finest goods and outstanding service.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2">
                            <div className="footer-box">
                                <h3>Explore Links</h3>
                                <ul>
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/about">About Us</Link></li>
                                    <li><Link href="/liquor">Liquor</Link></li>
                                    <li><Link href="/beer">Beer</Link></li>
                                    <li><Link href="/wine">Wine</Link></li>
                                    <li><Link href="/contact">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="footer-box2">
                                <h3>Get In Touch</h3>
                                <ul>
                                    <li>
                                        <a href="https://www.google.com/maps/place/7735+Bunkerhill+Rd,+Jackson,+MI+49201,+USA">
                                            <span className="icon"><FaLocationDot /></span>
                                            7735 Bunkerhill Rd, Jackson, MI 49201, USA
                                        </a>
                                    </li>
                                    <li>
                                        <a href="tel:+15177692470">
                                            <span className="icon"><FaPhone /></span>
                                            +1 517-769-2470
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:info@mmsliquor.com">
                                            <span className="icon"><FaEnvelope /></span>
                                            info@mmsliquor.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="footer-box">
                                <h3>Follow Us On</h3>
                                <ul className="top-social-media-icon">
                                    <li><a href="" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></li>
                                    <li><a href="" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
                                    <li><a href="" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="copyright-content">
                                <p>Copyright © 2024 | M & M Liquor Inc | Design &amp; Development By <Link href="https://eirmonsolutions.com.au/" target="_blank" rel="noopener noreferrer">Eirmon Solutions</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
