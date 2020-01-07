import React, { Component } from "react";
import HomeHeaderNav from "./HomeHeaderNav";
import ImgDeco from "../assets/assets/Decoration.svg";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <section className="login">
        <HomeHeaderNav />
        <main className="login-container">
          <h2 className="login-header">Zaloguj się</h2>
          <img src={ImgDeco} alt="decoration_img" />
          <form className="login-form">
            <div className="login-input-box">
              <label className="login-input-title">
                Email
                <input type="email" name="email" />
              </label>
              <label className="login-input-title">
                Hasło
                <input type="password" name="password" />
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
