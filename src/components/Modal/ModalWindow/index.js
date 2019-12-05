import React, { Component } from "react";
import { connect } from "react-redux"; //дает доступ к store
import { bindActionCreators } from "redux"; //bind action && dispatch
import * as actions from "../../../actions"; //импортируем все екшены(1) в bindActionCreator


class ModalWindow extends Component {
  constructor(props){
  super(props);
    this.state = {
      mail: '',
      password: '',
      isValidMail : true,
      isValidPassword : true,
      isLogin: true,
    }
  }


  mailInput = (event) => {
    this.setState({mail: event.target.value})
  };

  passwordInput = (event) => {
    this.setState({password: event.target.value})
  };
    

  render(){

    const { modalClose } = this.props;
    let wrongMail = '';
    let wrongPassword = '';
    let loginSucses = '';
    

    const submitModal = () =>{
      if( validator() ){
        console.log('valid');
        this.setState({ isLogin: false });
        setTimeout(modalClose, 1800);
      }
      // modalClose();

    }


    const validator = () => {
      let mail = this.state.mail;
      let password = this.state.password;
      let mailCheck = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+.([A-Za-z]{2,4})$/i;
      let passwordCheck = /^[а-яіІїЇєЄА-ЯёЁa-zA-Z0-9]+$/;
      let m = '';
      let p = '';


      if (!mailCheck.test(mail)) {
        this.setState({ isValidMail: false });
      } else {
        this.setState({ isValidMail: true });
        m = true;
      }


      if (!passwordCheck.test(password)) {
        this.setState({ isValidPassword: false });
      } else {
        this.setState({ isValidPassword: true });
        p = true;
      }

      if (m && p){
        console.log(`m: ${m}, p: ${p}`);
        return true;
      }
      


      // if (this.state.isValidMail && this.state.isValidPassword) {
      //   return console.log("VALID");
      // } else {
      //   return console.log("INVALID");
      // }

      // return this.setState({ mail: this.state.mail + 1});
      // console.log(this.state.mail);
      // modalClose();
    };


    if (!this.state.isValidMail){
      wrongMail = <p className='modal__warning'>Entered email is incorect</p>
    }
    if (!this.state.isValidPassword){
      wrongPassword = <p className='modal__warning'>Entered password is incorect</p>
    }
    if (!this.state.isLogin){
      loginSucses = <p className='modal__sucses'>login accepted Successfully...</p>
    }


    return(
      <div className="modal__login">
             <div className="modal__store">
               <h3 className='modal__title'>LOGIN</h3>
               <form className='modal__form'>

                {loginSucses}
                <input className='modal__input' name='mail' type='email'
                 required minLength="6" maxLength="20" placeholder='Mail' 
                 onChange={this.mailInput} ></input>
                 {wrongMail}

      
                {/* <input className='modal__input' name='number' type='numbet' required maxLength="20" placeholder='Phone' ></input> */}
                <input className='modal__input' visible='true' name='password' 
                type='text' required minLength="5" maxLength="20" 
                placeholder='Password' onChange={this.passwordInput} ></input>
                {wrongPassword}
      
                <button className='modal__button' type="button" 
                onClick={submitModal}>SUBMIT</button>
                <button className='modal__button' type="button">
                  REGISTRATION</button>
                <button className='modal__button red' type="button" 
                  onClick={modalClose}>CANCEL</button>
              </form>
            </div>
          </div>

    )
  }
}

// const ModalWindow = ({ modalClose, /*modalSubmit,*/}) => {
  
//   const mailInput = () =>{
//     console.log('mailInput');
//   }


//   const modalSubmit  = () => {
//     console.log('ModalSubmit')
//   }
  

//   return (
//     <div className="modal__login">
//       <div className="modal__store">
//         <h3 className='modal__title'>LOGIN</h3>
//         <form className='modal__form'>

//           <input className='modal__input' name='mail' type='email'
//            required minLength="6" maxLength="20" placeholder='Mail' 
//            onChange={mailInput} ></input>

//           {/* <input className='modal__input' name='number' type='numbet' required maxLength="20" placeholder='Phone' ></input> */}
//           <input className='modal__input' visible='true' name='password' 
//           type='text' required minLength="5" maxLength="20" 
//           placeholder='Password' ></input>

//           <button className='modal__button' type="button" onClick={modalSubmit}>
//             SUBMIT</button>
//           <button className='modal__button' type="button">REGISTRATION</button>
//           <button className='modal__button red' type="button" onClick={modalClose}>
//             CANCEL
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

const mapStateToProps = state => {
  return {
    login : state.login,
    modal : state.modal,
  };
};

const mapDispatchToProps = dispatch => {
  const { modalClose, modalSubmit } = bindActionCreators(actions, dispatch);
  return {
    modalClose,
    modalSubmit,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow); //коненкт оборачивает counter
