import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Login from './src/views/Login';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene>
          <Scene key='login' component={Login} initial hideNavBar={true} />
        </Scene>
      </Router>
    );
  }
}

