// MODAL_WINDOW
export const modalOpen = () => {
    return {
        type: 'MODAL_OPEN',
    }
};


export const modalClose = () => {
    return {
        type: 'MODAL_CLOSE',
    }
}


export const logIn = (payload) => {
    console.log('action: logIn')
    return {
        type: 'LOG_IN',
        payload: payload,//&&&&&&&&&&&&&&&&&&&&&&
    }
}


export const logOut = () => {
    return {
        type: 'LOG_OUT',
    }
}
