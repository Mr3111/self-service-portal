import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import SelectComponent from "../selectComponent";
import {FileUploadComponent} from "../fileUploadComponent/fileUploadComponent";
import './deliveryConfigComponent.css';
import {useSelector} from "react-redux";
import SimpleCard from "../simpleCard/simpleCard";
import Grid from '@material-ui/core/Grid';

const DeliveryConfigComponent = () => {
    const schemaFields = useSelector(state=>state.schemaFields)
    const fileFields = useSelector(state => state.file)
    return <div>
      <CssBaseline />
      <div className='outer-card'>
      <SimpleCard>
      </SimpleCard>
      </div>
          <Grid container spacing={0}>
            {fileFields.map((field, index) => {
                return <Grid key={index} item xs={12}>
                    <SelectComponent
                        options={schemaFields}
                        field={field}
                        index={index}
                    />
                </Grid>
            })}
        </Grid>


      <FileUploadComponent/>
    </div>;
}

export default DeliveryConfigComponent;


