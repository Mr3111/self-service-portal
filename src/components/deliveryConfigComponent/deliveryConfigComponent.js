import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import SelectComponent from "../selectComponent";
import './deliveryConfigComponent.css';
import AddFieldComponent from "../addFieldComponent";
import FieldComponent from "../fieldComponent";
// import {useSelector} from "react-redux";
// import SimpleCard from "../simpleCard/simpleCard";
// import Grid from '@material-ui/core/Grid';
// import * as data from '../../reducers/fieldsData.json'
// var _ =  require('lodash');

const DeliveryConfigComponent = ({fieldsJson, schemaFields, handleUpdate}) => {
    // const schemaFields = useSelector(state=>state.schemaFields)
    const [newFieldsJson, setNewFieldJson] = React.useState(fieldsJson)
    const handleSelect = (e, index) => {
        const updateFieldJson = newFieldsJson;
        updateFieldJson[index].field = (e ? e.value : null);
        setNewFieldJson(updateFieldJson);
    }
    const handleSubfieldUpdate = (e, index) => {
        const updateFieldJson = newFieldsJson;
        updateFieldJson[index].subFields = e;
        setNewFieldJson(updateFieldJson);
        return handleUpdate(newFieldsJson)
    }
    const handleDelete = (index) => {
        console.log('b_newFieldJson', newFieldsJson)
        const updateFieldJson = newFieldsJson.filter((field, i)=>i!==index);
        setNewFieldJson(updateFieldJson);
        console.log('a_newFieldJson', newFieldsJson)
        return handleUpdate(newFieldsJson)
    }
    return <div>
        <CssBaseline/>
        {
            newFieldsJson.map((fieldInfo, index) =>
                <FieldComponent
                    key={index}
                    fieldInfo={fieldInfo}
                    index={index}
                    handleSelect={handleSelect}
                    handleSubfieldUpdate={handleSubfieldUpdate}
                    schemaFields={schemaFields}
                    handleDelete={handleDelete}
                />
            )
        }
    </div>;
}

export default DeliveryConfigComponent;


