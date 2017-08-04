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
          <DataCard title={"Individuals"} url={"http://54.213.83.132/hackoregon/http/oregon_individual_contributors/5/"} />
          <DataCard title={"Corporations"} url={"http://54.213.83.132/hackoregon/http/oregon_business_contributors/5/"} />
        </main>
        
      </div>
    );
  }
}

export default App;
