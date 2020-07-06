import fileUploadReducer from "./fileUploadReducer";
import {combineReducers} from "redux";
import SchemaFieldsReducer from "./schemaFieldsReducer";

const rootReducer = combineReducers({
    file: fileUploadReducer,
    schemaFields: SchemaFieldsReducer
})

export default rootReducer;


