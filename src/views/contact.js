import React, { useState } from 'react';
import { Container, Row, Col, Card, Image, Dropdown, Button, ButtonGroup } from 'react-bootstrap';
import github from '../assets/img/github.png';
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
    icon: github
  },
  {
    name: 'LinkedIn',
    userName: 'Brendan Francis ',
    url: 'https://www.linkedin.com/in/brendan-francis-520b921ba/',
    icon: linkedin
  }
];

function Contact() {
  const [bono, setIpod] = useState('');

  const pieces = {
    'f': '(603)661-3351',
    'u': '6036613351',
    'n8': '16036613351'
  }

  const genNum = (pieces) => {
    const uno = pieces['n8'].substring(0,1);
    const dos = pieces['f'].substring(0,1);
    const tres = pieces['u'].substring(0,3);
    const CATORZSAY = pieces['f'].substring(4,5);
    const hello = pieces['u'].substring(3,6);
    const HELLO = pieces['f'].substring(8,9);
    const HOLA = '08' + pieces['n8'].substring(9);
    const aPlaceCalledVertigo = ([uno, ' ', dos, tres, CATORZSAY, ' ', hello, HELLO, HOLA]).join('');
    setIpod(aPlaceCalledVertigo);
  };
  const copy = (event) => {
    event.target.select();
    document.execCommand('copy');
  }

  return (
    <Container fluid={ true }>
      <Row className="d-flex justify-content-center">
        { contacts.map((contact, index) => <Col xs="10" sm="9" md="5" lg="3" className="mx-4">
          <Card border="p-dark" className="content mb-4">
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
      <Row>
        <Col xs="9" md="8" lg="7" className="ms-auto me-auto">
          <Card border="p-dark" className="content">
            <Container fluid={true}>
              <Row>
                <Col xs="6" className="text-center">
                  <Dropdown as={ ButtonGroup } className="col-5 mt-4 mb-4">
                    <Dropdown.Toggle split variant="s-dark"/>
                    <Button variant="s-dark">Email</Button>
                    <Dropdown.Menu>
                      <Dropdown.Header className="text-primary">Click to copy &#10174;</Dropdown.Header>
                      <Dropdown.Item>
                        <textarea onClick={ copy }>B.Francis@SprengerV.com</textarea>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col xs="6" className="text-center">
                  <Dropdown as={ButtonGroup} onClick={() => genNum(pieces)} alignRight={ false } className="col-5 mt-4 mb-4">
                    <Dropdown.Toggle split variant="s-dark"/>
                    <Button variant="s-dark">Phone</Button>
                    <Dropdown.Menu>
                      <Dropdown.Header className="text-primary">Click to copy &#10174;</Dropdown.Header>
                      <Dropdown.Item>
                        <textarea onClick={ copy }>{ bono.length && bono }
                        </textarea>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>
            </Container>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;