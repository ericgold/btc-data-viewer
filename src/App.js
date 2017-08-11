import React, { Component } from 'react';
import DataCard from './Components/DataCard';
import SummaryCard from './Components/SummaryCard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Behind the Curtain Data Viewer</h2>
        </div>
        <main>
          <div>
            <DataCard title={"Individuals"} url={"http://54.213.83.132/hackoregon/http/oregon_individual_contributors/"} />
            <DataCard title={"Corporations"} url={"http://54.213.83.132/hackoregon/http/oregon_business_contributors/"} />
          </div>
            <SummaryCard title={"Summary"} url={"http://54.213.83.132/hackoregon/http/all_oregon_sum/_/"} />
        </main>
      </div>
    );
  }
}

export default App;
