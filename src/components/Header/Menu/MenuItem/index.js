import React from 'react';
import { connect } from "react-redux"; //дает доступ к store
import { bindActionCreators } from "redux";//bind action && dispatch
import * as actions from "../../../../actions"; //импортируем все екшены(1) в bindActionCreator
// import { Link } from 'react-router-dom';
//добавить url

const MenuItem = ( { modalOpen} ) => {
    return(
    <React.Fragment>
        <li className="header__menu-item" key={1}>
            HOME
        </li>
        <li className="header__menu-item" key={2}>
            GOODS
        </li>
        <li className="header__menu-item" key={3} onClick={modalOpen}>
            LOGIN
        </li>
    </React.Fragment>
    )
}


const mapStateToProps = state => {
    return {};
  };


const mapDispatchToProps = dispatch => {
    // console.log('mapDispatchtoprops');
    const { modalOpen } = bindActionCreators(actions, dispatch);
    return {
        modalOpen,
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(MenuItem); //коненкт оборачивает counter
// export default MenuItem;