
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Forget() {
  const [formData, setFormData] = useState({ email: "", newPassword: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleReset = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("https://anime-merch.onrender.com/reset-password", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        setMessage("✅ Password updated successfully! Please login.");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setMessage(`❌ ${result.message}`);
      }
    } catch (error) {
      console.error("Reset error:", error);
      setMessage("❌ Server error");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-header bg-warning text-white text-center">
              <h4>🔁 Reset Password</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleReset}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="newPassword" className="form-label">New Password</label>
                  <input
                    type="password"
                    id="newPassword"
                    className="form-control"
                    value={formData.newPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-success w-100">Reset Password</button>
              </form>

              {message && <div className="text-center mt-3 fw-bold">{message}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forget;
