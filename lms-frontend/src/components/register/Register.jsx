import React, { useState } from 'react';
import './Register.css';
import Navbar from '../Navbar';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: '',
    userMail: '',
    userPassword: '',
    jobRole: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.userName) {
      tempErrors.userName = 'Username is required';
    }

    if (!formData.userMail) {
      tempErrors.userMail = 'Email is required';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/.test(formData.userMail)) {
      tempErrors.userMail = 'Enter a valid email address';
    }

    if (!formData.userPassword) {
      tempErrors.userPassword = 'Password is required';
    } else if (formData.userPassword.length < 6) {
      tempErrors.userPassword = 'Password must be at least 6 characters';
    }

    if (!formData.jobRole) {
      tempErrors.jobRole = 'Job role is required';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      const response = await fetch("http://localhost:8333/api/auth/register/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        navigate('/login');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      <Navbar />
      <div className="register-container">
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-header">
            Create Account
          </div>

          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              className={errors.userName ? 'input-error' : ''}
            />
            {errors.userName && <p className="error-message">{errors.userName}</p>}
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="userMail"
              value={formData.userMail}
              onChange={handleChange}
              className={errors.userMail ? 'input-error' : ''}
            />
            {errors.userMail && <p className="error-message">{errors.userMail}</p>}
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="userPassword"
              value={formData.userPassword}
              onChange={handleChange}
              className={errors.userPassword ? 'input-error' : ''}
            />
            {errors.userPassword && <p className="error-message">{errors.userPassword}</p>}
          </div>

          <div className="input-group">
            <label>Job Role</label>
            <input
              as="select"
              name="jobRole"
              value={formData.jobRole}
              onChange={handleChange}
              className={errors.jobRole ? 'input-error' : ''}
              list="jobRoles"
            />
            <datalist id="jobRoles">
              <option value="DevOps Engineer">DevOps Engineer</option>
              <option value="Game Developer">Game Developer</option>
              <option value="Full Stack Developer">Full Stack Developer</option>
              <option value="Mobile App Developer">Mobile App Developer</option>
              <option value="Machine Learning Engineer">Machine Learning Engineer</option>
              <option value="other">other</option>
            </datalist>
            {errors.jobRole && <p className="error-message">{errors.jobRole}</p>}
          </div>

          <button type="submit" className="submit-button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
