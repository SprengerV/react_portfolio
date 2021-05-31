import React from 'react';
import Footer from '../components/footer';
// import Carousel from 'react-bootstrap/Carousel';
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';
import quick_lookup from '../assets/img/quick_lookup.jpg';
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
    // {
    //   imgSrc: './images/',
    //   label: '',
    //   caption: '',
    //   repo: 'https://github.com/SprengerV/'
    // },
    // {
    //   imgSrc: './images/',
    //   label: '',
    //   caption: '',
    //   repo: 'https://github.com/SprengerV/'
    // },
    // {
    //   imgSrc: './images/',
    //   label: '',
    //   caption: '',
    //   repo: 'https://github.com/SprengerV/'
    // },
    // {
    //   imgSrc: './images/',
    //   label: '',
    //   caption: '',
    //   repo: 'https://github.com/SprengerV/'
    // },
    // {
    //   imgSrc: './images/',
    //   label: '',
    //   caption: '',
    //   repo: 'https://github.com/SprengerV/'
    // }
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