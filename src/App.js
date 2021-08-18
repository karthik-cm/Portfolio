import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './Components/NavigationBar';
import Intro from './Components/Intro';
import ReactParticles from './Components/ReactParticles';

import AboutMe from './Components/AboutMe';

function App() {
  return (
    <React.Fragment>
      <ReactParticles />
      <NavigationBar />
      <Intro />
      <AboutMe />
    </React.Fragment>
  );
}

export default App;
