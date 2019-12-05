

const initialState = {
    isOpen : false,
};


const modal = (state = initialState, action) => {
    // const {type, payload} = action;
    switch (action.type) {
        case 'MODAL_OPEN':
            return {
                isOpen: true,
            };


        case 'MODAL_CLOSE':
            return {
                isOpen: false,
            };    
    

        default:
            return state;
    }
}

export default modal;