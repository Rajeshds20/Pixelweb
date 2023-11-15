import { useState } from 'react';
import ArrowDown from '../assets/img/arrowdown.png';
import ArrowUp from '../assets/img/arrowup.png';

const FAQPage = () => {
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const toggleQuestion = index => {
        if (selectedQuestion === index) {
            return setSelectedQuestion(null);
        }

        setSelectedQuestion(index);
    };
    const data = [
        {
            question: '1. Is candidate necessary for registration?',
            answer: `Yes`,
        },
        {
            question: '2. Can any other candidate replace an enrolled candidate?',
            answer: `Yes. On specific conditions.`
        },
        {
            question: '3. Is payment procedure can be made both in online and offline?',
            answer: `No, Payment must be done online. For Spot registrations payment must be done offline.`,
        },
        {
            question: '4. What are the sources online for payment?',
            answer: `Debit Card, Credit card, net banking, UPI,etc...`
        },
        {
            question: '6. What is payment cancellation policy?',
            answer: `Your amount is not refunded.`
        },
    ];

    return (
        <div className="faq-section">
            {data.map((item, index) => (
                <div className="faq-item" key={index}>
                    <h3 onClick={() => toggleQuestion(index)} style={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center' }} className="faq-question">
                        {item.question}
                        {selectedQuestion === index ? (
                            <img className="faq-arrow" style={{ width: '30px' }} src={ArrowUp} alt="arrowup" />
                        ) : (
                            <img className="faq-arrow" style={{ width: '30px' }} src={ArrowDown} alt="arrowdown" />
                        )}
                    </h3>
                    <p className={`faq-answer ${selectedQuestion === index ? 'open' : ''}`}>
                        {item.answer}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default FAQPage;