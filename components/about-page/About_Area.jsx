"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

// Array of slider images
const sliderImages = [
  { src: '/assets/images/slide1.jpg', alt: 'Slide 1' },
  { src: '/assets/images/slide2.jpg', alt: 'Slide 2' },
  { src: '/assets/images/slide3.jpg', alt: 'Slide 3' },
  { src: '/assets/images/slide4.jpg', alt: 'Slide 4' },
  { src: '/assets/images/slide5.jpg', alt: 'Slide 5' },
];

// About page content data
const aboutContent = {
  title: 'About Us',
  subheading:
    'Welcome to M&M, where mood and liquor combine to create an amazing experience. Located in the center of Michigan, we take great satisfaction in providing an unmatched drinking experience.',
  paragraphs: [
    'Our talented mixologists at M&M create a wide selection of specialty drinks by fusing classic techniques with cutting-edge tastes. The atmosphere is proof of our dedication to designing a stylish yet cozy area that invites you to relax and savor the moment.',
    'We have everything you could want for a fun celebration, a romantic date night, or a laid-back evening with friends. Enter our beautifully crafted space (Sheds and Barns), where each element has been chosen with care to enhance your entire experience. Come chill with us at M&M, where good times are shared. Let’s toast to extraordinary times!',
  ],
};

const About_Area = () => {
  return (
    <section className="tf_about">
      <div className="container">
        <div className="row align-items-center">
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
          <div className="col-md-6">
            <div className="about-content">
              <h3>{aboutContent.title}</h3>
              <h5>{aboutContent.subheading}</h5>
              {aboutContent.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About_Area;
