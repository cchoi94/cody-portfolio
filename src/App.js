import React, { Component } from 'react';
import classes from './App.css';

import Aux from './hoc/Aux'
import LandingPage from './containers/LandingPage/LandingPage'

class App extends Component {
  render() {
    return (
      <Aux>
          <LandingPage />
      </Aux>
    );
  }
}

export default App;
