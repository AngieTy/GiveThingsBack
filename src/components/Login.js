import React, { Component } from "react";
import HomeHeaderNav from "./HomeHeaderNav";
import ImgDeco from "../assets/assets/Decoration.svg";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
    emailError: "",
    passwordError: ""
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

    const { email, password } = this.state;

    if (password.length < 6 || password.length === 0) {
      this.setState({
        passwordError: "Hasło musi mieć conajmniej 6 znaków."
      });
      console.log("sukces");
    } else {
      this.setState({
        passwordError: ""
      });
      console.log("sukces1.5");
    }

    if (validateEmail(email) === false || email.length === 0) {
      this.setState({
        emailError: "Email nie jest poprawny."
      });

      console.log("sukces2");
    } else {
      this.setState({
        emailError: ""
      });
    }
    if (validateEmail(email) === true && password.length > 6) {
      console.log("sukces4");
      this.setState({
        email: "",
        password: "",
        emailError: "",
        passwordError: ""
      });
    }
    //  else {
    //   this.setState({
    //     errors: {
    //       emailError: ""
    //     }
    //   });
    //   console.log("sukces3");
    // }
  };

  render() {
    const { email, password, passwordError, emailError } = this.state;

    return (
      <section className="login">
        <HomeHeaderNav />
        <main className="login-container">
          <h2 className="login-header">Zaloguj się</h2>
          <img src={ImgDeco} alt="decoration_img" />
          <form className="login-form" onSubmit={this.handleSubmit} noValidate>
            <div className="login-input-box">
              <label className="login-input-title">
                Email
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
                {<span className="error">{emailError}</span>}
              </label>
              <label className="login-input-title">
                Hasło
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
                {<span className="error">{passwordError}</span>}
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

export default Login;
