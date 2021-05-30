import React from 'react';
import { Navbar } from 'react-bootstrap';

const Footer = () => {
  return (
  <div className="bg-s-dark fixed-bottom">
    <Navbar className="bg-p-dark container-fluid mt-2">
      <span className="ms-auto me-auto text-white">
        Sprenger V LLC, 2020
      </span>
    </Navbar>
  </div>
  );
};

export default Footer;