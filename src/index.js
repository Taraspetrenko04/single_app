import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux'; //allow acces to store
import { BrowserRouter as Router } from 'react-router-dom';//routes for pages

import store from './store' 
import App from './components/app'


ReactDOM.render(
    <Provider store={store}>
            <Router>
                <App />
            </Router>
    </Provider>, 
    document.getElementById("root")
);








// import React from 'react';
// import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
// import reducer from './store/reducer.js'
// import { Provider } from 'react-redux' // makes store available to any nested components
// import './index.css';
// import { BrowserRouter } from "react-router-dom";
// import App from './components/app';

// const store = createStore(reducer);//create store
// // state = reducer(state, { type: 'INC'} );
//         // getState() 
//         // dispatch(action)
//         // subscribe(listener)
//         // replaceReducer(nextReducer)


// ReactDOM.render(
//     <Provider store={store}>
//         <BrowserRouter>
//             <App />
//         </BrowserRouter>
//     </Provider>,
//         document.getElementById("root"));
    
    

