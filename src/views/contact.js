import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardGroup, Image } from 'react-bootstrap';
import github120 from '../assets/img/github120.png';
import linkedin from '../assets/img/linkedin.png';
import documentlg from '../assets/img/documentlg.png';
import resume from '../assets/doc/Resume.pdf';

const contacts = [
  {
    name: 'Resume',
    userName: 'Click to download ',
    url: resume,
    icon: documentlg
  },
  {
    name: 'GitHub',
    userName: 'SprengerV ',
    url: 'https://github.com/SprengerV',
    icon: github120
  },
  {
    name: 'LinkedIn',
    userName: 'Brendan Francis ',
    url: 'https://www.linkedin.com/in/brendan-francis-520b921ba/',
    icon: linkedin
  }
]

function Contact() {
  return (
    <Container fluid={ true }>
      <Row className="d-flex justify-content-center">
        { contacts.map((contact, index) => <Col xs="3">
          <Card border="p-dark" className="">
            <Card.Header className="bg-primary text-white">
              { contact.name }
            </Card.Header>
            <Card.Body>
              <Container fluid={true} className="contact d-flex flex-column justify-content-around">
                <Image src={ contact.icon } className="social col-8 ms-auto me-auto"/>
                <a href={ contact.url } target="_blank" rel="noreferrer" className="linkyBoi iii ms-auto me-auto mt-4 text-center">
                  { contact.userName }   &#10064;
                </a>
              </Container>
            </Card.Body>
          </Card>
        </Col>) }
      </Row>
      <Row className="d-flex justify-content-center">
        <Col xs="12" md="10" lg="8">
          <Card border="p-dark" bg="white">

          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;