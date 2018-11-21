import React, { Component } from 'react';
import classes from './App.css';

import Aux from './hoc/Aux'
import ParticlesBg from './components/Particles/Particles'
import AboutPage from './containers/AboutPage/AboutPage'
import LandingPage from './containers/LandingPage/LandingPage'
import WorkPage from './containers/WorkPage/WorkPage'
import ContactPage from './containers/ContactPage/ContactPage'

class App extends Component {
  render() {
    return (
      <Aux>
          <ParticlesBg/>
          <AboutPage />
          <LandingPage />
          <WorkPage />
          <ContactPage />
      </Aux>
    );
  }
}

export default App;
