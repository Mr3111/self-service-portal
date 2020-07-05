import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SelectComponent from "../selectComponent";
import {FileUploadComponent} from "../fileUploadComponent/fileUploadComponent";

class DeliveryConfigComponent extends Component {
  render() {
    return <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">


        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '50vh' }} >
          <div className="row">
            <div className="col">
              1 of 2
            </div>
            <div className="col">
              <SelectComponent/>
            </div>
          </div>
        </Typography>
      </Container>
      <FileUploadComponent/>
    </React.Fragment>;
  }
}

export default DeliveryConfigComponent;


