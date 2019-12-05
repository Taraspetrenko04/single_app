const initialState = {
    mail: 0,
    password: '',
    isValid: false,
}


const login = (state = initialState, action) => {
    // const {type, payload} = action;
    switch (action.type){
        case 'MODAL_SUBMIT':
                // console.log('LOGIN REDUCER');
            return state;

        case 'MAIL_INPUT':
            
            return state;

        default:
            return state;
    }
}

export default login;