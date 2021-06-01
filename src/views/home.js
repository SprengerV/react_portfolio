import React from 'react';
import { Container, Row, Col, Image, Card, ListGroup } from 'react-bootstrap';
import Footer from '../components/footer';
import snearsquare from '../assets/img/snearsquare.jpg';
import workstation from '../assets/img/workstation.jpg';

const about = {
  header: 'About Me',
  body: "Hello, and welcome. My name is Brendan Francis and I am a small business owner from Manchester, NH. Most of my time is spent either researching and procuring products for my store, or behind the keyboard honing my coding skills. I have experience with building front end UIs in HTML, CSS, and React. On the back end, I have experience writing serverside APIs with Express.JS. I'm also familiar with MySQL and MongoDB databases, rounding out my full stack repository."
};
const edu = [
  {
    school: 'Manchester High School Central',
    year: 'Class of 2010'
  },
  {
    school: 'Arizona State University',
    year: '2010-2011'
  },
  {
    school: 'Coding Bootcamp at University of New Hampshire',
    year: '2021'
  }
];

function Home() {
  return (<>
    <Container fluid={ true }>
      <Row className="d-flex align-items-end">
        <Col xs="11" lg="5" className="ms-auto me-auto me-lg-4 mb-lg-4">
          <Card>
            <Card.Header className="navbar bg-p-dark text-s-dark">
              { about.header }
            </Card.Header>
            <Card.Body>
              <p className="main">
                { about.body }
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="10" lg="4" className="ms-auto me-auto me-lg-auto ms-lg-0">
          <Image src={ snearsquare } className="col-10 col-lg-8 mt-4 mt-lg-0 mb-lg-0 ms-auto me-auto" />
        </Col>
      </Row>
      <Row className="d-flex align-items-start">
        <Col xs="10" lg="4" className="ms-auto me-auto ms-lg-4 ms-lg-auto me-lg-0 d-flex justify-content-end">
          <Image src={workstation} className="col-10 col-lg-8 mt-4 mt-lg-0 mb-lg-4 ms-auto me-auto me-lg-0"/>
        </Col>
        <Col xs="11" lg="5" className="ms-auto me-auto ms-lg-3 mt-0 mb-4 mb-lg-0">
          <Card className="mt-4">
            <Card.Header className="navbar bg-p-dark text-s-dark">
              Education
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
              { edu && edu.map((ed, i) => <ListGroup.Item className="d-flex justify-content-between">
                <Col xs="6">
                  { ed.school }
                </Col>
                <Col xs="6" className="text-end">
                  { ed.year }
                </Col>
              </ListGroup.Item> ) } 
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </>);
};

export default Home;