import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check email and password
    if (formData.email === 'sixten@gmail.com' && formData.password === '12345') {
      console.log('Login Successful');
      // Redirect to Mainpage
      navigate('/Mainpage');
    } else {
      console.log('Invalid Credentials');
      // Handle incorrect email or password
    }
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
        <button type="button" onClick={handleGoogleLogin}>Login with Google</button>
      </form>
    </div>
    </div>
  );
};

export default Login;
