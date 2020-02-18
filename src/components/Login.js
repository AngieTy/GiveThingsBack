import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { loginUser } from "../reduxStuff/actions/auth";
import { keepUserId } from "../reduxStuff/actions/auth";
import "firebase/firestore";
import firebase from "firebase/app";
import LoginHeaderNav from "./LoginHeaderNav";
import ImgDeco from "../assets/assets/Decoration.svg";

class Login extends Component {
  state = {
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
    authError: ""
  };

  handleChangeInputValue = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleDownloadLoggedUserId = id => {
    console.log(id);
    this.props.userId(id);
  };

  handleSubmit = e => {
    e.preventDefault();

    const validateEmail = email => {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    };

    const { email, password } = this.state;
    if (password.length < 6 || password.length === 0) {
      this.setState({
        passwordError: "Hasło musi mieć conajmniej 6 znaków."
      });
    } else {
      this.setState({
        passwordError: ""
      });
    }
    if (validateEmail(email) === false || email.length === 0) {
      this.setState({
        emailError: "Email nie jest poprawny."
      });
    } else {
      this.setState({
        emailError: ""
      });
    }
    if (validateEmail(email) === true && password.length > 5) {
      console.log("Login poprawny!");
      this.setState(
        {
          email: "",
          password: "",
          emailError: "",
          passwordError: "",
          authError: ""
        },
        () => {
          this.props.login(email, password);
          //zapytanie do bazy o id uzytkownika, ktory sie loguje
          const db = firebase.firestore();
          db.collection("users")
            .where("email", "==", this.state.email)
            .get()
            .then(response => {
              response.docs.forEach(doc => {
                this.handleDownloadLoggedUserId(doc.id);
              });
            });
        }
      );
    }
  };

  render() {
    const {
      email,
      password,
      passwordError,
      emailError,
      authError
    } = this.state;
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/" />;
    } else {
      return (
        <section className="login">
          <LoginHeaderNav />
          <main className="login-container">
            <h2 className="login-header">Zaloguj się</h2>
            <img src={ImgDeco} alt="decoration_img" />
            <form
              className="login-form"
              onSubmit={this.handleSubmit}
              noValidate
            >
              <div className="login-input-box">
                <label className="login-input-title">
                  Email
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChangeInputValue}
                  />
                  {<span className="error">{emailError}</span>}
                </label>
                <label className="login-input-title">
                  Hasło
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChangeInputValue}
                  />
                  {<span className="error">{passwordError}</span>}
                  {<span className="error">{authError}</span>}
                </label>
              </div>
              <div className="login-btns-box">
                <Link to="/rejestracja">
                  <button className="btn-register">Załóż konto</button>
                </Link>
                <button className="btn-login">Zaloguj się</button>
              </div>
            </form>
          </main>
        </section>
      );
    }
  }
}
function mapDispatchToProps(dispatch) {
  return {
    login: (email, password) => {
      dispatch(loginUser(email, password));
    },
    userId: id => {
      dispatch(keepUserId(id));
    }
  };
}
function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
