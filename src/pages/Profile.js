import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {


  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");



  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      navigate("/login");
    } else {
      setUser(storedUser);
      setAddress(storedUser.address || "");
      setPhone(storedUser.phone || "");
    }
  }, [navigate]);

  const handleUpdate = async () => {
    try {
      const res = await fetch(`http://localhost:6004/update-profile/${user._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address, phone })
      });

      const result = await res.json();

      if (res.ok) {
        setMessage("✅ Profile updated");
        // Update localStorage
        const updatedUser = { ...user, address, phone };
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
      } else {
        setMessage(`❌ ${result.message}`);
      }
    } catch (error) {
      console.error("Update error:", error);
      setMessage("❌ Server error");
    }
  };

  return (
    <div className='bd'>
      <main className="d-flex justify-content-center align-items-center flex-grow-1 p-4">
        <div className="profile-card text-center shadow p-4 bg-white rounded" style={{ maxWidth: '400px' }}>
          <img src="/user.jpg" alt="User" className="profile-img mb-3 rounded-circle" style={{ width: "100px", height: "100px" }} />
          <h4>{user.name}</h4>
          <p className="text-muted">{user.email}</p>
          <hr />
          <div className="text-start">
            <div className="mb-2">
              <label><strong>Address:</strong></label>
              <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div className="mb-2">
              <label><strong>Phone:</strong></label>
              <input type="text" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <p><strong>Member Since:</strong> {new Date(user.memberSince).toLocaleDateString()}</p>
          </div>
          <div className="mt-4">
            <button onClick={handleUpdate} className="btn btn-outline-danger">Save Changes</button>
            <Link to="/" className="btn btn-danger ms-2">Continue Shopping</Link>
          </div>
          {message && <p className="text-center mt-3 fw-bold">{message}</p>}
        </div>
      </main>
    </div>
  );
};

export default Profile;
