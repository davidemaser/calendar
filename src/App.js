import React, { Component } from 'react';
import Calendar from "./Components/Calendar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calendar lang="en"/>
      </div>
    );
  }
}

export default App;
