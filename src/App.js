import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Background from './Components/Background';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import ContactMe from './Components/ContactMe';
import Footer from './Components/Footer';

import ReactParticles from './Components/Generic/ReactParticles';


function App() {
  return (
    <React.Fragment>
      <ReactParticles />
      
      <Header />
      <Home />
      <AboutMe />
      <Background />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </React.Fragment>
  );
}

export default App;
