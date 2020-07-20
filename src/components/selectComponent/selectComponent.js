import React from 'react';
import { default as Select } from "react-select";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from "@material-ui/core/IconButton";
import './selectComponent.css';
import TextField from "@material-ui/core/TextField";
import AddFieldComponent from "../addFieldComponent";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    textAlign: 'left'
  })
}

const SelectComponent =({field, options, index, handleSelect, handleDelete}) =>{

  return <div>
      <div className="row" key={index} id={index}>
        <div  className="col select-button text-left">
          <div className='col-1' >{field}</div>
        </div>
        <Select
            styles={customStyles}
            isClearable={true}
            name="colors"
            options={options}
            className="col-3 select-button basic-multi-select"
            classNamePrefix="select"
            onChange={(e)=>handleSelect(e, index)}
        />
        <div className='delete-icon'>
          <IconButton aria-label="delete" onClick={e=>{
            console.log(index)
            handleDelete(index)
          }}>
            <DeleteIcon color='primary'/>
          </IconButton>
        </div>
      </div>
    </div>;
}

export default SelectComponent;
