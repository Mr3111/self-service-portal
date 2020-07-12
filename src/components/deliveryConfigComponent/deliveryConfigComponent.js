import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import SelectComponent from "../selectComponent";
import './deliveryConfigComponent.css';
import {useSelector} from "react-redux";
import SimpleCard from "../simpleCard/simpleCard";
import Grid from '@material-ui/core/Grid';
import * as data from '../../reducers/fieldsData.json'
var _ =  require('lodash');

const DeliveryConfigComponent = (fieldJson) => {
    const schemaFields = useSelector(state=>state.schemaFields)
    const newFieldJson = fieldJson["fieldJson"]
    return <div>
      <CssBaseline />
       {
           newFieldJson.map((allFields, index) => {
                // console.log(allFields["customFieldName"])
                const subfield = allFields.subFields!==undefined ?
                    <DeliveryConfigComponent fieldJson= {allFields["subFields"]}/> : null
                return (
                    <div key={index}>
                            <SelectComponent
                                options={schemaFields}
                                field={allFields["customFieldName"]}
                                index={index}
                            />
                    {subfield}
                    </div>)
           })
       }
    </div>;
}

export default DeliveryConfigComponent;


