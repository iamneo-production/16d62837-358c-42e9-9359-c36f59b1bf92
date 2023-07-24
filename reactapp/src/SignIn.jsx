import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function SignIn() {
  const navigate = useNavigate();
  const eventFeedback =()=>{
    navigate("/feed");
      }

  // State variables to store form data and validation errors
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSignIn = () => {
    // Basic validation
    const newErrors = {};
    if (!username.trim()) {
      newErrors.username = alert('Username is required');
    }
    if (!email.trim()) {
      newErrors.email = alert('Email Id is required');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = alert('Invalid email format');
    }
    if (!password.trim()) {
      newErrors.password = alert('Password is required');
    } else if (password.length < 6) {
      newErrors.password = alert('Password must be at least 6 characters long');
    }

    // If there are validation errors, set the errors state
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // If there are no errors, you can proceed with navigation or form submission
      navigate('/Homepage');
    }

  };

  return (
    <div>
      <div className='App'>
        <h1 className='title'>Sign In</h1>
        <input
          className='input'
          type='username'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        {errors.username && <span className='error'>{errors.username}</span>}
        <br />
        <input
          className='input'
          type='email'
          placeholder='Email Id'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errors.email && <span className='error'>{errors.email}</span>}
        <br />
        <input
          className='input'
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errors.password && <span className='error'>{errors.password}</span>}
        <br />
        <button className='input' onClick={eventFeedback} type='button'>FeedBack</button>
        <button className='input' onClick={handleSignIn} type='button'>
          SignIn
        </button>
      </div>
      <div className='username'>
        <a href='./Homepage'></a>
      </div>
      <div>
        
      </div>
      <div className='username'>
        <a href='./Signup'>REGISTER</a>
      </div>
    </div>
  );
}

export default SignIn;
