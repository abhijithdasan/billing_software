import React, { useState } from "react";

function Mainpage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
  };



  return (
    <div className="main-page">
      <div className="navbar">
        <div className="nav">
          <a>SIX TEN TRAVELS</a>
        </div>
      </div>

      {/* this is the left-side of the main page*/}

      <div className="container">
        <div className="left-wrapper"></div>

        {/* this is the rightside of the main page */}

        <div className="right-wrapper">
          <div>
            <form onSubmit={handleSubmit}>
              <div className="form-box">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-box">
                <label>Password:</label>
                <input
                  type="password" // changed type to "password"
                  name="password"
                  value={formData.text}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit">Submit</button>
              <br />
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Mainpage;
