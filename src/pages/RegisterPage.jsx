
import { useState } from 'react';

function RegisterPage() {

    const API_URL = import.meta.env.VITE_API_URL;

    const [formData, setFormData] = useState({
        name: '',
        year: '',
        branch: '',
        college: '',
        email: '',
        phone: '',
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        year: '',
        branch: '',
        college: '',
        email: '',
        phone: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validateForm(formData);
        if (Object.keys(errors).length === 0) {
            // Submit form data to server
            console.log(formData);
            fetch(`${API_URL}/user/register`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }).then(res => {
                alert('Successfully registered for Pixel 2023');
                console.log(res);
            }).catch(err => {
                console.log('Unable to register, try again later');
                console.log(err);
            })
        } else {
            setFormErrors(errors);
        }
    };

    const validateForm = (data) => {
        const errors = {};
        if (!data.name) {
            errors.name = 'Name is required';
        }
        if (!data.year || data.year == 'No') {
            errors.year = 'Year is required';
        }
        if (!data.branch) {
            errors.branch = 'Branch is required';
        }
        if (!data.college) {
            errors.college = 'College is required';
        }
        if (!data.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Invalid email address';
        }
        if (!data.phone) {
            errors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(data.phone)) {
            errors.phone = 'Invalid phone number';
        }
        return errors;
    };

    return (
        <div className="register-page">
            <h1 style={{ color: 'blue' }}>Register</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    {formErrors.name && <span className="error">{formErrors.name}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="year">Year</label>
                    <select
                        id="year"
                        name="year"
                        value={formData.year}
                        onChange={handleInputChange}
                    >
                        <option value="No">Not Selected</option>
                        <option value="1">I</option>
                        <option value="2">II</option>
                        <option value="3">III</option>
                        <option value="4">IV</option>
                    </select>
                    {formErrors.year && <span className="error">{formErrors.year}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="branch">Branch</label>
                    <input
                        type="text"
                        id="branch"
                        name="branch"
                        value={formData.branch}
                        onChange={handleInputChange}
                    />
                    {formErrors.branch && <span className="error">{formErrors.branch}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="college">College</label>
                    <input
                        type="text"
                        id="college"
                        name="college"
                        value={formData.college}
                        onChange={handleInputChange}
                    />
                    {formErrors.college && <span className="error">{formErrors.college}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    {formErrors.email && <span className="error">{formErrors.email}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                    {formErrors.phone && <span className="error">{formErrors.phone}</span>}
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegisterPage;
