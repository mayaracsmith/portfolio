import React from 'react';
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
    <Route exact path="/" component ={Home} />
    <Route exact path="/projects" component ={Projects} />
    <Route exact path="/resume" component ={Resume} />
    <Route exact path="/contact" component ={Contact} />
      </div>
    </Router>
  );
}

export default App;
