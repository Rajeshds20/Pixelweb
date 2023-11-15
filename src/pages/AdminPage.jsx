/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Button, TextField, Table, Box, Link, Paper, TableFooter, List } from "@mui/material";


function Login() {

    const BackendURL = import.meta.env.VITE_API_URL;

    const navigate = useNavigate();

    const [loggedIn, setLoggedIn] = useState(false);
    const [section, setSection] = useState(0);
    const [registrationsData, setRegistrationsData] = useState([]);
    const [displayRegData, setDisplayRegData] = useState([]);
    const [partData, setPartData] = useState([]);
    const [displayPartData, setDisplayPartData] = useState([]);

    // Function to download the display data from an array of jsons to csv
    const downloadCSV1 = async (data, filename) => {
        const csv = [];
        // csv.push(Object.keys(data[0]));
        csv.push(['Registration ID', 'Name', 'Email', 'Phone Number', 'College', 'Year', 'Branch']);
        data.forEach(row => {
            // csv.push(Object.values(row));
            // Only add the relevant data
            csv.push([row._id, row.name, row.email, row.phone, row.college, row.year, row.branch]);
        });
        const blob = new Blob([csv.join('\n')], { type: 'text/csv' });
        const href = await URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        link.style = "display: none";
        link.download = filename + '.csv';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // Function to download the display data from an array of jsons to csv
    const downloadCSV2 = async (data, filename) => {
        const csv = [];
        // csv.push(Object.keys(data[0]));
        csv.push(['Registration ID', 'Name', 'Email', 'Phone Number', 'College', 'Year', 'Branch', 'Event', 'Team Size']);
        data.forEach(row => {
            // csv.push(Object.values(row));
            // Only add the relevant data
            csv.push([row._id, row.name, row.email, row.phone, row.college, row.year, row.branch, row.event, row.size]);
        });
        const blob = new Blob([csv.join('\n')], { type: 'text/csv' });
        const href = await URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        link.style = "display: none";
        link.download = filename + '.csv';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setLoggedIn(true);
        }
        else {
            setLoggedIn(false);
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const email = data.get('email');
        const password = data.get('password');
        if (email === '' || password === '') {
            alert('Please fill all fields');
            return;
        }
        const user = {
            email: email,
            password
        };
        fetch(`${BackendURL}/admin/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
        })
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                }
                else {
                    throw new Error('Invalid Credentials');
                }
            })
            .then(data => {
                localStorage.setItem('token', data.token);
                alert('Login Successful')
                console.log(data);
                setLoggedIn(true);
            })
            .catch(err => {
                console.log(err);
                alert('Invalid Credentials');
            });
    }

    return (
        <div>
            {
                loggedIn ? (
                    <div>
                        <h1>Pixel Admin Board</h1>
                        <br />
                        <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
                            <Typography
                                variant={section === 0 ? "h5" : "h6"}
                                style={{
                                    cursor: "pointer",
                                    color: section === 0 ? "blue" : "black"
                                }}
                                onClick={() => {
                                    setSection(0);
                                }}
                            >
                                <b>Registrations</b>
                            </Typography>
                            <Typography
                                variant={section === 1 ? "h5" : "h6"}
                                style={{
                                    cursor: "pointer",
                                    color: section === 1 ? "blue" : "black",
                                    marginLeft: "5.5rem"
                                }}
                                onClick={() => {
                                    setSection(1);
                                }}
                            >
                                <b>Participations</b>
                            </Typography>
                        </Box>
                        {
                            section === 0 ? (
                                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '20px' }}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => {
                                            fetch(`${BackendURL}/admin/registrations`, {
                                                method: 'GET',
                                                headers: {
                                                    'Content-Type': 'application/json',
                                                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                                                }
                                            })
                                                .then(res => {
                                                    if (res.status === 200) {
                                                        return res.json();
                                                    }
                                                    else {
                                                        throw new Error('Invalid Credentials');
                                                    }
                                                })
                                                .then(data => {
                                                    console.log(data);
                                                    setRegistrationsData(data);
                                                    setDisplayRegData(data);
                                                })
                                                .catch(err => {
                                                    console.log(err);
                                                    alert('Invalid Credentials');
                                                });
                                        }}
                                    >
                                        Get Registrations Data
                                    </Button>
                                    <Table>
                                        <tr>
                                            <th>Registration ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone Number</th>
                                            <th>College</th>
                                            <th>Year</th>
                                            <th>Branch</th>
                                        </tr>
                                        {
                                            displayRegData.map((row, index) => (
                                                <tr key={index}>
                                                    <td>{row._id}</td>
                                                    <td>{row.name}</td>
                                                    <td>{row.email}</td>
                                                    <td>{row.phone}</td>
                                                    <td>{row.college}</td>
                                                    <td>{row.year}</td>
                                                    <td>{row.branch}</td>
                                                </tr>
                                            ))
                                        }
                                    </Table>
                                    <br />
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        style={{ backgroundColor: 'green' }}
                                        onClick={() => {
                                            downloadCSV1(registrationsData, 'Pixel_Registrations');
                                        }}
                                    >
                                        Download Registrations Data
                                    </Button>
                                </div>
                            ) : (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={async () => {
                                            fetch(`${BackendURL}/admin/participants`, {
                                                method: 'GET',
                                                headers: {
                                                    'Content-Type': 'application/json',
                                                    'Authorization': `Bearer ${await localStorage.getItem('token')}`
                                                }
                                            })
                                                .then(res => {
                                                    if (res.status === 200) {
                                                        return res.json();
                                                    }
                                                    else {
                                                        throw new Error('Invalid Credentials');
                                                    }
                                                })
                                                .then(data => {
                                                    console.log(data);
                                                    setPartData(data);
                                                    setDisplayPartData(data);
                                                })
                                                .catch(err => {
                                                    console.log(err);
                                                    alert('Invalid Login');
                                                });
                                        }}
                                    >
                                        Get Participations Data
                                    </Button>
                                    <div>
                                        {/* Filter data through events */}
                                        <List sx={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center' }}>
                                            <Typography variant="h6" gutterBottom>
                                                Filter by Event:
                                            </Typography>
                                            <select id="filterevent" name="event">
                                                <option value="All">All</option>
                                                <option value="Photography">Photography</option>
                                                <option value="Chess">Chess</option>
                                                <option value="Coding">Coding</option>
                                                <option value="Freefire">Freefire</option>
                                                <option value="paperpresentation">Paper Presentation</option>
                                                <option value="memes">Memes</option>
                                                <option value="hackathon">Hackathon</option>
                                                <option value="Quiz">Quiz</option>
                                            </select>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={() => {
                                                    const event = document.getElementById('filterevent').value;
                                                    if (event === 'All') {
                                                        setDisplayPartData(partData);
                                                    }
                                                    else {
                                                        // Filter the data by events case insensitively
                                                        const filteredData = partData.filter((row) => {
                                                            return row.event.toLowerCase() === event.toLowerCase();
                                                        });
                                                        setDisplayPartData(filteredData);
                                                    }
                                                }}
                                            >
                                                Filter
                                            </Button>
                                        </List>
                                    </div>
                                    <Table>
                                        <tr>
                                            <th>Registration ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone Number</th>
                                            <th>College</th>
                                            <th>Year</th>
                                            <th>Branch</th>
                                            <th>Event</th>
                                            <th>Size</th>
                                        </tr>
                                        {
                                            displayPartData.map((row, index) => (
                                                <tr key={index}>
                                                    <td>{row._id}</td>
                                                    <td>{row.name}</td>
                                                    <td>{row.email}</td>
                                                    <td>{row.phone}</td>
                                                    <td>{row.college}</td>
                                                    <td>{row.year}</td>
                                                    <td>{row.branch}</td>
                                                    <td>{row.event}</td>
                                                    <td>{row.size}</td>
                                                </tr>
                                            ))
                                        }
                                    </Table>
                                    <br />
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        style={{ backgroundColor: 'green' }}
                                        onClick={() => {
                                            downloadCSV2(displayPartData, 'Pixel_Event_Participations');
                                        }}
                                    >
                                        Download Participations Data
                                    </Button>
                                </div>
                            )
                        }
                    </div>
                )
                    : (
                        <div>
                            <Container maxWidth="sm">
                                <Box sx={{ marginTop: "2rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <Typography variant="h4" gutterBottom>
                                        <b>Login</b>
                                    </Typography>
                                    <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
                                        <Typography
                                            variant={"h5"}
                                            style={{
                                                cursor: "pointer",
                                                color: "blue",
                                                marginLeft: "5.5rem"
                                            }}
                                        >
                                            <b>Admin</b>
                                        </Typography>
                                    </Box>
                                    <Paper sx={{
                                        padding: "1rem",
                                        width: "100%",
                                        border: "1px solid #333", // Custom border style
                                        borderRadius: "8px", // Rounded corners
                                    }}>

                                        <form onSubmit={handleSubmit} className="form">
                                            <Typography variant="h5" gutterBottom>
                                                Admin Login
                                            </Typography>
                                            <TextField
                                                name="email"
                                                label="Email"
                                                variant="outlined"
                                                fullWidth
                                                sx={{ marginBottom: "1rem" }}
                                            />
                                            <TextField
                                                name="password"
                                                label="Password"
                                                type="password"
                                                variant="outlined"
                                                fullWidth
                                                sx={{ marginBottom: "1rem" }}
                                            />
                                            <Button type="submit" variant="contained" color="primary">
                                                Login
                                            </Button>
                                        </form>
                                    </Paper>
                                </Box>
                            </Container>
                            <br />
                            <br />
                            {/* Suggest to Register */}
                            {/* <Typography variant="h6" gutterBottom style={{ textAlign: "center" }}>
                                Don't have an account?  <Link href="/register"> Register</Link>
                            </Typography> */}
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <TableFooter style={{ position: 'fixed', bottom: 0, width: '100%' }}>
                                <Typography variant="body2" color="textSecondary" align="center">
                                    Made with ❤️ by <a href="https://linkedin.com/in/devangamsajjarajesh" target="_blank" rel="noreferrer">Rajesh</a>
                                </Typography>
                            </TableFooter>
                            {/* <h1>Login</h1>
            <br />
            <h3
                onClick={() => {
                    setSection(0);
                }}
            >User</h3>
            <h2
                onClick={() => {
                    setSection(1);
                }}
            >Admin</h2>
            {
                section === 0 ?
                    <form onSubmit={handleSubmit} className="form">
                        <h3>User Login</h3>
                        <label htmlFor="username">Username</label>
                        <input name="username" id="usename" />
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                        <button type="submit">Login</button>
                    </form>
                    :
                    <form onSubmit={handleSubmit2} className="form">
                        <h3>Admin Login</h3>
                        <label htmlFor="username">Username</label>
                        <input name="username" id="usename" />
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                        <button type="submit">Login</button>
                    </form>
            } */}
                        </div>
                    )
            }
        </div>
    );
}

export default Login;
