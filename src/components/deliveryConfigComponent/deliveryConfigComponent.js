import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import SelectComponent from "../selectComponent";
import './deliveryConfigComponent.css';
// import {useSelector} from "react-redux";
// import SimpleCard from "../simpleCard/simpleCard";
// import Grid from '@material-ui/core/Grid';
// import * as data from '../../reducers/fieldsData.json'
// var _ =  require('lodash');

const DeliveryConfigComponent = ({fieldJson, schemaFields, handleUpdate}) => {
    // const schemaFields = useSelector(state=>state.schemaFields)
    const [newFieldJson, setnewFieldJson] = React.useState(fieldJson)
    const handleSelect = (e, index) =>{
        const value = e ? e.value : null
        console.log('ttt', value, index)
        newFieldJson[index].field=value
    }
    return <div>
      <CssBaseline />
       {
           newFieldJson.map((allFields, index) => {
                // console.log(allFields["customFieldName"])
                // const schemaFields =
                const subfield = allFields.subFields!==undefined ?
                    <DeliveryConfigComponent
                        fieldJson= {allFields["subFields"]}
                        index={index}
                        // schemaFields={}
                    /> : null
                return (
                    <div key={index}>
                            <SelectComponent
                                options={schemaFields}
                                field={allFields["customFieldName"]}
                                index={index}
                                handleSelect={handleSelect}
                            />
                    {subfield}
                    </div>)
           })
       }
    </div>;
}

export default DeliveryConfigComponent;


