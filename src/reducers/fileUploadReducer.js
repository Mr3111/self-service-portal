import * as data from './fieldsData.json';

const initialState = {};

const fileUploadReducer = (state = initialState, action) => {

    switch(action.type){
        case 'ADD_FILE': {
            console.log("payload",typeof action.payload)
            return JSON.parse(action.payload)}
        default: {
            return state
        }
    }

}

export function fileDispatch(text){
    console.log('text', text)
    return{
        type: 'ADD_FILE',
        payload:text
    }
}

export default fileUploadReducer;
