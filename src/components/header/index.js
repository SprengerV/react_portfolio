import React from 'react';
import { Row, Card } from 'react-bootstrap';
import './header.css';

const Header = ({ value }) => {
    return (
        <Row>
            <Card border="s-dark" className="text-p-dark col-4 ms-auto me-auto mb-4 text-center">
                <h2 className="mt-3 mb-3">{ value }</h2>
            </Card>
        </Row>
    );
};

export default Header;