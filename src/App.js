import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './Components/NavigationBar';
import Intro from './Components/Intro';

import AboutMe from './Components/AboutMe';
import Background from './Components/Background';
import Skills from './Components/Skills';
import Projects from './Components/Projects';

import ReactParticles from './Components/Generic/ReactParticles';


function App() {
  return (
    <React.Fragment>
      <ReactParticles />
      <NavigationBar />
      <Intro />
      <AboutMe />
      <Background />
      <Skills />
      <Projects />
    </React.Fragment>
  );
}

export default App;
