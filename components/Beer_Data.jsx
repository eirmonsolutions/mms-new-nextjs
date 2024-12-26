"use client"

import React, { useState, useEffect } from 'react';

const Beer_Data = () => {
    const [beerData, setBeerData] = useState([]);
    const [visibleCount, setVisibleCount] = useState(50);

    useEffect(() => {
        const fetchBeerData = async () => {
            try {
                const response = await fetch('https://mmsapi.onrender.com/api/beer');
                const data = await response.json();
                setBeerData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchBeerData();
    }, []);

    const handleSeeMore = () => {
        setVisibleCount((prevCount) => prevCount + 50);
    };

    return (
        <>
            <section className="services-details">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="services-details-box">
                                <ul className="menu-item-box">
                                    {beerData.slice(0, visibleCount).map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <h3 className="item-name">
                                                    {item.Name}  
                                                    <span className="item-price-list">{item.size}</span>
                                                </h3>
                                                <div className="item-menu-box-bottom-divider"></div>
                                            </li>
                                        );
                                    })}
                                </ul>


                                {visibleCount < beerData.length && (
                                    <div className="banner-btn text-center">
                                        <button onClick={handleSeeMore} className="theme-btn">
                                            See More
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Beer_Data;