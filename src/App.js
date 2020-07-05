import React, { Component } from 'react'
import './App.css'
import DeliveryConfigComponent from "./components/deliveryConfigComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <DeliveryConfigComponent/>
      </div>
    );
  }
}

export default App;
