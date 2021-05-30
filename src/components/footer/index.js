import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Footer = () => {
  return (
    <Nav className="bg-s-dark fixed-bottom navbar-dark d-flex align-items-end" id="footer">
      <Navbar bg="p-dark" className="bg-primary w-100 mt-1">
        <span className="ms-auto me-auto text-white">
          Sprenger V LLC, 2020
        </span>
      </Navbar>
    </Nav>
  );
};

export default Footer;