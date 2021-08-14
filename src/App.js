import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactParticles from 'react-particles-js';
import NavigationBar from './Components/NavigationBar';
import Header from './Components/Header';

function App() {
  return (
    <React.Fragment>
      <ReactParticles className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: '#f9ab00'
              }
            }
          }
        }}
      />

      <NavigationBar />
      <Header />
    </React.Fragment>
  );
}

export default App;
