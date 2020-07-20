import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import IconButton from "@material-ui/core/IconButton";
const _ = require('lodash')

const AddFieldComponent = ({handleAddd, fieldList}) => {
    const [fieldInfo, setFieldInfo] = useState({});
    const [error, setError] = useState(false);
    const [isValid, setIsValid] = useState(false);

    const newField = (customFieldName, rule=null) => {
        return {
            "field": null,
            customFieldName,
            rule,
            // "staticValue": false
        }
    }

    const handleChange = (e) => {
        setIsValid(e.target.value!=='');
        _.findIndex(fieldList, ['customFieldName', e.target.value])>-1?
            setError(true) : setError(false);
        // setData(prev => ({...prev, [e.target.name]: e.target.value}))
    }
    const handleAdd = (e) => {
        console.log(e.target)
    }

    return (
        <div className='row offset-1'>
            <div><IconButton disabled={!isValid} aria-label="add" onClick={handleAdd}>
                < AddCircleIcon
                    color={isValid ? 'primary': 'inherit'}
                />
            </IconButton>
            </div>
            <TextField
                error={error}
                label="Field name"
                helperText={error? "Field already present.":"Enter field name"}
                onChange={handleChange}
            />
        </div>
    )
}

export default AddFieldComponent;
