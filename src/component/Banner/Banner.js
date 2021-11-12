import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="container">
            <div className="banner d-flex justify-content-between align-items-center">
                <span className="me-2">
                <i class="fas fa-arrow-left fa-2x"></i>
                </span>
                <div className="mx-2">
                    <h2 className="mb-2 fw-bold">A picture is worth a thousand words</h2>
                    <p className="mb-4">It clearly and beautifully captures your emotions- the joy, the laughter, the tears, you name it. Our pride is in offering the best shoots as we help you tell your story in photos.</p>
                    <button className="banner-button">View Galerry</button>
                </div>
                <span>
                    <i class="fas fa-arrow-right fa-2x"></i>
                </span>

            </div>
            
        </div>
    );
};

export default Banner;