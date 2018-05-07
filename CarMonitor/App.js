import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Principal from './src/views/Principal';
import Cena1 from './src/views/Cena1';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene>
          <Scene key='principal' component={Principal} initial />
          <Scene key='cena1' component={Cena1} />
        </Scene>
      </Router>
    );
  }
}

