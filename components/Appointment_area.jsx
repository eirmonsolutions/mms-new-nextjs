import React from 'react';
import Link from 'next/link';

// Appointment section data object
const appointmentData = {
    image: '/assets/images/appointment-img.webp',
    alt: 'Appointment Image',
    title: 'Organize An Event Or Book A Shed',
    description:
        'Enrich the events you organize! Plan a shed that may be used for a variety of purposes or host a memorable gathering. In an area that is built to suit your tastes, create memories that will last a lifetime.',
    buttonText: 'Know More',
    link: '/contact',
};

const Appointment_area = () => {
    return (
        <section className="appointment-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="appointment-img">
                            <img src={appointmentData.image} alt={appointmentData.alt} loading="lazy" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="appointment-content">
                            <h3>{appointmentData.title}</h3>
                            <p>{appointmentData.description}</p>

                            <div className="banner-btn">
                                <Link className="theme-btn" href={appointmentData.link}>
                                    {appointmentData.buttonText}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment_area;
