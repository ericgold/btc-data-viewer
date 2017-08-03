import React, { Component } from 'react';
import DataCard from './Components/DataCard';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Behind the Curtain Data Viewer</h2>
        </div>
        <main>
          <DataCard title={"Individuals"} />
          <DataCard title={"Corporations"} />
        </main>
        
      </div>
    );
  }
}

export default App;
