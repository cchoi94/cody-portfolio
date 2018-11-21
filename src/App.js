import React, { Component } from 'react';
import classes from './App.css';

import Aux from './hoc/Aux'
import ParticlesBg from './components/Particles/Particles'
import LandingPage from './containers/LandingPage/LandingPage'
import WorkPage from './containers/WorkPage/WorkPage'

class App extends Component {
  render() {
    return (
      <Aux>
          <ParticlesBg/>
          <LandingPage />
          <WorkPage />
      </Aux>
    );
  }
}

export default App;
