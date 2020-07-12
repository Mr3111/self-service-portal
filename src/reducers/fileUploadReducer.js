import * as data from './fieldsData.json';

const initialState = {};

// const initialState = _.keys(file);

const fileUploadReducer = (state = initialState, action) => {
    //console.log('ffff', action)

    switch(action.type){
        case 'ADD_FILE': {
            console.log("payload",typeof action.payload)
            return JSON.parse(action.payload)}
        default: {
            //console.log('Not,Found')
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

