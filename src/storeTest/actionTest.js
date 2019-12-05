
// COUNTER
export const inc =  () => {
    // console.log('action');
    return {type: 'INC'}
};

export const dec =  () => {
    // console.log('action');
    return {type: 'DEC'}
};

export const rnd =  () => {
    return {
        type: 'RND',
        payload: Math.floor(Math.random()*10 + 1),
    }
};

// MODALWINDOW

export const cancel = () => {
    console.log('Actioncreator')
    return { type: 'MOD'}
}

