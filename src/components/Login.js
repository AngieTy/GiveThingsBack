import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { loginUser } from "../reduxStuff/actions/auth";
import LoginHeaderNav from "./LoginHeaderNav";
import ImgDeco from "../assets/assets/Decoration.svg";

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
    if (validateEmail(email) === true && password.length > 5) {
      console.log("sukces4");
      console.log(email, password);
      this.setState(
        {
          email: "",
          password: "",
          emailError: "",
          passwordError: ""
        },
        () => {
          this.props.login(email, password);
        }
      );
    }
  };

  render() {
    const { email, password, passwordError, emailError } = this.state;
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
}
function mapDispatchToProps(dispatch) {
  return {
    login: (email, password) => {
      dispatch(loginUser(email, password));
    }
  };
}
function mapStateToProps(state) {
  return {
    isLoggingIn: state.auth.isLoggingIn,
    loginError: state.auth.loginError,
    isAuthenticated: state.auth.isAuthenticated
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
