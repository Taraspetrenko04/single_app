
const initialState = {
    isOpen: false,
    isLogged: false,
    user: '',
};


const modal = (state = initialState, action) => {
    switch (action.type) {
        case 'MODAL_OPEN':
            return {
                ...state, 
                isOpen: true,
            };


        case 'MODAL_CLOSE':
            return {
                ...state,
                isOpen: false,
            };  
            
            
        case 'LOG_IN':
            return {
                ...state,
                isLogged: true,
                user: action.payload
            };
            
            
        case 'LOG_OUT':
            return {
                ...state,
                isLogged: false,
                user: '',
            };    
    

        default:
            return state;
    }
}

export default modal;