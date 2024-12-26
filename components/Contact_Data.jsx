"use client";

import React, { useState } from 'react';
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import Link from "next/link";
import Swal from 'sweetalert2'; 

const Contact_Data = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://mms-new-nextjs.onrender.com/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), // Serialize form data as JSON
            });

            const data = await response.json(); // Parse the response JSON

            if (response.ok) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Your message has been sent successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
                setFormData({
                    firstName: '',
                    phone: '',
                    email: '',
                    message: ''
                });
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: data.message || 'Something went wrong, please try again later.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Network error, please try again later.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    return (
        <>
            <section className="tf_contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contact-info">
                                <div className="contact-box">
                                    <h3>Location</h3>
                                    <div className="contact-tf_info">
                                        <span className='icon'><FaLocationDot /></span>
                                        7735 Bunkerhill Rd, Jackson, MI 49201, USA
                                    </div>
                                </div>

                                <div className="contact-box">
                                    <h3>Reservations</h3>
                                    <div className="contact-tf_info">
                                        <span className='icon'><FaPhone /></span>
                                        <Link href="tel:9292426868">929-242-6868</Link>
                                    </div>
                                </div>

                                <div className="contact-box">
                                    <h3>Reservations</h3>
                                    <div className="contact-tf_info">
                                        <span className='icon'><FaEnvelope /></span>
                                        info@mmsliquor.com
                                    </div>
                                </div>

                                <div className="contact-box">
                                    <h3>Opening Hours</h3>
                                    <div className="contact-tf_info">
                                        Weekdays: 09:00 - 22:00<br />
                                        Saturday: 09:30 - 23:30<br />
                                        Sunday: 10:00 - 16:00<br />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="contact-form">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">First Name:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    placeholder="Enter Your Name"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">Phone No:</label>
                                                <input
                                                    type="phone"
                                                    className="form-control"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="Enter Your Number"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label className="form-label">Email</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="Enter Your Email"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label className="form-label">Message</label>
                                                <textarea
                                                    className="form-control"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    rows="4"
                                                    placeholder="Your Message"
                                                    required
                                                ></textarea>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="banner-btn text-center">
                                                <button type="submit" className="theme-btn">
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact_Data;
