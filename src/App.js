import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navbar from './components/navbar';
import Home from './views/home';
import Contact from './views/contact';
import Projects from './views/projects';
import './App.css';

function App() {
  return ( 
    <Router>
      <Container fluid={ true }>
        <Navbar/>
        <Route
          exact path={ ["/react_portfolio/","/"] }
          component={ Home }
        />
        <Route
          exact path="/react_portfolio/contact"
          component={ Contact }
        />
        <Route
          exact path="/react_portfolio/projects"
          component={ Projects }
        />
      </Container>
    </Router>
  );
}

export default App;
