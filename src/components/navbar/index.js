import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../header';
import './navbar.css';

const dict = {
  '/': 'Home',
  '/projects': 'Projects',
  '/contact': 'Contact'
}

const Navbar = () => {
  const [page, setPage] = useState(dict[window.location.pathname]);

  return (<>  
    <nav className="navbar navbar-expand-md navbar-dark bg-primary" id="navbar">
      <div className="container-fluid">
        <Link className="navbar-brand ms-md-3" to="/">
          Brendan Francis
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto me-3 mb-2">  
            <li className="nav-item">
              <Link 
                className={
                  window.location.pathname === "/"
                    ? "nav-link active"
                    : "nav-link"
                } 
                to="/"
                onClick={ () => setPage('Home') }
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
                onClick={ () => setPage('Projects') }
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
                onClick={ () => setPage('Contact') }
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Header value={ page }/>
  </>);
};

export default Navbar;