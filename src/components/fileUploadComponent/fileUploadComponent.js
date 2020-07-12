import React from 'react';
import Button from '@material-ui/core/Button';
import {DropzoneDialog} from "material-ui-dropzone";
import store from '../../store';
import {fileDispatch} from '../../reducers/fileUploadReducer'

export function FileUploadComponent(props) {
    const [open, setOpen] = React.useState(false);
    

    return (
        <div>
            <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
                Add Sample Delivery File
            </Button>

            <DropzoneDialog
                acceptedFiles={['.json']}
                cancelButtonText={"cancel"}
                submitButtonText={"submit"}
                maxFileSize={5000000}
                filesLimit={1}
                open={open}
                onDelete={deleteFileObj => {
                    console.log('onDelete', deleteFileObj);
                }}
                onClose={() => setOpen(false)}
                onSave={(files) => {
                    const reader = new FileReader();
                    reader.onload=(e)=>{
                        const file = e.target.result;
                        //console.log('onSave', file)
                        // const asfs= JSON.parse(JSON.stringify(file));
                        store.dispatch(fileDispatch(file))
                    }
                    reader.readAsText(files[0]);
                    setOpen(false);
                    // const as= JSON.parse(JSON.stringify(file))
                    // console.log("In uploa",as)
                }}
                showPreviews={true}
                showFileNamesInPreview={true}
            />
        </div>
    );
}
