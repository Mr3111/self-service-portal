import React, { Component } from 'react';
import { default as Select } from "react-select";

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

class SelectComponent extends Component {
  render() {
    return <div>
      <Select
          // defaultValue={[colourOptions[2], colourOptions[3]]}
          // isMulti
          name="colors"
          options={options}
          className="basic-multi-select"
          classNamePrefix="select"
      />
    </div>;
  }
}

export default SelectComponent;
