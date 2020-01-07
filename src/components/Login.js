import React, { Component } from "react";
import HomeHeaderNav from "./HomeHeaderNav";
import "../scss/main.scss";
import ImgDeco from "../assets/assets/Decoration.svg";

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
              <button className="btn-register">Załóż konto</button>
              <button className="btn-login">Zaloguj się</button>
            </div>
          </form>
        </main>
      </section>
    );
  }
}

export default Login;
