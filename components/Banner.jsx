import React from 'react'
import Link from 'next/link';
const Banner = () => {
    return (
        <>

            <section className="banner-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="banner-content">
                                <h1>Welcome!</h1>
                                <p>Let's Sip, savor, and celebrate life</p>
                                <div className="banner-btn">
                                    <Link className='theme-btn' href=''>Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Banner