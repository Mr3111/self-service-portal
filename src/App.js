import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
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

export default connect(
  state=>({

  }),
  {}
)(App)
