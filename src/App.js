import React, { Component } from 'react'
import './App.css'
import DeliveryConfigComponent from "./components/deliveryConfigComponent";
import {FileUploadComponent} from "./components/fileUploadComponent/fileUploadComponent";
import * as data from './reducers/fieldsData.json'
import SimpleCard from "./components/simpleCard/simpleCard";
class App extends Component {
  render() {
    const dataFields = data.fields
    return (
      <div className="App">
        <SimpleCard>
      </SimpleCard>
        <DeliveryConfigComponent fieldJson = {dataFields} />
    <FileUploadComponent/>
      </div>
    );
  }
}

export default App;
