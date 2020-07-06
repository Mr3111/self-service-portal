var _ =  require('lodash')

const file = {
    id : '123',
    transactionNo : 'ABC321',
    'invoiceDate' : '',
    employee_age: "61",
    profile_image: ""
};

const initialState = _.keys(file);

const fileUploadReducer = (state = initialState, action) => {
    return state;
}

export default fileUploadReducer;
