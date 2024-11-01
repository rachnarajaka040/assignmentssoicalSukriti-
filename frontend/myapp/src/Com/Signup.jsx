import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from "../redux/actions/authActions";
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import "./Signup.css";
import { Link } from 'react-router-dom';
function Signup() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '', phoneNumber: '', companyName: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigate
  const { loading, error, user } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(signupUser(formData));
      // Handle successful signup if necessary
    } catch (error) {
      console.error('Signup Error:', error);
    }
  };

  

  return (
    <div className="container">
      <h2 className="p-3 text-center">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
        <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
        <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Company Name" required />
        <button type="submit" disabled={loading}>Sign Up</button>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </form>
      <p className="text-center mt-3">
        Already registered? <Link to="/login">Log in here</Link>
      </p>
    </div>
  );
}

export default Signup;
