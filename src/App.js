import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieContainer from './MovieContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieContainer />
      </div>
    );
  }
}

export default App;
