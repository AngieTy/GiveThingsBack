import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeHeaderNav from "./HomeHeaderNav";
import ImgDeco from "../assets/assets/Decoration.svg";

class Registration extends Component {
  render() {
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
                <input type="email" name="email" />
              </label>
              <label className="registration-input-title">
                Hasło
                <input type="password" name="password" />
              </label>
              <label className="registration-input-title">
                Powtórz hasło
                <input type="password" name="password" />
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
