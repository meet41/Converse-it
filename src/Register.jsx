import React, { useState } from 'react';
import { ref, push, set } from 'firebase/database';
import { database } from './firebase'; // Adjust the path as necessary
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    event: '',
    enrollment: '',
    college: '',
    name: '',
    department: '',
    email: '',
    year: '',
    contactNumber: '' // Ensure this matches the input field name
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@scet\.ac\.in$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setError('Email must be a valid @scet.ac.in address');
      return;
    }
    setError('');

    const usersRef = ref(database, 'users');
    const newUserRef = push(usersRef); // Generate a new unique key
    set(newUserRef, formData)
      .then(() => {
        navigate('/thankyou', { state: { formData } });
      })
      .catch((error) => {
        console.error('Error storing data:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Converse 2K24 Registration Form</h2>

      <div className='form-group'>
        <label htmlFor='event'>Event List:</label>
        <select name='event' id='event' value={formData.event} onChange={handleChange} required>
          <option value=''>Select Event</option>
          <option value='hackathon'>Hackathon</option>
          <option value='code jam'>Code Jam</option>
          <option value='robotics'>Robotics Challenge</option>
          <option value='ai ml'>AI/ML Contest</option>
          <option value='web dev'>Web Development</option>
          <option value='cyber security'>Cyber Security</option>
          <option value='iot'>IoT Innovation</option>
          <option value='other'>Other</option>
        </select>
      </div>

      <div className='form-group'>
        <label htmlFor='name'>Full Name:</label>
        <input type='text' id='name' name='name' placeholder='Enter your full name' value={formData.name} onChange={handleChange} required />
      </div>

      <div className='form-group'>
        <label htmlFor='contactNumber'>Mobile Number:</label> {/* Ensure the name matches the state property */}
        <input type='text' id='contactNumber' name='contactNumber' placeholder='Enter your mobile number' value={formData.contactNumber} onChange={handleChange} required />
      </div>

      <div className='form-group'>
        <label htmlFor='email'>Email ID:</label>
        <input type='email' id='email' name='email' placeholder='Enter your email' value={formData.email} onChange={handleChange} required />
      </div>

      <div className='form-group'>
        <label htmlFor='enrollment'>Enrollment No:</label>
        <input type='text' id='enrollment' name='enrollment' placeholder='Enter your enrollment number' value={formData.enrollment} onChange={handleChange} required />
      </div>

      <div className='form-group'>
        <label htmlFor='college'>College Name:</label>
        <input type='text' id='college' name='college' placeholder='Enter your college name' value={formData.college} onChange={handleChange} required />
      </div>

      <div className='form-group'>
        <label htmlFor='department'>Department:</label>
        <select name='department' id='department' value={formData.department} onChange={handleChange} required>
          <option value=''>Select Department</option>
          <option value='AI&DS'>Artificial Intelligence and Data Science</option>
          <option value='Ch_En'>Chemical Engineering</option>
          <option value='Ci_En'>Civil Engineering</option>
          <option value='CO'>Computer Engineering</option>
          <option value='EE'>Electrical Engineering</option>
          <option value='ECE'>Electronics & Communication Engineering</option>
          <option value='IT'>Information Technology</option>
          <option value='IC'>Instrumentation and Control</option>
          <option value='ME'>Mechanical Engineering</option>
          <option value='TT'>Textile Technology</option>
          <option value='other'>Other</option>
        </select>
      </div>

      <div className='form-group'>
        <label htmlFor='year'>Year:</label>
        <select name='year' id='year' value={formData.year} onChange={handleChange} required>
          <option value=''>Select Year</option>
          <option value='1st'>1st Year</option>
          <option value='2nd'>2nd Year</option>
          <option value='3rd'>3rd Year</option>
          <option value='4th'>4th Year</option>
        </select>
      </div>
      {error && <p className="error">{error}</p>}
      <button type="submit" id='submit'>Register</button>
    </form>
  );
};

export default Register;