import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";
import RegisterHeaderNav from "./RegisterHeaderNav";
import ImgDeco from "../assets/assets/Decoration.svg";
import fire from "./Firebase/Fire";

class Registration extends Component {
  state = {
    email: "",
    password: "",
    repeatPassword: "",
    errorEmail: "",
    errorPassword: "",
    errorRepeatPassword: "",
    user: "",
    isRegistered: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const validateEmail = email => {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    };

    const {
      email,
      password,
      repeatPassword,
      errorEmail,
      errorPassword,
      errorRepeatPassword
    } = this.state;

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
      fire
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(u => {
          console.log(u);
          this.setState({
            isRegistered: true
          });
        })
        .catch(error => {
          console.log(error);
        });
      console.log("sukces4");
      this.setState({
        email: "",
        password: "",
        repeatPassword: "",
        errorEmail: "",
        errorPassword: "",
        errorRepeatPassword: ""
      });
      return true;
    }
  };

  render() {
    const {
      email,
      password,
      repeatPassword,
      errorEmail,
      errorPassword,
      errorRepeatPassword
    } = this.state;
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

export default Registration;
