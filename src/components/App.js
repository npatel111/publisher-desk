import React, { Component } from 'react';
import '../../src/App.css';
import Welcome from './Welcome'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>WELCOME</h2>
          <h2>PUBLISHERS</h2>
          <h1>N I T I    P A T E L</h1>
          <h2>CAREERS</h2>
          <h2>CONTACT</h2>
        </div>
        <Welcome />
      </div>
    );
  }
}

export default App;
