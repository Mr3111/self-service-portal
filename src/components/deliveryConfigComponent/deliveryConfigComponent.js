import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import SelectComponent from "../selectComponent";
import './deliveryConfigComponent.css';
import {useSelector} from "react-redux";

import Grid from '@material-ui/core/Grid';
import * as data from '../../reducers/fieldsData.json'
var _ =  require('lodash');

const DeliveryConfigComponent = (fieldJson) => {
    const schemaFields = useSelector(state=>state.schemaFields)
    const newFieldJson = fieldJson["fieldJson"]
    console.log("indelerrver", fieldJson)
    const fileFields = _.keys(newFieldJson)
    // console.log("nfj",newFieldJson)
    return <div>
      <CssBaseline />
      <div className='outer-card'>
      {/* <SimpleCard>
      </SimpleCard> */}
      </div>
       {
           newFieldJson.map((allFields, index) => {
            const fieldKeys = _.keys(allFields);
            
            // if(allFields["customFieldName"]){
                console.log(allFields["customFieldName"])
                const subfield = allFields.subFields!=undefined? <DeliveryConfigComponent fieldJson= {allFields["subFields"]}></DeliveryConfigComponent>
                : null
                return (<div>
                            <SelectComponent
                                options={schemaFields}
                                field={allFields["customFieldName"]}
                                index={index}
                            />
                {subfield}
                </div>)
                
            //} 
        }
        )
       }

          {/* <Grid container spacing={0}>
            {fileFields.map((field, index) => {
                return <Grid key={index} item xs={12}>
                    <SelectComponent
                        options={schemaFields}
                        field={field}
                        index={index}
                    />
                </Grid>
            })}
        </Grid> */}
        {/* {
            console.log("In dedli",fileFields.filter(key=> key ==='subFields').map(name=>
               newFieldJson[name])) */
        }


      
    </div>;
}

export default DeliveryConfigComponent;


