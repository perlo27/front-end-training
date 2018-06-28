import React from 'react';
import Welcome from "./Welcome";
import Clock from "./Clock";
import Counter from "./Counter";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Welcome name="Sara"></Welcome>
        <Clock />
        <Counter></Counter>
      </div>
    );
  }
}

export default App;
