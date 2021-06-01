import React from 'react';
import { Container, Row, Col, Image, Card, ListGroup } from 'react-bootstrap';
import snearsquare from '../assets/img/snearsquare.jpg';
import workstation from '../assets/img/workstation.jpg';


function Home() {
  return (
    <Container fluid={ true }>
      <Row className="d-flex align-items-center">
        <Col xs="10" lg="5" className="ms-auto me-auto me-lg-3">
          <Card>
            <Card.Header className="navbar bg-p-dark text-s-dark">
              About Me
              </Card.Header>
            <Card.Body>
              <p className="main">
                Hello, and welcome. My name is Brendan Francis and I am a small business owner from Manchester, NH. Most of my time is spent either researching and procuring products for my store, or behind the keyboard honing my coding skills. I have experience with building front end UIs in HTML, CSS, and React. On the back end, I have experience writing serverside APIs with Express.JS. I'm also familiar with MySQL and MongoDB databases, rounding out my full stack repository.
                </p>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="10" lg="5" className="ms-auto me-auto me-lg-3">
          <Image src={ snearsquare } className="col-10 col-lg-8 mt-4 ms-auto me-auto" />
        </Col>
      </Row>
      <Row className="d-flex align-items-center">
        <Col xs="11" lg={{span: 5, offset: 2}} className="ms-auto me-3 d-flex justify-content-end">
          <Image src={ workstation } className="mt-4 mb-4 col-10 col-lg-8"/>
        </Col>
        <Col xs="11" lg={{span: 6, offset: 2}} className="ms-auto me-4">
          <Card className="mt-4">
            <Card.Header className="navbar bg-p-dark text-s-dark">
              Education
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
              <ListGroup.Item className="d-flex justify-content-between">
                <Col xs="6">
                  Manchester High School Central
                </Col>
                <Col xs="6" className="text-end">
                  Class of 2010
                </Col>
              </ListGroup.Item>                            
              <ListGroup.Item className="d-flex justify-content-between">
                <Col xs="6">
                  Arizona State University
                </Col>
                <Col xs="6" className="text-end">
                  2010-2011
                </Col>
              </ListGroup.Item>          
              <ListGroup.Item className="d-flex justify-content-between">
                <Col xs="6">
                  Coding Bootcamp at University of New Hampshire
                </Col>
                <Col xs="6" className="text-end">
                  2021
                </Col>
              </ListGroup.Item> 
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;