import React, { Component } from "react";
import { connect } from "react-redux"; //дает доступ к store
import { bindActionCreators } from "redux"; //bind action && dispatch
import * as actions from "../../../actions"; //импортируем все екшены(1) в bindActionCreator

class ModalWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: "",
      password: "",
      isValidMail: true,
      isValidPassword: true,
      isLogin: true,
      users: [
        // {
        //   mail: 'T@Mail.ru',
        //   password: 11111,
        // },
        // {
        //   mail: 'O@log.net',
        //   password: 12345,
        // },
      ]
    };
  }

  mailInput = event => {
    this.setState({ mail: event.target.value });
  };

  passwordInput = event => {
    this.setState({ password: event.target.value });
  };

  componentDidMount() {
    //setState users from LocalStprage
    let users = JSON.parse(localStorage.getItem("users"));
    if (!users) {
      this.setState({ users: [] });
    } else {
      this.setState({ users: users });
    }
  }

  render() {
    const { modalClose, logIn} = this.props;
    let wrongMail = "";
    let wrongPassword = "";
    let loginSucses = "";

    const submitModal = () => {
      if (isInputValid()) {
        if (!isMailExist()) {
          addNewUser();
          this.setState({ isLogin: false });
          logIn();
          setTimeout(modalClose, 1800);
        } else if (!isPasswordValid()) {
          return this.setState({ isValidPassword: false });
        } else {
          this.setState({ isLogin: false });
          logIn();
          setTimeout(modalClose, 1800);
        }
      }
    };

    const isInputValid = () => {
      let mail = this.state.mail;
      let password = this.state.password;
      let mailCheck = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+.([A-Za-z]{2,4})$/i;
      let passwordCheck = /^[а-яіІїЇєЄА-ЯёЁa-zA-Z0-9]+$/;
      let m = "";
      let p = "";

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

      if (m && p) {
        // console.log(`m: ${m}, p: ${p}`);
        return true;
      }
    };

    const createNewUser = () => {
      return {
        mail: this.state.mail,
        password: this.state.password
      };
    };

    const addNewUser = () => {
      console.log(this.state.users);
      let obj = createNewUser();
      let [...prevState] = this.state.users;
      let newUsers = [...prevState, obj];
      updateLocalStor(newUsers);
      return this.setState({ users: newUsers });
    };

    const updateLocalStor = newUsers => {
      localStorage.setItem("users", JSON.stringify(newUsers));
    };

    const isPasswordValid = () => {
      let { mail, password, users } = this.state;
      let user = users.filter(user => user.mail === mail);
      // console.log(user[0].password);

      if (user[0].password === password) {
        // alert('pas valid');
        return true;
      } else {
        // alert('pas InValid');
        return false;
      }
    };

    const isMailExist = () => {
      let { mail, users } = this.state;
      let user = users.filter(user => user.mail === mail);
      // console.log(user);
      if (user.length > 0) {
        // alert('mail exist');
        return true;
      } else {
        return false;
      }

      // const verifyData = () => {
      //   if ( checkPas() )
      // }

      // users.forEach((obj) =>{
      // if(obj.mail === mail){
      //   console.log(true);
      //   return true;
      // }
      // })
    };

    // const getUsers = () => {
    //   console.log(this.state.users);
    // }

    if (!this.state.isValidMail) {
      wrongMail = <p className="modal__warning">E-mail is not corect</p>;
    }
    if (!this.state.isValidPassword) {
      wrongPassword = <p className="modal__warning">Password is not corect</p>;
    }
    if (!this.state.isLogin) {
      loginSucses = <p className="modal__sucses">Accses is allowed...</p>;
    }

    return (
      <div className="modal__login">
        <div className="modal__store">
          <h3 className="modal__title">LOGIN </h3>
          <form className="modal__form">
            {loginSucses}
            <input
              className="modal__input"
              name="mail"
              type="email"
              required
              minLength="6"
              maxLength="20"
              placeholder="Mail"
              onChange={this.mailInput}
            ></input>
            {wrongMail}

            {/* <input className='modal__input' name='number' type='numbet' required maxLength="20" placeholder='Phone' ></input> */}
            <input
              className="modal__input"
              visible="true"
              name="password"
              type="text"
              required
              minLength="5"
              maxLength="20"
              placeholder="Password"
              onChange={this.passwordInput}
            ></input>
            {wrongPassword}

            <button
              className="modal__button"
              type="button"
              onClick={submitModal}
            >
              LOGIN {this.user}
            </button>
            {/* <button className='modal__button' type="button" onClick={addNewUser}>
                  REGISTRATION</button> */}
            <button
              className="modal__button red"
              type="button"
              onClick={modalClose}
            >
              CANCEL
            </button>
            {/* <button className='modal__button red' type="button" 
                  onClick={getUsers}>CHECK!@!</button> */}
          </form>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    isLogged: state.modal.isLogged,
    user: state.modal.user,
  };
};

const mapDispatchToProps = dispatch => {
  const {logIn, modalClose, modalSubmit } = bindActionCreators(actions, dispatch)
  return {
    modalClose,
    modalSubmit,
    logIn,
    // logIn: () => {logIn()},
    // inc: () => dispatch(inc())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow); //коненкт оборачивает counter
