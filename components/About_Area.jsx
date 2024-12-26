import React from 'react';

// About content data object
const aboutContent = {
    title: 'About',
    description:
        'Visit the greatest bar in your neighborhood to experience the height of luxury. We guarantee a special fusion of atmosphere, expertly mixed cocktails, and unmatched service at our business. Our bar accommodates all tastes, whether you’re looking for a lively night out with friends or a quiet evening in. Take in the trendy décor, which is enhanced by a carefully chosen assortment of spirits and creative cocktails.',
};

const About_Area = () => {
    return (
        <section className="about-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="about-content">
                            <h3>{aboutContent.title}</h3>
                            <p>{aboutContent.description}</p>
                        </div>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </section>
    );
};

export default About_Area;
