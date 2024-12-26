import React from 'react';

const Featured_Menu = () => {
    // Data array for dynamic rendering
    const featuredItems = [
        {
            id: 1,
            image: '/assets/images/wine-bottle.png',
            size: '750 ml',
            title: "Lindeman's Moscato Wine",
        },
        {
            id: 2,
            image: '/assets/images/wine-bottle.png',
            size: '750 ml',
            title: 'Pabst Blue Ribbon Whisky',
        },
        {
            id: 3,
            image: '/assets/images/wine-bottle.png',
            size: '750 ml',
            title: 'Yellow Tail Merlot',
        },
        {
            id: 4,
            image: '/assets/images/wine-bottle.png',
            size: '750 ml',
            title: 'Yellow Tail Merlot',
        },
    ];

    return (
        <>
            <section className="featured-area">
                <div className="container">
                    <div className="heading-area">
                        <h3>Featured Menu</h3>
                    </div>
                    <div className="row">
                        {featuredItems.map((item) => (
                            <div key={item.id} className="col-md-3">
                                <div className="featured-box">
                                    <img src={item.image} alt={item.title} loading="lazy" />
                                    <div className="featured-content">
                                        <p>{item.size}</p>
                                        <h4>{item.title}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Featured_Menu;
