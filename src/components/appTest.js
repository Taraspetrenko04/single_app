import React, { Component } from 'react';
import Header from './Header'
import  Counter  from './counter.js';
// import Spinner from './Spinner';
import Modal from './Modal/index.js'
import {BrowserRouter as Router, } from 'react-router-dom'; //{Route}

export default class App extends Component {

  // НАДО ПРОПИСАТЬ ЕСЛИ isOpen == false то отрисовуем null
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Counter />
          <Modal />
        </div>
      </Router>
    );
  }
}