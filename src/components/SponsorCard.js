import React from 'react';
import './SponsorCard.css';
import bull from './bull.jpg'
import career from './career.jpg'
import sans from './sans.jpg'

const SponsorCard = () => {
    return (<>
        <div className="sponsor-card">
            <img
                src={career}
                alt="Sponsor Logo"
                className="sponsor-image"
            />
            <h3 className="sponsor-title">Careerline Education</h3>
            <p className="sponsor-description"></p>
        </div>
        <div className="sponsor-card">
            <img
                src={sans}
                alt="Sponsor Logo"
                className="sponsor-image"
            />
            <h3 className="sponsor-title">House of sanskruti</h3>
            <p className="sponsor-description"></p>
        </div>
        <div className="sponsor-card">
            <img
                src={bull}
                alt="Sponsor Logo"
                className="sponsor-image"
            />
            <h3 className="sponsor-title">Bull Rider</h3>
            <p className="sponsor-description"> </p>
        </div>
       
        </>
    );
};

export default SponsorCard;
