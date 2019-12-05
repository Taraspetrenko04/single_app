import React from "react";
import { connect } from "react-redux"; //дает доступ к store
import { bindActionCreators } from "redux";//bind action && dispatch
import * as actions from "../store/action.js"; //импортируем все екшены(1) в bindActionCreator

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div>
      <h1>Counter</h1>
      <h3>{counter}</h3>
      <button type="button" onClick={inc}>
        INC+
      </button>
      <button type="button" onClick={dec}>
        DEC-
      </button>
      <button type="button" onClick={rnd}>
        RND
      </button>
    </div>
  );
};

//для связки connect and store нужно 2 функции mapStateToProps() mapDispatchToProps()
const mapStateToProps = state => {
  // console.log('mapStateToProps');
  return {
    counter: state
  };
};

const mapDispatchToProps = dispatch => {
  // console.log('mapDispatchtoprops');
  const { inc, dec, rnd } = bindActionCreators(actions, dispatch);
  return {
    inc,
    dec,
    rnd,
  };
};
// const mapDispatchToProps = (dispatch) => {
//     return{
//         inc: () => dispatch(inc())
//     }
// }
export default connect(mapStateToProps, mapDispatchToProps)(Counter); //коненкт оборачивает counter
