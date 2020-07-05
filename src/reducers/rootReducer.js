import fileUploadReducer from "./fileUploadReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    file: fileUploadReducer
})

export default rootReducer;


