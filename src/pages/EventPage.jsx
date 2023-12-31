import React, { useCallback, useEffect } from 'react';
import '../assets/css/eventPage.css';
import { useState } from "react";
// import quizbackimg from "../images/quizbackimg.jpg";
function EventPage() {

    const [loading, setLoading] = useState(true);

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement('script')
            script.src = src
            script.onload = () => {
                resolve(true)
            }
            script.onerror = () => {
                resolve(false)
            }
            document.body.appendChild(script)
        })
    }

    useEffect(() => {
        loadScript('https://checkout.razorpay.com/v1/checkout.js')
            .then(res => {
                console.log(res);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                alert("Razorpay SDK failed to load. Are you online?")
            })
    }, []);

    const displayRazorpay = async (amount) => {

        const options = {
            key: 'rzp_test_mwXmMltciIIPKM',
            currency: 'INR',
            amount: amount,
            name: 'Rajesh',
            description: 'Test Transaction',
            image: 'https://picsum.photos/seed/picsum/100/100',

            handler: function (response) {
                alert(response.razorpay_payment_id)
                if (response.razorpay_payment_id) {
                    alert("Payment Successful")
                } else {
                    alert("Payment Failed")
                }
            },
            prefill: {
                name: 'Rajesh',
            }
        };

        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
    }

    // States for registration
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [Collegename, setCollegename] = useState('');
    const [course, setCourse] = useState('B.Tech');
    const [year, setYear] = useState('1st');
    const [teamsize, setTeamsize] = useState('1');
    const [phonenumber, setPhonenumber] = useState('');

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };

    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handleCollegename = (e) => {
        setCollegename(e.target.value);
        setSubmitted(false);
    };

    const handleCourse = (e) => {
        setCourse(e.target.value);
        setSubmitted(false);
    };

    // Handling the year change
    const handleYear = (e) => {
        setYear(e.target.value);
        setSubmitted(false);
    };

    const handlePhonenumber = (e) => {
        setPhonenumber(e.target.value);
        setSubmitted(false);
    };

    const handleTeamsize = (e) => {
        setTeamsize(e.target.value);
        setSubmitted(false);
    };

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || Collegename === '' || course === '' || year === '' || phonenumber === '' || teamsize === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    };

    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h4>{name} successfully registered!!</h4>
            </div>
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h4>Please enter all the fields</h4>
            </div>
        );
    };

    return (
        <div className="mainbody">
            <div className="header1">
                <h1>QUIZ</h1>
            </div>
            {/* <img src={quizbackimg} alt="quiz Event" style={{ width: "100%", borderRadius: "5px" }} /> */}
            <br /><br />
            <div className="box1">
                <h3>About the Event</h3>
                <br />
                <h5>Quiz, a contest in which participants test what they know by answering questions on one or more topics.You will be given a set of technical questions that are chosen by our team and you are expected to answer those correctly.You will be competing against many others.The one who answers the more questions will win the exciting prizes...</h5>
                <br />
                <h5>This is an online event and a <i>Single Person</i> event</h5>
                <br /><br />
                <div className="box1_1">
                    <div className='box1_1content'>
                        <h3>Date</h3>
                        <h5>25th November,2023</h5>
                        <br />
                        <h3>Time</h3>
                        <h5>......</h5>
                        <hr style={{ color: "yellow" }} />
                        <h3>Rs.100/-</h3>
                        <h5>Team of 1 member</h5>
                        <hr style={{ color: "yellow" }} />
                        <h3>Rs.200/-</h3>
                        <h5>Team of 2-4 members</h5>
                    </div>
                </div>
            </div>
            <br />
            <div className="box2">
                <h3>Registration Process</h3>
                <br />
                <ul>
                    <li><h5>Only individuals can participate</h5></li>
                    <li><h5>An individual participants needs to pay an amount of 100 rupees</h5></li>
                    <li><h5>Register here using the link below</h5></li>
                </ul>
            </div>
            <br />
            <div className="formbox">
                <div>
                    <h3>User Registration</h3>
                </div>
                <br />
                <form>
                    {/* Labels and inputs for form data */}
                    <label className="label">Name</label>
                    <input onChange={handleName} className="input"
                        value={name} type="text" />

                    <label className="label">Email</label>
                    <input onChange={handleEmail} className="input"
                        value={email} type="email" />

                    <label className="label">College Name</label>
                    <input onChange={handleCollegename} className="input"
                        value={Collegename} type="text" />

                    <label className="label">Course</label>
                    <select onChange={handleCourse} className="input" value={course}>
                        <option value="B.Tech">B.Tech</option>
                        <option value="M.Tech">M.Tech</option>
                        <option value="M.Sc">M.Sc</option>
                    </select>

                    <label className="label">Year</label>
                    <select onChange={handleYear} className="input" value={year}>
                        <option value="1st">1st</option>
                        <option value="2nd">2nd</option>
                        <option value="3rd">3rd</option>
                        <option value="4th">4th</option>
                    </select>

                    <label className="label">Team Size</label>
                    <select onChange={handleTeamsize} className="input" value={teamsize}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>

                    <label className="label">Phone Number</label>
                    <input onChange={handlePhonenumber} className="input"
                        value={phonenumber} type="integer" />

                    <button onClick={() => {
                        displayRazorpay(500)
                    }} className="btn"
                        style={{ cursor: loading ? 'not-allowed' : 'pointer' }}
                        disabled={loading}
                        type="submit">
                        {
                            loading ? 'Loading...' : 'Submit'
                        }
                    </button>

                    <div className="messages">
                        {errorMessage()}
                        {successMessage()}
                    </div>
                </form>
            </div>
            <br />

            <div className="box3">
                <h3>Event Rules</h3>
                <br />
                <ul color='aliceblue'>
                    <li><h5>Questions will be restricted to Computer Science Engineering</h5></li>
                    <li><h5>The one who provides the most correct answers will be declared as winner</h5></li>
                    <li><h5>If scores are levelled,they will have another round</h5></li>
                </ul>
            </div >
            <br />
            <div className="box4">
                <h5><i>Winners will receive exciting prizes...</i></h5>
                <h5><i>Participation Certificates will be provided to every participant.</i></h5>
            </div >
            <br />
            <div className="box5">
                <h3>Event Coordinators</h3>
                <br />
                <div className='box5content'>
                    <h4>xyz</h4>
                    <h5>Phone:999999999</h5>
                    <h5>Email:abc@gmail.com</h5>
                </div>
            </div>
        </div>
    );
}

export default EventPage;