import React, {useState} from 'react';
import SelectComponent from "../selectComponent";

const AddFieldComponent = () => {
    const [data, setData] = useState({});

    const handleChange = (e) => {
        e.persist();
        setData(prev => ({...prev, [e.target.name]: e.target.value}))
    }
    console.log(data)

    return(
        <div className={'add'}>
            <div className={'input-section'}>
                <p>Field name:</p>
                <SelectComponent onChange={e => handleChange(e)} name={'name'} placeholder={'Field name...'}/>

            </div>
            <div className={'input-section'}>
                <p>Rule name:</p>
                <input onChange={e => handleChange(e)} name={'rule'} placeholder={'Rule name...'}/>
            </div>
        </div>
    )
}

export default AddFieldComponent;
