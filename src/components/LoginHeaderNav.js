import React, { Component } from "react";
import { Link } from "react-router-dom";

class LoginHeaderNav extends Component {
  render() {
    return (
      <div className="home-nav-box">
        <div className="home-logs">
          <Link to="/logowanie">
            <button className="home-log-btn"> Zaloguj się </button>
          </Link>
          <Link to="/rejestracja">
            <button className="home-register-btn">Załóż konto</button>
          </Link>
        </div>
        <nav className="home-nav">
          <ul className="home-nav-list">
            <li>
              <Link to="/">Start</Link>
            </li>
            <li>
              <Link to="/">O co chodzi?</Link>
            </li>
            <li>
              <Link to="/">O nas</Link>
            </li>
            <li>
              <Link to="/">Fundacja i organizacja</Link>
            </li>
            <li>
              <Link to="/">Kontakt</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default LoginHeaderNav;
