import React from 'react';
import Footer from '../components/footer';
import Carousel from 'react-bootstrap/Carousel';
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
      <div id="carouselWrapper" className="col-7 ms-auto me-auto">
        <Carousel >
          { ps.map((p, i) => 
          <Carousel.Item key={ i }>
            <img 
              className="d-block w-100"
              src={ p.imgSrc }
              alt={ p.label }
            />
            <Carousel.Caption className="text-dark">
              <h3>{ p.label }</h3>
              <p>{ p.caption }</p>
              <div className="container-fluid">
                <div className="row d-inline-flex">  
                  <a href={ p.repo } target="_blank" rel="noreferrer" className="col-5 mx-2 text-center">
                    Repository  
                  </a>
                  <a href={ p.deploy } target="_blank" rel="noreferrer" className="col-5 mx-2 text-center">
                    Deployment  
                  </a>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          ) }
        </Carousel>
      </div>
      <Footer/>
    </main>
  );
};

export default Projects;