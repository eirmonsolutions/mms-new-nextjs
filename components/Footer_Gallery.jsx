import React from 'react';

// Gallery images data array
const galleryImages = [
    { src: '/assets/images/gallery-1.webp', alt: 'Gallery Image 1' },
    { src: '/assets/images/gallery-2.webp', alt: 'Gallery Image 2' },
    { src: '/assets/images/gallery-3.webp', alt: 'Gallery Image 3' },
    { src: '/assets/images/gallery-4.webp', alt: 'Gallery Image 4' },
    // Add more images as needed
];

const Footer_Gallery = () => {
    return (
        <section className="gallery-area">
            <div className="container-fluid">
                <div className="row">
                    {galleryImages.map((image, index) => (
                        <div className="col-md-3" key={index}>
                            <div className="gallery-box">
                                <img src={image.src} alt={image.alt} loading="lazy" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Footer_Gallery;
