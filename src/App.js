import React, { Component } from 'react'
import './App.css'
import DeliveryConfigComponent from "./components/deliveryConfigComponent";
import {FileUploadComponent} from "./components/fileUploadComponent/fileUploadComponent";
import * as data from './reducers/fieldsData.json'
import SimpleCard from "./components/simpleCard/simpleCard";
import {connect} from "react-redux";
import AddFieldComponent from "./components/addFieldComponent";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schemaFields: props.schemaFields,
            configFields: data.fields
        }
    }

    handleFieldJsonUpdate=(fieldJson)=>{
        this.setState({
            configFields: fieldJson
        })
    }

    handleUpdate=(e)=>{
        this.setState({
            configFields: e.target.value
        })
    }

    render() {
      // console.log('fields', this.state.schemaFields)
        return (
          <div className="App">
            <DeliveryConfigComponent
                fieldsJson = {this.state.configFields}
                schemaFields={this.state.schemaFields}
                handleUpdate={this.handleFieldJsonUpdate}
            />
            <FileUploadComponent/>
          </div>
        );
  }
}

const mapStateToProps = state => {
    // console.log('state', state)
    return {
        schemaFields: state.schemaFields
    }
};

const mapDispatchToProps = () => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
