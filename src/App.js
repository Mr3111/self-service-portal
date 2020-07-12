import React, { Component } from 'react'
import './App.css'
import DeliveryConfigComponent from "./components/deliveryConfigComponent";
import {FileUploadComponent} from "./components/fileUploadComponent/fileUploadComponent";
import * as data from './reducers/fieldsData.json'
import SimpleCard from "./components/simpleCard/simpleCard";
var _ =  require('lodash');
class App extends Component {
  render() {
    const dataFields = data.fields
    // const fieldData = _.keys(dataFields)
    // console.log("App", dataFields)
    //console.log("keys",fieldData.filter(key=> key ==='subFields').map(name=>dataFields[name][0]))
    return (
      <div className="App">
        <SimpleCard>
      </SimpleCard>
        {
        //fieldData.filter(key=> key ==='subFields').map(name=>
          <DeliveryConfigComponent fieldJson = {dataFields} />
    }
    <FileUploadComponent/>
      </div>
    );
  }
}

export default App;
