import Typewriter from 'typewriter-effect';
import PixelLogo from '../assets/img/Pixel_logo.png'

const LogoSection = () => {
    return (
        <>
            <div id='logo-section container md-6 sm-3' className='logo-section'>
                <div className='logo-header'>
                    <img className='pixel-logo' src={PixelLogo} alt='Pixel Logo' />
                    <h1 className='pixel-heading'>PIXEL 2023</h1>
                </div>
                <h5 className='pixel-desc'>
                    A National Level Technical Symposium
                    <br />
                    <br />
                    From the Department of CSE
                    Jawaharlal Nehru Technological University,Anantapur
                    <br />
                    <br />
                    <p className='spot-registrations'>
                        <Typewriter
                            options={{
                                strings: ['Spot Registrations are Available.💥💥'],
                                autoStart: true,
                                loop: true,
                                cursor: '💥',
                            }}
                        />
                    </p>
                    {/* 💥💥Spot Registrations are Available.💥💥 */}
                </h5>
            </div>
            {/* Pixel Date and Venue, makers details with bootstrap class styles */}
            <div className='date-venue'>
                <h2 className='date-venue-heading'>Venue Details</h2>
                <h4 className='date'>Date: 24th & 25th November 2023</h4>
                <h4 className='venue'>Venue: CSE, JNTUA College of Engineering, Anantapur</h4>
                <h4 className='makers'>Made with ❤️ by <a href='/'>Team Pixel</a></h4>
            </div>
        </>
    );
};

export default LogoSection;
