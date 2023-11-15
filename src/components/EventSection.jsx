
import { useEffect, useState } from 'react';
import Event from './Event';
import "../assets/css/EventSection.css";

const EventsSection = () => {

    const [events, setEvents] = useState([
        // 'Coder Clash', 'Quiztopia', 'Battle On Board', 'Gaming Arena', 'Hackathon', 'Paper presentation', 'Memes', 'Photography'
        {
            name: 'Coder Clash',
            imageUrl: 'CodingLogo.png',
            altText: 'Coder Clash',
            nav: 'coding'
        },
        {
            name: 'Quiztopia',
            imageUrl: 'QuizLogo.png',
            altText: 'Quiztopia',
            nav: 'quiz'
        },
        {
            name: 'Battle On Board',
            imageUrl: 'https://picsum.photos/seed/picsum/200/100',
            altText: 'Battle On Board',
            nav: 'chess'
        },
        {
            name: 'Gaming Arena',
            imageUrl: 'https://picsum.photos/seed/picsum/200/100',
            altText: 'Gaming Arena',
            nav: 'freefire'
        },
        {
            name: 'Hackathon',
            imageUrl: 'HackLogo.png',
            altText: 'Hackathon',
            nav: 'hackathon'
        },
        {
            name: 'Paper presentation',
            imageUrl: 'PptLogo.png',
            altText: 'Paper presentation',
            nav: 'paperpresentation'
        },
        {
            name: 'Memes',
            imageUrl: 'https://picsum.photos/seed/picsum/200/100',
            altText: 'Memes',
            nav: 'memes'
        },
        {
            name: 'Photography',
            imageUrl: 'photograpgy.jpg',
            altText: 'Photography',
            nav: 'photography'
        }
    ]);

    return (
        <div className="events-section" id='events' >
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12">
                        <h2 className="section-title">Pixel Events</h2>
                    </div>
                </div>

                <div className="events-list row">
                    {events?.map((event, index) => (
                        <Event key={index} name={event.name} imageUrl={event.imageUrl} altText={event.altText} nav={event.nav} />
                    ))}

                </div>


            </div>
        </div>
    );
};

export default EventsSection;