import React, { Component } from 'react';
import '../../src/App.css';
import Welcome from './Welcome'
import NavBar from './NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {!this.props.children ? <Welcome /> : null }
        {this.props.children}
      </div>
    );
  }
}

export default App;
