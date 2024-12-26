"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

// Array of slider images
const sliderImages = [
    { src: '/assets/images/slide-1.jpg', alt: 'Slide 1' },
    { src: '/assets/images/slide-2.jpg', alt: 'Slide 2' },
    { src: '/assets/images/slide-3.jpg', alt: 'Slide 3' },
    { src: '/assets/images/slide-4.jpg', alt: 'Slide 4' },
    { src: '/assets/images/slide-5.jpg', alt: 'Slide 5' },
];

// About page content data
const aboutContent = {
    title: 'Explore More',
    
    paragraphs: [
        'Explore our varied sources of your choice to celebrate. Every place offers a world of discovery and enjoyment, from amazing drinks to surprising innovations. Join us while we explore!',
    ],
};

const About_Explore = () => {
    return (
        <section className="tf_about">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-md-6">
                        <div className="about-content">
                            <h3>{aboutContent.title}</h3>
                            {aboutContent.paragraphs.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="about_slider">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={10}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                loop={true}
                                pagination={{ clickable: false }}
                                navigation={false}
                                modules={[Autoplay]}
                                breakpoints={{
                                    1024: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },
                                    600: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },
                                    480: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },
                                }}
                            >
                                {sliderImages.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="slide-box">
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                loading="lazy"
                                                style={{ width: '100%', height: 'auto' }}
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About_Explore;
