import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // Import the same CSS file for consistent styling
import { Link } from 'react-router-dom';
function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const { loading, error } = useSelector((state) => state.auth);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await dispatch(loginUser(formData));
            alert("Login successful");
            navigate('/userdata');
            setFormData({ email: '', password: '' });
        } catch (error) {
            setErrorMessage(error.message || 'An error occurred. Please try again.');
        }
    };

    useEffect(() => {
        if (error) {
            setErrorMessage(error);
        }
    }, [error]);

    return (
        <div className="container">
            <h2 className="p-3 text-center">Log In</h2>
            <form onSubmit={handleSubmit}>
                {errorMessage && (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )}
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                />
                <button type="submit" disabled={loading}>Login</button>
                {loading && <p>Loading...</p>}
            </form>
            <p className="text-center mt-3">
                Not registered yet? <Link to="/signup">Sign up here</Link>
            </p>
        </div>
    );
}

export default Login;
