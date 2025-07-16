import React from 'react';
import './Header.css';
import img from '../images/logo.jpeg';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className='ob'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold d-flex align-items-center" to='/'>
            <img src={img} alt="Logo" width="40" height="40" className="me-2" />
            AnimeMerch
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">Cart</Link>
              </li>

              {!user && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/upload">Register</Link>
                  </li>
                </>
              )}

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                  Categories
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#tshirt">T-Shirts</a></li>
                  <li><a className="dropdown-item" href="#tshirt">Hoodies</a></li>
                  <li><a className="dropdown-item" href="#acc">Accessories</a></li>
                </ul>
              </li>

              {user && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/prof">Profile</Link>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-secondary rounded-pill px-3" onClick={handleLogout}  >
                      Logout
                    </button>
                  </li>
                </>
              )}

              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
