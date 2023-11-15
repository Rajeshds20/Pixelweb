import React, { useEffect } from 'react';
import '../../assets/css/eventPage.css'
import { useState } from "react";
function QuizPage() {
    // States for registration
    const [name, setName] = useState('');
    const API_URL = import.meta.env.VITE_API_URL;


    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

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

    const submitDetails = (data) => {
        fetch(`${API_URL}/user/participate`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((res) => {
            console.log("Request complete! response:", res);
        }).catch((err) => {
            console.log(err);
            alert("An error occured while submitting the form, if payment done, please contact the coordinators");
        });
    };

    const displayRazorpay = async (amount, data) => {

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
                    submitDetails({ ...data, event: 'photography' });
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

    // Handling the form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            college: e.target.college.value,
            branch: e.target.course.value,
            year: e.target.year.value,
            size: e.target.size.value,
            phone: e.target.phone.value,
            event: 'chess',
        }
        console.log(data);

        // Checking if all the fields are filled
        if (data.name === '' || data.email === '' || data.college === '' || data.phone === '') {
            alert('Please enter all the fields');
        } else {
            // console.log('Data : ', data);
            setError(false);
            setSubmitted(true);
            setName(data.name);
            // Sending the form data to the backend
            displayRazorpay(1000, data);
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
                <h1>PHOTOGRAPHY</h1>
            </div>
            <br /><br />
            <div className="box1">
                <h3>About the Event</h3>
                <br />
                <h5>
                    Photography, is an online competetion where the participants each submit a photo that is clicked by them only, and based on number of votes and likes the winner will be decided.
                </h5>
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
                <form onSubmit={handleSubmit}>
                    {/* Labels and inputs for form data */}
                    <label className="label">Name</label>
                    <input required={true} name='name' className="input"
                        type="text" />

                    <label className="label">Email</label>
                    <input required={true} name='email' className="input"
                        type="email" />

                    <label className="label">College Name</label>
                    <input required={true} name='college' className="input"
                        type="text" />

                    <label className="label">Course</label>
                    <select name='course' required={true} className="input">
                        <option value="B.Tech">B.Tech</option>
                        <option value="M.Tech">M.Tech</option>
                        <option value="M.Sc">MCA</option>
                    </select>

                    <label className="label">Year</label>
                    <select required={true} name='year' className="input">
                        <option value="1st">1st</option>
                        <option value="2nd">2nd</option>
                        <option value="3rd">3rd</option>
                        <option value="4th">4th</option>
                    </select>

                    <label className="label">Team Size</label>
                    <select required={true} name='size' className="input">
                        <option value="1">1</option>
                    </select>

                    <label className="label">Phone Number</label>
                    <input required={true} name='phone' className="input" type="integer" />

                    <button className="btn"
                        type="submit">
                        {
                            loading ? "Loading..." : "Submit"
                        }
                    </button>
                </form>
            </div>
            <br />

            <div className="box3">
                <h3>Event Rules</h3>
                <br />
                <ul color='aliceblue'>
                    <li><h5>Questions will be restricted to Computer Science Engineering</h5></li>
                    <li><h5>The one who provides the most correct answers will bbe declared as winner</h5></li>
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
                    <h4>K.Rahul</h4>
                    <h5>Phone: 7702006353</h5>
                    <h5>Email: rahulkandati@gmail.com</h5>
                </div>
            </div>
        </div >
    );
}

export default QuizPage;