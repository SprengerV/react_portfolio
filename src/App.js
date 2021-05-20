import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './views/home';
import Contact from './views/contact';
import Projects from './views/projects';
import './App.css';

function App() {
  const [header, setHeader] = useState('Home');

  return ( 
    <div>  
      <Router>
        <Navbar/>
        <Route
          exact path="/"
          component={ Home }
        />
        <Route
          exact path="/contact"
          component={ Contact }
        />
        <Route
          exact path="/projects"
          component={ Projects }
        />
      </Router>
    </div>
  );
}

export default App;
