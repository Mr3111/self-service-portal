import * as data from './fieldsData.json';
import configGenerator from "../util/deliveryConfigGen";

const initialState = {};

const fileUploadReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_FILE': {
            return configGenerator(JSON.parse(action.payload))
        }
        default: {
            return state
        }
    }
}

export function fileDispatch(text){
    // console.log('text', text)
    return{
        type: 'ADD_FILE',
        payload:text
    }
}

export default fileUploadReducer;
