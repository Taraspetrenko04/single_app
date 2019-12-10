import React from 'react';
import { connect } from "react-redux"; //дает доступ к store
import { bindActionCreators } from "redux";//bind action && dispatch
import * as actions from "../../../../actions"; //импортируем все екшены(1) в bindActionCreator
// import { Link } from 'react-router-dom';
//добавить url

const MenuItem = ( { modalOpen, logOut, isLogged} ) => {
    let log = '';
    if( !isLogged ){
       log = <li className="header__menu-item" key={3} onClick={modalOpen}>
        LOGIN </li>;

    }else{
       log = <li className="header__menu-item" key={4} onClick={logOut}>
        LOGOUT </li>;
    }
    return(
    <React.Fragment>
        <li className="header__menu-item" key={1}>
            HOME
        </li>
        <li className="header__menu-item" key={2}> 
            GOODS
        </li>
        {log}
        {/* <li className="header__menu-item" key={3} onClick={modalOpen}>
            LOGIN
        </li>
        <li className="header__menu-item" key={4} onClick={logOut}>
            LOGOUT
        </li> */}
    </React.Fragment>
    )
}


const mapStateToProps = state => {
    return {
        isLogged: state.modal.isLogged,
    };
  };


const mapDispatchToProps = dispatch => {
    const { modalOpen, logOut } = bindActionCreators(actions, dispatch);
    return {
        modalOpen,
        logOut,
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(MenuItem); //коненкт оборачивает counter
// export default MenuItem;