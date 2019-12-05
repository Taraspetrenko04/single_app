import React, { Component } from 'react';
import './index.css'
import Logo from './Logo';
import Menu from './Menu';
import Modal from '../Modal'


import { connect } from "react-redux"; //дает доступ к store
// import { bindActionCreators } from "redux";//bind action && dispatch
// import * as actions from "../../actions"; //импортируем все екшены(1) в bindActionCreator 

class Header extends Component{


        render(){


            const nav = [
                {id: '1', title: 'Home', url: '/', active: false},
                {id: '2', title: 'Goods', url: '/', active: false},
                {id: '3', title: 'Login', url: '/login', active: false },
            ];

            const {isOpen}  = this.props.isOpen;
            // console.log(isOpen);



        return(
            <div className='header__wrapper'>
                {isOpen ? <Modal /> : null}
                <Logo />
                <Menu 
                    items={nav}/>
            </div>
        )
    }
}

//для связки connect and store нужно 2 функции mapStateToProps() mapDispatchToProps()
const mapStateToProps = state => {
    // console.log('mapStateToProps: '+ state.modal.isOpen);
    return {
      isOpen: state.modal
    };
  };
  
//   const mapDispatchToProps = dispatch => {
//     // console.log('mapDispatchtoprops');
//     const { inc, dec, rnd } = bindActionCreators(actions, dispatch);
//     return {
//       inc,
//       dec,
//       rnd,
//     };
//   };
  // const mapDispatchToProps = (dispatch) => {
  //     return{
  //         inc: () => dispatch(inc())
  //     }
  // }
  export default connect(mapStateToProps, /*mapDispatchToProps*/)(Header); //коненкт оборачивает counter