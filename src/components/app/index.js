import React, { Component } from 'react';
import Header from '../Header';
import '../../index.css';
// import Modal from '../Modal';

// 
import { connect } from "react-redux"; //дает доступ к store
// import { bindActionCreators } from "redux";//bind action && dispatch
// import * as actions from "../../storeTest/actionTest.js/index.js.js"; //импортируем все екшены(1) в bindActionCreator 




class App extends Component {
    // НАДО ПРОПИСАТЬ ЕСЛИ isOpen == false то отрисовуем null
    render() {
    // const { isOpen } = this.props.state
    // console.log(isOpen);
      return (
        <div className="container">
            {/* <Modal /> */}
            <Header />
        </div>
      );
    }
  }


  const mapStateToProps = state => {
    // console.log('mapStateToProps');
    return {
      state: state
    };
  };

  export default connect(mapStateToProps, /*mapDispatchToProps*/)(App); //коненкт оборачивает counter
