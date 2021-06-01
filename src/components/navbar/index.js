import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar as NavB, Row } from 'react-bootstrap';
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
    <Row id="navbar" className="bg-p-dark ">
      <NavB bg="primary" className="w-100 navbar-fluid mb-2">
        <Container fluid={true} className="d-flex justify-content-center justify-content-md-end">
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
        </Container>
      </NavB>
    </Row>
    <Header value={ page }/>
  </>);
};

export default Navbar;