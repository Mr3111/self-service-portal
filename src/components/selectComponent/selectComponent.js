import React from 'react';
import { default as Select } from "react-select";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from "@material-ui/core/IconButton";
import './selectComponent.css';

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    'text-align': 'left'
  })
}

const SelectComponent =({field, options, index}) =>{
    return <div className="row" key={index} id={index}>
      <div  className="col select-button text-left">
        {field}
      </div>
      <Select
          styles={customStyles}
          isClearable={true}
          name="colors"
          options={options}
          className="col select-button basic-multi-select"
          classNamePrefix="select"
      />
      <div className='delete-icon'>
        <IconButton aria-label="delete" >
          <DeleteIcon color='primary'/>
        </IconButton>
      </div>
    </div>;
}

export default SelectComponent;
