import React from 'react';

// Breadcrumb Component accepts `title` as a prop to make the heading dynamic
const Breadcrumb = ({ title }) => {
    return (
        <section className="breadcrumb-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-anime">{title}</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Breadcrumb;
