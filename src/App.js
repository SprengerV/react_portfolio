import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './views/home';
import Contact from './views/contact';
import Projects from './views/projects';
import './App.css';

function App() {
  return (
    <Router>
      <div>  
        <Navbar/>
        <main>
          <Route exact path="/" component={Home}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/projects" component={Projects}/>
        </main>
      </div>
    </Router>
  );
}

export default App;
