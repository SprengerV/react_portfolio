import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar as NavB, Navlink, Button, ListGroup } from 'react-bootstrap';
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
    <Navbar expand="md" bg="p-dark" variant="primary" className="container d-flex align-items-start" id="navbar">
      <div className="mb-2">
        <Link className="navbar-brand ms-md-3" to="/">
          Brendan Francis
        </Link>
        <Navbar.Toggle aria-controls="navCollapse"/>        <Navbar.Collapse id="navCollapse">  
          <ListGroup>
            <ListGroup.Item className="nav-item">
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
            </ListGroup.Item>
            <ListGroup.Item className="nav-item">
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
            </ListGroup.Item>
            <ListGroup.Item className="nav-item">
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
            </ListGroup.Item>
          </ListGroup>
        </Navbar.Collapse>
      </div>
    </Navbar>
    <Header value={ page }/>
  </>);
};

export default Navbar;