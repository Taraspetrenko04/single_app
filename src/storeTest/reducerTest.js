//MUST BE PURE FUNCTION
// const initialState = {
//     counter: 0,
//     modal: false,
// }
const initialState = false;

// function ret(initialState){
//   return{
//     ...initialState,
//     modal:true
//   }
// }

// // console.log(ret(initialState));
// let stat = initialState;
// // let x = stat.counter + 1
// // console.log(x);
// let func = (state = initialState) =>{
//   state.counter = state.counter + 1;
//   console.log(state) 
//   return state
// }
// func();
// func();
// func();
// // console.log(state)


const reducer = (state = initialState, action) => {
    switch (action.type) {
      // counter
      // case "INC":
      //   return state + 1;
      // case "DEC":
      //   return state - 1;
      // case "RND":
      //   return state + action.payload;
        // ModalWindow
      case "MOD":
          console.log(`Reducer - ${state}`)
        return state = !state
      default:
        return state;
    }
      

   
};

export default reducer