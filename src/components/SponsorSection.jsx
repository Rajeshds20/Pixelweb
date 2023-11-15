import { useState } from 'react';
// import './SponsorsSection.css';

const SponsorsSection = () => {
    const [sponsors] = useState([
        { src: 'https://picsum.photos/seed/picsum/200/300', name: 'Sponsor 1', details: 'Details about Sponsor 1' },
        { src: 'https://picsum.photos/seed/picsum/200/300', name: 'Sponsor 2', details: 'Details about Sponsor 2' },
        { src: 'https://picsum.photos/seed/picsum/200/300', name: 'Sponsor 3', details: 'Details about Sponsor 3' },
        // Add more sponsors as needed
    ]);

    return (
        <div className="sponsors-section">
            <h2 className="section-title">Sponsors</h2>
            <div className="sponsors">
                {sponsors.map((sponsor, index) => (
                    <div key={index} className="sponsor-card">
                        <img src={sponsor.src} alt={sponsor.name} className="sponsor-img" />
                        <div className="sponsor-details">{sponsor.details}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SponsorsSection;