"use client"

import React, { useState, useEffect } from 'react';

const Wine_Data = () => {
    const [wineData, setWineData] = useState([]);
    const [visibleCount, setVisibleCount] = useState(50);

    useEffect(() => {
        const fetchWineData = async () => {
            try {
                const response = await fetch('https://mmsapi.onrender.com/api/wine');
                const data = await response.json();
                setWineData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchWineData();
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
                                    {wineData.slice(0, visibleCount).map((item, index) => {
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


                                {visibleCount < wineData.length && (
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

export default Wine_Data;