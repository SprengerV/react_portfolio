import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Container, Nav, Navbar as NavB, Row } from 'react-bootstrap';
import Header from '../header';
import './navbar.css';

const dict = {
  '/react_portfolio/': 'Home',
  '/react_portfolio/projects': 'Projects',
  '/react_portfolio/contact': 'Contact'
}

const Navbar = (props) => {
  const [page, setPage] = useState('Home');

  useEffect(() => {
    if (props.location === '/react_portfolio/' || !props.location) {
      setPage('Home');
    }
  }, [setPage, props])

  return (<>  
    <Row id="navbar" className="bg-p-dark ">
      <NavB bg="primary" className="w-100 navbar-fluid mb-2">
        <Container fluid={true} className="d-flex justify-content-center justify-content-md-end">
        <NavB.Brand>
            <Link to="/react_portfolio/" className="linkyBoi text-white">
            Brendan Francis
          </Link>
        </NavB.Brand>
        <Nav.Link>
          <Link 
            className={
              window.location.pathname === "/react_portfolio/"
                ? "nav-link link-s-dark"
                : "nav-link link-p-dark"
            } 
              to="/react_portfolio/"
            onClick={ () => setPage('Home') }
          >
            Home
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link 
            className={
                window.location.pathname === "/react_portfolio/projects"
              ? "nav-link link-s-dark"
              : "nav-link link-p-dark"
            }
              to="/react_portfolio/projects"
            onClick={ () => setPage('Projects') }
          >
            Projects
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link
            className={
                window.location.pathname === "/react_portfolio/contact"
              ? "nav-link link-s-dark"
              : "nav-link link-p-dark"
            }
              to="/react_portfolio/contact"
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

export default withRouter(Navbar);