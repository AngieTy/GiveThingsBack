import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeHeaderNav from "./HomeHeaderNav";
import ImgDeco from "../assets/assets/Decoration.svg";

const validateEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
class Registration extends Component {
  state = {
    email: "",
    password: "",
    repeatPassword: "",
    errors: {
      email: "",
      password: "",
      repeatPassword: ""
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    e.preventDefault();
    const { email, password, repeatPassword } = this.state;
    let errors = this.state.errors;

    if (password.length <= 5) {
      errors.password = "Hasło musi mieć conajmniej 6 znaków.";
    } else {
      errors.password = "";
    }
    if (!validateEmail(email)) {
      errors.email = "Email nie jest poprawny.";
    } else {
      errors.email = "";
    }
    if (password !== repeatPassword) {
      errors.repeatPassword = "Pola muszą być takie same.";
    } else {
      errors.repeatPassword = "";
    }
  };

  render() {
    const { email, password, errors, repeatPassword } = this.state;
    return (
      <section className="registration">
        <HomeHeaderNav />
        <main className="registration-container">
          <h2 className="registration-header">Zarejestruj się</h2>
          <img src={ImgDeco} alt="decoration_img" />
          <form className="registration-form">
            <div className="registration-input-box">
              <label className="registration-input-title">
                Email
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
                {<span className="error">{errors.email}</span>}
              </label>
              <label className="registration-input-title">
                Hasło
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
                {<span className="error">{errors.password}</span>}
              </label>
              <label className="registration-input-title">
                Powtórz hasło
                <input
                  type="password"
                  name="repeatPassword"
                  value={repeatPassword}
                  onChange={this.handleChange}
                />
                {<span className="error">{errors.repeatPassword}</span>}
              </label>
            </div>
            <div className="registration-btns-box">
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

export default Registration;
