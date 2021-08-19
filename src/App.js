import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './Components/NavigationBar';
import Intro from './Components/Intro';

import AboutMe from './Components/AboutMe';
import Background from './Components/Background';

import ReactParticles from './Components/ReactParticles';


function App() {
  return (
    <React.Fragment>
      <ReactParticles />
      <NavigationBar />
      <Intro />
      <AboutMe />
      <Background />
    </React.Fragment>
  );
}

export default App;
