import React, { Component } from 'react';
import nigga from './img/nigga.jpg';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <img src={nigga} width="600px" alt="img"/>          
        </header>
      </div>
    );
  }
}

export default App;