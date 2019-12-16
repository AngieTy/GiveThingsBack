import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

class HomeHeaderNav extends Component {
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
              <a href="#">Start</a>
            </li>
            <li>
              <a href="#">O co chodzi?</a>
            </li>
            <li>
              <a href="#">O nas</a>
            </li>
            <li>
              <a href="#">Fundacja i organizacja</a>
            </li>
            <li>
              <a href="#">Kontakt</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default HomeHeaderNav;
