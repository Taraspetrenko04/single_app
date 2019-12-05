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


// MODAL_FORM
export const modalSubmit = () => {
    return {
        type: 'MODAL_SUBMIT',
    }
}
export const mailInput = () => {
    return {
        type: 'MAIL_INPUT',
        payload: 2,
    }
}



// export {
//     modalOpen,
//     modalClose,
// }