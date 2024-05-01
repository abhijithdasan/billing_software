import React, { useState } from 'react';
import './Login.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Form submitted:', formData);
  };

  const handleGoogleLogin = () => {
    // Initialize Google Sign-In
    window.gapi.load('auth2', function() {
      const auth2 = window.gapi.auth2.init({
        client_id: '524232794660-2jlkcg76i0e47djflaqkgh0d5ub10st5.apps.googleusercontent.com'
      });

      // Sign in with Google
      auth2.signIn().then(function(googleUser) {
        const profile = googleUser.getBasicProfile();
        const email = profile.getEmail();
        console.log('Google user email:', email);
        // Add your Google login logic here
      });
    });
  };

  return (
    <div className ="login-wrapper">
      <div className="login-container">
        <h1>Six Ten Travels</h1>
        <p className='moto'>our customer is our first child</p>
        <br />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" >Login</button>
          <br /> <br/>
          <button type="button" onClick={handleGoogleLogin}>
             {/* Added the Google icon */}
            Login with <FontAwesomeIcon icon={faGoogle} style={{ marginRight: '1px', color: 'blue' }} fade/>oogle
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
