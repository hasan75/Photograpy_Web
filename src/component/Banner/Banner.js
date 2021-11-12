import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="container">
            <div className="banner">
                <h2 className="mb-2 fw-bold">A picture is worth a thousand words</h2>
                <p className="mb-4">It clearly and beautifully captures your emotions- the joy, the laughter, the tears, you name it. Our pride is in offering the best shoots as we help you tell your story in photos.</p>
                <button className="banner-button">View Galerry</button>
            </div>
            
        </div>
    );
};

export default Banner;