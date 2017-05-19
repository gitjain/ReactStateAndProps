import React, { Component } from 'react';
import {Layout} from './components/Layout';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
         <Layout/>
        </p>
      </div>
    );
  }
}

export default App;
