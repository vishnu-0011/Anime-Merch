import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("")
    console.log(formData, "data to be sent to server");

    try {
      const response = await fetch("http://localhost:6004/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("✅ Registered Successfully!");
        setFormData({ name: "", email: "", password: "" });
        navigate("/login");
      } else {
        setMessage("❌ Registration Failed!");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("❌ Server Error. Try again later.");
    }
  };

  return (
    <div className='bd'>
      <main className="d-flex justify-content-center align-items-center flex-grow-1">
        <div className="register-container">
          <h4 className="text-center mb-4">Create Account</h4>

          {/* Show message if available */}
          {message && <div className="alert alert-info text-center">{message}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@example.com"
                required />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                required />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-danger">Register</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Register;
