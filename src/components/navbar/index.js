import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-secondary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Brendan Francis
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">            <ul className="navbar-nav ms-auto me-0 mb-2">
          <li className="nav-item">
            <Link 
              className={
                window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
                } 
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              className={
                window.location.pathname === "/projects"
                  ? "nav-link active"
                  : "nav-link"
              }
              to="/projects"
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={
                window.location.pathname === "/contact"
                  ? "nav-link active"
                  : "nav-link"
              }
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;