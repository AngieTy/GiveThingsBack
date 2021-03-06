import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import RegisterHeaderNav from "./RegisterHeaderNav";
import ImgDeco from "../assets/assets/Decoration.svg";
import { registerUser, keepUserId } from "../reduxStuff/actions/auth";
import "firebase/firestore";
import firebase from "firebase/app";

class Registration extends Component {
  state = {
    email: "",
    password: "",
    repeatPassword: "",
    errorEmail: "",
    errorPassword: "",
    errorRepeatPassword: "",
    errorAuthMessage: "",
    user: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //wyciągnięcie id uzytkownika
  handleDownloadUserId = userId => {
    this.setState(() => {
      this.props.userId(userId);
    });
  };
  handleGetEmailUsers = emails => {
    console.log(emails);
  };
  handleSubmit = e => {
    e.preventDefault();
    const validateEmail = email => {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    };
    const { email, password, repeatPassword } = this.state;

    if (password.length < 6) {
      this.setState({
        errorPassword: "Hasło musi mieć conajmniej 6 znaków."
      });
    } else {
      this.setState({
        errorPassword: ""
      });
    }
    if (validateEmail(email) === false) {
      this.setState({
        errorEmail: "email nie jest poprawny."
      });
    } else {
      this.setState({
        errorEmail: ""
      });
    }
    if (password !== repeatPassword || repeatPassword.length === 0) {
      this.setState({
        errorRepeatPassword: "Hasło musi być takie samo."
      });
    } else {
      this.setState({
        errorRepeatPassword: ""
      });
    }
    if (
      validateEmail(email) === true &&
      password.length > 5 &&
      repeatPassword === password
    ) {
      this.setState(
        {
          email: "",
          password: "",
          repeatPassword: "",
          errorEmail: "",
          errorPassword: "",
          errorRepeatPassword: "",
          errorAuthMessage: ""
        },
        () => {
          this.props.register(email, password);
        }
      );
      //wysyłka do FireStore - PROBLEM Z WALIDACJA FIREBASE
      const db = firebase.firestore();
      db.settings({
        timestampsInSnapshots: true
      });
      const userRef = db.collection("users").add({
        email: this.state.email,
        password: this.state.password
      }); //pobranie id uzytownika
      userRef.then(response => {
        this.handleDownloadUserId(response.id);
      });
    }
    if (!this.props.isAuthenticated) {
      this.setState({
        errorAuthMessage: "Podany email istnieje w bazie."
      });
    } else {
      this.setState({
        errorAuthMessage: ""
      });
    }
  };

  render() {
    const {
      email,
      password,
      repeatPassword,
      errorEmail,
      errorPassword,
      errorRepeatPassword,
      errorAuthMessage
    } = this.state;
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/" />;
    } else {
      return (
        <section className="registration">
          <RegisterHeaderNav />
          <main className="registration-container">
            <h2 className="registration-header">Zarejestruj się</h2>
            <img src={ImgDeco} alt="decoration_img" />
            <form
              className="registration-form"
              onSubmit={this.handleSubmit}
              noValidate
            >
              <div className="registration-input-box">
                <label className="registration-input-title">
                  Email
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                  />
                  {<span className="error">{errorEmail}</span>}
                </label>
                <label className="registration-input-title">
                  Hasło
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                  />
                  {<span className="error">{errorPassword}</span>}
                </label>
                <label className="registration-input-title">
                  Powtórz hasło
                  <input
                    type="password"
                    name="repeatPassword"
                    value={repeatPassword}
                    onChange={this.handleChange}
                  />
                  {<span className="error">{errorRepeatPassword}</span>}
                  {<span className="error">{errorAuthMessage}</span>}
                </label>
              </div>
              <div className="registration-btns-box">
                <button className="btn-register">Załóż konto</button>
                <Link to="/logowanie">
                  <button className="btn-login">Zaloguj się</button>
                </Link>
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
    register: (email, password) => {
      dispatch(registerUser(email, password));
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
export default connect(mapStateToProps, mapDispatchToProps)(Registration);
