import { useState } from 'react';
// import './SponsorsSection.css';

const SponsorsSection = () => {
    const [sponsors] = useState([
        { src: 'srit.jpeg', name: 'SRIT, Anantapur', details: 'Engineering College, Anantapur' },
        { src: 'gitam.jpg', name: 'Gouthami Institute of Technology and Management for Women, Proddutur', details: 'Womens College, Proddutur' },
        { src: 'cbit.png', name: 'CBIT, Proddutur ', details: 'Engineering College, Proddutur' },
        { src: 'nec_gudur.png', name: 'Narayana Engineering College, Gudur ', details: 'Engineering College, Gudur' },
        { src: 'nec_nellore.png', name: 'Narayana Engineering College, Nellore ', details: 'Engineering College, Nellore' },
        { src: 'adisankarait.jpeg', name: 'Adisankara Institute of Technology, Gudur ', details: 'Engineering College, Gudur' },

        // Add more sponsors as needed
    ]);

    return (
        <div className="sponsors-section">
            <h2 className="section-title">Sponsors</h2>
            <div className="sponsors">
                {sponsors.map((sponsor, index) => (
                    <div key={index} className="sponsor-card">
                        <img src={sponsor.src} alt={sponsor.name} className="sponsor-img" />
                        <div className="sponsor-details">{sponsor.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SponsorsSection;