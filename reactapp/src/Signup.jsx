import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { adduser } from './api';
function Signup() {
  const nav = useNavigate();
  // const handleSignup = () => {
  // const newErrors = {};
  // if (!firstName.trim()) {
  //   newErrors.firstName = alert('First Name is required');
  // }
  // if (!lastName.trim()) {
  //   newErrors.lastName = alert('Last Name is required');
  // }
  // if (!age.trim()) {
  //   newErrors.age = alert('Age is required');
  // }
  // if (!username.trim()) {
  //   newErrors.username = alert('Username is required');
  // }
  // if (!email.trim()) {
  //   newErrors.email = alert('Email Id is required');
  // } else if (!/\S+@\S+\.\S+/.test(email)) {
  //   newErrors.email = 'Invalid email format';
  // }
  // if (!password.trim()) {
  //   newErrors.password = alert('Password is required');
  // } else if (password.length < 6) {
  //   newErrors.password = alert('Password must be at least 6 characters long');
  // }

  // // If there are validation errors, don't navigate and set the errors state
  // if (Object.keys(newErrors).length > 0) {
  //   setErrors(newErrors);
  // } else {

  //   nav('/');
  // }
  const [data, setData] = useState({
    firstname:'',
    lastname:'',
    email:'',
    password:''
  })

  const handleChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.id]: e.target.value })
    console.log(data);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await adduser(data);
      nav('/');
    }
    catch (error) {
      console.log(error);
    }

    console.log(data);
  }

return (
  <div className='App'>
    <h1 className='title'>Sign Up</h1>
    <form onSubmit={handleSubmit}>
      <input
        className='input'
        id='firstname'
        type='text'
        placeholder='First Name'
        onChange={handleChange}
        required
      />
      {/* {errors.firstName && <span className='error'>{errors.firstName}</span>} */}
      <br />
      <input
        className='input'
        id='lastname'
        type='text'
        placeholder='Last Name'
        onChange={handleChange}
        required
      />
      {/* {errors.lastName && <span className='error'>{errors.lastName}</span>} */}
      <br />
      {/* <input
        className='input'
        id='LastName'
        type='text'
        placeholder='Phone'
        onChange={handleChange}
        required
      /> */}
      {/* <input
        className='input'
        id='LastName'
        type='text'
        placeholder='Age'
        onChange={handleChange}
        required
      /> */}
      {/* {errors.age && <span className='error'>{errors.age}</span>} */}
      {/* <input
        className='input'
        id='username'
        type='text'
        placeholder='Username'
        onChange={handleChange}
        required
      /> */}
      {/* {errors.username && <span className='error'>{errors.username}</span>} */}
      <input
        className='input'
        id='email'
        type='email'
        placeholder='Email Id'
        onChange={handleChange}
        required
      />
      {/* {errors.email && <span className='error'>{errors.email}</span>} */}
      <br />
      <input
        className='input'
        id='password'
        type='password'
        placeholder='Create password'
        onChange={handleChange}
        required
      />
      {/* {errors.password && <span className='error'>{errors.password}</span>} */}
      <br />
      <br />
      <button className='input' type='submit'>
        Sign up
      </button>
    </form>
  </div>
)
};


export default Signup;
