import React from 'react';
import './header.css';

const Header = ({ value }) => {
    return (
        <header id="header" className="col-4 ms-auto me-auto d-flex flex-column justify-content-center text-center">
            <h2>{ value }</h2>
        </header>
    );
};

export default Header;