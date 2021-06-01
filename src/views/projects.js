import React from 'react';
import Footer from '../components/footer';
// import Carousel from 'react-bootstrap/Carousel';
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';
import quick_lookup from '../assets/img/quick_lookup.jpg';
import keygen from '../assets/img/keygen.jpg';
import techl0rd from '../assets/img/techl0rd.jpg';
import b00kzearch from '../assets/img/b00kzearch.jpg';
import dinnerdate from '../assets/img/dinnerdate.jpg';
import dndtracker from '../assets/img/dndtracker.jpg';
import './style.css';

const Projects = () => { 
  const ps = [
    {
      imgSrc: quick_lookup,
      label: 'Quick Lookup',
      caption: 'A React app for searching an employee database generated with RandomUserAPI',
      repo: 'https://github.com/SprengerV/',
      deploy: 'https://sprengerv.github.io/quick_lookup/'
    },
    {
      imgSrc: keygen,
      label: 'Keygen',
      caption: 'A password generator web app built in HTML, CSS, and Javascript',
      repo: 'https://github.com/SprengerV/password_generator',
      deploy: 'https://sprengerv.github.io/password_generator/'
    },
    {
      imgSrc: techl0rd,
      label: 'techl0rd Blog',
      caption: 'A blog site with authentication that allows user to make posts and edit posts and leave comments',
      repo: 'https://github.com/SprengerV/techl0rd_blog',
      deploy: 'https://techl0rd.herokuapp.com/'
    },
    {
      imgSrc: b00kzearch,
      label: 'b00kzearch',
      caption: 'A MERN app that utilizes Google Books API to search for and save books',
      repo: 'https://github.com/SprengerV/b00kzearch',
      deploy: 'https://b00kzearch.herokuapp.com/'
    },
    {
      imgSrc: dinnerdate,
      label: 'Dinner-Date',
      caption: 'My first group project. Uses 2 external APIs to generate movie and dinner combos for date ideas',
      repo: 'https://github.com/SprengerV/dinner-date',
      deploy: 'https://sprengerv.github.io/dinner-date/'
    },
    {
      imgSrc: dndtracker,
      label: 'DandD Tracker',
      caption: 'My second group project. Uses auth0 and allows users to create and save characters for their Dungeons and Dragons campaigns',
      repo: 'https://github.com/SprengerV/DandD_tracker',
      deploy: 'https://dnd-trackz0rz.herokuapp.com/'
    }
  ];

  return (
    <main>
      <Card border="p-dark" className="content col-11 col-md-9 col-lg-8 col-xl-7 ms-auto me-auto mt-4">
        <Carousel className="mb-2 ms-4 me-4 mt-2">
          { ps.map((p, i) => 
          <Carousel.Item key={ i }>
            <img
              id="carol"
              className="d-block w-100"
              src={ p.imgSrc }
              alt={ p.label }
            />
            <Carousel.Caption className="text-dark">
              <h3 className="text-s-dark">{ p.label }</h3>
              <p className="text-p-dark">{ p.caption }</p>
              <Container fluid={ true }>
                <Row className="d-inline-flex">  
                  <Col xs="6" className="text-nowrap">
                    <a href={ p.repo } target="_blank" rel="noreferrer" className="link-s-dark col-5 mx-2 text-center">
                      Repository  
                    </a>
                  </Col>
                  <Col xs="6" className="text-nowrap">
                    <a href={ p.deploy } target="_blank" rel="noreferrer" className="link-s-dark col-5 mx-2 text-center">
                      Deployment  
                    </a>
                  </Col>
                </Row>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
          ) }
        </Carousel>
      </Card>
      <Footer/>
    </main>
  );
};

export default Projects;