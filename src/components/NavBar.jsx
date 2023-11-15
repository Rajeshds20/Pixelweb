import { useEffect, useState } from 'react';
import '../assets/css/NavBar.css'

const NavBar = () => {
    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className={`navbar navbar-expand-lg navbar-light bg-light ${isSticky ? 'sticky' : ''}`}>
            <a id="pixel_name" className="navbar-brand" href="/">PIXEL 2023</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#about">About</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Events
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/events/coding">Coding</a>
                            <a className="dropdown-item" href="/events/paperpresentation">Paper Presentation</a>
                            <a className="dropdown-item" href="/events/memes">Memes</a>
                            <a className="dropdown-item" href="/events/hackathon">Hackathon</a>
                            <a className="dropdown-item" href="/events/quiz">Quiz</a>
                            <a className="dropdown-item" href="/events/photography">Photography</a>
                            <a className="dropdown-item" href="/events/chess">Chess</a>
                            <a className="dropdown-item" href="/events/freefire">Freefire</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#gallery">Gallery</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#sponsors">Sponsors</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/faq">FAQ</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/register">Register</a>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li> */}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
