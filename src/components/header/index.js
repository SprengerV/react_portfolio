import React from 'react';
import { Card } from 'react-bootstrap';
import './header.css';

const Header = ({ value }) => {
    return (
        <Card variant="p-dark" className="border-s-dark text-p-dark col-4 ms-auto me-auto d-flex align-items-center text-center">
            <h2>{ value }</h2>
        </Card>
    );
};

export default Header;