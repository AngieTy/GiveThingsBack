import React, { Component } from "react";
import HomeHeaderNav from "./HomeHeaderNav";
import ImgDeco from "../assets/assets/Decoration.svg";
import { Link } from "react-router-dom";

const validateEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {
      email: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    e.preventDefault();
    const { email, password } = this.state;
    let errors = this.state.errors;

    if (password.length < 6) {
      errors.password = "Hasło musi mieć conajmniej 6 znaków.";
    } else {
      errors.password = "";
    }
    if (!validateEmail(email)) {
      errors.email = "Email nie jest poprawny.";
    } else {
      errors.email = "";
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    // const { email, password } = this.state;
    // let errors = this.state.errors;

    // if (password.length < 6) {
    //   errors.password = "Hasło musi mieć conajmniej 6 znaków.";
    // }
    // if (validateEmail(email)) {
    //   errors.email = "Email nie jest poprawny.";
    //   return false;
    // }
  };

  render() {
    const { email, password, errors } = this.state;
    return (
      <section className="login">
        <HomeHeaderNav />
        <main className="login-container">
          <h2 className="login-header">Zaloguj się</h2>
          <img src={ImgDeco} alt="decoration_img" />
          <form className="login-form" onSubmit={this.handleSubmit}>
            <div className="login-input-box">
              <label className="login-input-title">
                Email
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
                {errors.email.length > 0 && (
                  <span className="error">{errors.email}</span>
                )}
              </label>
              <label className="login-input-title">
                Hasło
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
                {errors.password.length > 6 && (
                  <span className="error">{errors.password}</span>
                )}
              </label>
            </div>
            <div className="login-btns-box">
              <Link to="/rejestracja">
                <button className="btn-register">Załóż konto</button>
              </Link>
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

export default Login;
