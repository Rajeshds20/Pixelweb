import PropTypes from 'prop-types';
import "../assets/css/EventSection.css";
import { useNavigate } from 'react-router-dom';
const Event = ({ imageUrl = 'https://picsum.photos/seed/picsum/100/100', altText, name, nav }) => {

    const navigate = useNavigate();

    return (
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4 eventeach"
            style={{ cursor: "pointer", display: 'flex', alignContent: 'center' }}
            onClick={() => {
                navigate(`/events/${nav}`);
            }}
        >
            <img src={imageUrl} className="card-img-top" alt={event.title} />

            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{altText}</p>
                <div className='participate'>
                    <button className='participate-button' /*src={event.Url}*/>Participate</button>
                </div>
            </div>
        </div>
    );
};

Event.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    nav: PropTypes.string.isRequired
};

export default Event;