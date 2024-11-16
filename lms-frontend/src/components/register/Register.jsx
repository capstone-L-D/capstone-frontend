



import React from 'react';
import { useForm } from 'react-hook-form';
import './Register.css';
import Navbar from '../Navbar';

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
   console.log(data)
    e.preventDefault();

    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      <Navbar />
    <div className="register-container">
      <form onSubmit={handleSubmit(onSubmit)} className="register-form">

      <div className="form-header">
          Create Account
        </div>

        {/* <h2 className="form-title">Create Account</h2>
        <p className="form-subtitle">Join us by creating your account</p> */}

        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            {...register('username', { required: 'Username is required' })}
            className={errors.username ? 'input-error' : ''}
          />
          {errors.username && <p className="error-message">{errors.username.message}</p>}
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/,
                message: 'Enter a valid email address',
              },
            })}
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
            className={errors.password ? 'input-error' : ''}
          />
          {errors.password && <p className="error-message">{errors.password.message}</p>}
        </div>

        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>
    </div>
  );
};

export default RegisterPage;

