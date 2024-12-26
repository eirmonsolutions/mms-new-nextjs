import React from 'react';

// Features data array
const featuresData = [
    {
        title: 'Bar Menu',
        description:
            'Savor a symphony of interesting cocktails, liquor, champagne, and more from our bar menu; every sip will enhance your experience to happy times ahead!',
    },
    {
        title: 'Sheds & Barns',
        description:
            'The perfect spot for hangouts and parties with plenty of room, atmosphere, and flexibility to create exceptional experiences that will be remembered with your loved ones.',
    },
    // Add more feature objects as needed
];

const Features_Area = () => {
    return (
        <section className="features-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6"></div>
                    <div className="col-md-6">
                        <div className="row">
                            {featuresData.map((feature, index) => (
                                <div className="col-md-12" key={index}>
                                    <div className="features-box">
                                        <h3>{feature.title}</h3>
                                        <p>{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features_Area;
