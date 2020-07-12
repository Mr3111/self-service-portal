import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import SelectComponent from "../selectComponent";
import './deliveryConfigComponent.css';
import {useSelector} from "react-redux";

const DeliveryConfigComponent = (fieldJson) => {
    const schemaFields = useSelector(state=>state.schemaFields)
    const newFieldJson = fieldJson["fieldJson"]
    return <div>
      <CssBaseline />
      <div className='outer-card'>
      </div>
       {
           newFieldJson.map((allFields, index) => {
                console.log(allFields["customFieldName"])
                const subfield = allFields.subFields!==undefined? <DeliveryConfigComponent fieldJson= {allFields["subFields"]}/>
                : null
                return (<div>
                            <SelectComponent
                                options={schemaFields}
                                field={allFields["customFieldName"]}
                                index={index}
                            />
                {subfield}
                </div>)
        }
        )
       }
    </div>;
}

export default DeliveryConfigComponent;


