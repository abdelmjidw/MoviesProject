import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login() {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); 
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        
        if (!credentials.email || !credentials.password) {
            setError('Please fill in all fields.');
            return;
        }

        setLoading(true);
        setError(''); 
        try {
            const resp = await axios.post('http://localhost:8000/api/v1/login', credentials, {
                headers: { 'Content-Type': 'application/json' },
            });
        
            console.log(resp.data);
        
            if (resp.status === 200) {
                localStorage.setItem('token', resp.data.token);
                localStorage.setItem('username', resp.data.user.user_name);
                navigate('/Home');
            } else {
                if (resp.data.errors) {
                    setError(Object.values(resp.data.errors).join(', '));
                } else {
                    setError(resp.data.message || 'Identifiants invalides');
                }
            }
        } catch (err) {
            console.error(err);
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='login-container'>
            <div className='login'>
                <div className='login-header'>
                    <h1 className='head'>Movies Star</h1>
                    <h3>Login to your account</h3>
                </div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                        className='login-input'
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={credentials.email}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        className='login-input'
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                    />

                    {error && <p className="error-message">{error}</p>}

                    <button className='submit' type="submit" disabled={loading}>
                        {loading ? 'Loading...' : 'Login'}
                    </button>
                </form>
                <span>
                    Don't have an account?{' '}
                    <Link to="/signup" className="signup-link">Sign Up</Link>
                </span>
            </div>
        </div>
    );
}

export default Login;