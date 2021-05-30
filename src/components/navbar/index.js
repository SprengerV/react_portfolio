import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar as NavB } from 'react-bootstrap';
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
    <NavB bg="p-dark" variant="dark" id="navbar">
      <div className="mt-0 mb-1 bg-primary container-fluid d-flex justify-content-center justify-content-md-end">
        <NavB.Brand>
          <Link to="/" className="linkyBoi text-white">
            Brendan Francis
          </Link>
        </NavB.Brand>
        <Nav.Link>
          <Link 
            className={
              window.location.pathname === "/"
                ? "nav-link link-s-dark"
                : "nav-link link-p-dark"
            } 
            to="/"
            onClick={ () => setPage('Home') }
          >
            Home
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link 
            className={
              window.location.pathname === "/projects"
              ? "nav-link link-s-dark"
              : "nav-link link-p-dark"
            }
            to="/projects"
            onClick={ () => setPage('Projects') }
          >
            Projects
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link
            className={
              window.location.pathname === "/contact"
              ? "nav-link link-s-dark"
              : "nav-link link-p-dark"
            }
            to="/contact"
            onClick={ () => setPage('Contact') }
          >
            Contact
          </Link>
        </Nav.Link>
      </div>
    </NavB>
    <Header value={ page }/>
  </>);
};

export default Navbar;