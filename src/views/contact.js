import React from 'react';
import { Container, Row, Col, Card, Link, Image, ResponsiveEmbed } from 'react-bootstrap';
import github120 from '../assets/img/github120.png';
import linkedin from '../assets/img/linkedin.png';
import documentlg from '../assets/img/documentlg.png';
import resume from '../assets/doc/Resume.pdf';

const contacts = [
  {
    name: 'GitHub',
    userName: 'SprengerV',
    url: 'https://github.com/SprengerV',
    icon: github120
  },
  {
    name: 'LinkedIn',
    userName: 'Brendan Francis',
    url: 'https://www.linkedin.com/in/brendan-francis-520b921ba/',
    icon: linkedin
  },
  {
    name: 'Resume',
    userName: 'Click to download ',
    url: resume,
    icon: documentlg
  }
]

function Contact() {
  return (
    <Container fluid={ true }>
      <Row className="d-flex justify-content-center">
        { contacts.map((contact, index) => <Col xs="3">
          <Card border="p-dark" bg="light">
            <Card.Header className="bg-primary text-white">
              { contact.name }
            </Card.Header>
            <Card body className="container-fluid d-flex flex-column justify-content-around">
              <Row>
              <Col xs="10">
                <Image src={ contact.icon }/>
              </Col>
              </Row>
            </Card>
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